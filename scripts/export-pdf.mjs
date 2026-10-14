import { chromium } from 'playwright'
import { preview } from 'vite'
import { existsSync, mkdirSync, copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Render the built site: downloads always match the deployed content.
const checkOnly = process.argv.includes('--check')
const localChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const executablePath = process.env.CV_CHROME_PATH || (process.platform === 'darwin' && existsSync(localChrome) ? localChrome : undefined)
let server
let browser
try {
  server = await preview({ preview: { host: '127.0.0.1', port: 4173, strictPort: false, open: false } })
  browser = await chromium.launch({ executablePath, headless: true })
  const base = server.config.base
  const address = server.httpServer.address()
  const output = resolve('dist')
  mkdirSync(output, { recursive: true })
  for (const language of ['da', 'en']) {
    const page = await browser.newPage({ viewport: { width: 1200, height: 1500 }, deviceScaleFactor: 1 })
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    await page.goto(`http://127.0.0.1:${address.port}${base}?lang=${language}`, { waitUntil: 'networkidle' })
    await page.emulateMedia({ media: 'print' })
    await page.evaluate(async () => {
      await document.fonts.ready
      await Promise.all(Array.from(document.images).map(image => image.decode()))
    })
    const layout = await page.evaluate(() => Array.from(document.querySelectorAll('.cv-page')).map(page => {
      const rect = page.getBoundingClientRect()
      const footer = page.querySelector('.page-footer').getBoundingClientRect()
      const previous = page.querySelector('.page-footer').previousElementSibling.getBoundingClientRect()
      return { height: rect.height, width: rect.width, footerBottom: footer.bottom - rect.top, contentBottom: previous.bottom - rect.top, footerTop: footer.top - rect.top }
    }))
    const a4Height = 297 * 96 / 25.4
    if (layout.length !== 2 || layout.some(page => page.height > a4Height + 1 || page.footerBottom > a4Height || page.contentBottom > page.footerTop)) {
      throw new Error(`${language}: content does not fit on two A4 pages: ${JSON.stringify(layout)}`)
    }
    if (errors.length) throw new Error(errors.join('\n'))
    if (!checkOnly) {
      const name = `Mads-Dixen-CV-${language.toUpperCase()}.pdf`
      await page.pdf({ path: resolve(output, name), format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false, tagged: true, outline: true })
      copyFileSync(resolve(output, name), resolve('public', name))
      console.log(`Created ${name} (two A4 pages, selectable text and live links)`)
    }
    const download = await page.locator('.download-button').getAttribute('href')
    const response = await page.request.get(new URL(download, page.url()).href)
    if (!response.ok() || !response.headers()['content-type']?.includes('application/pdf')) {
      throw new Error(`${language}: PDF download is unavailable`)
    }
    await page.emulateMedia({ media: 'screen' })
    await page.setViewportSize({ width: 390, height: 844 })
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)
    if (overflow) throw new Error(`${language}: horizontal overflow on mobile`)
    await page.getByRole('button', { name: language === 'da' ? 'English' : 'Dansk', exact: true }).click()
    const expected = language === 'da' ? 'en' : 'da'
    if (await page.locator('html').getAttribute('lang') !== expected || new URL(page.url()).searchParams.get('lang') !== expected) {
      throw new Error(`${language}: language switch failed`)
    }
    console.log(`${language}: print layout, PDF download, mobile width and language switch verified`)
    await page.close()
  }
} catch (error) {
  console.error(error)
  process.exitCode = 1
} finally {
  await browser?.close()
  await new Promise(resolve => server ? server.httpServer.close(resolve) : resolve())
}
