# Mads Dixen · CV

Bilingual React CV with a two-page A4 layout and automatically generated PDFs.

## Develop

```sh
npm ci
npm run dev
```

Open the local Vite URL with `/cv/`. Danish is the default; `?lang=en` selects English. Language changes update the URL so a specific version can be shared.

## Build and export PDFs

```sh
npx playwright install chromium
npm run build
```

The build renders both languages in Chromium and creates `Mads-Dixen-CV-DA.pdf` and `Mads-Dixen-CV-EN.pdf` in `dist/` and `public/`. The copies in `public/` make downloads available during local development after a build. PDFs contain selectable text, clickable contact and certification links, accessibility tags, and two A4 pages without browser headers or footers.

On macOS, the exporter uses installed Google Chrome when available. Set `CV_CHROME_PATH` to use a specific browser executable. Other platforms use Playwright Chromium. No remote fonts or PDF service are required.

```sh
npm run pdf       # Regenerate PDFs from the existing dist build
npm run check:cv  # Verify the built CV without regenerating PDFs
npm run preview
```

The exporter fails if either language exceeds two A4 pages, an image fails to load, a PDF download is missing, the mobile layout overflows, or language switching fails. After editing content, run the full build and visually review both PDFs.

## Edit content and appearance

- `src/cvContent.ts`: Danish and English profile, experience, skills, education, certifications and contact information.
- `src/CVPage.tsx`: Document structure, language selection, download and print controls.
- `src/index.css`: Screen, mobile and A4 print styling.
- `public/portrait.jpg`: Profile photo. Keep a high-resolution original for clear PDF output.

Keep experience factual. Add measurable outcomes only when they can be substantiated. Preserve the page capacity checks when adding content.

## Print manually

Use the print button with A4, 100% scale, no margins, browser headers and footers disabled, and background graphics enabled. Use **Gem PDF / Download PDF** for the prepared PDF with consistent settings.

## Deployment

GitHub Actions installs Chromium, builds the site and generates fresh PDFs before deploying `dist/` to GitHub Pages. The Vite base URL is `/cv/`; change `vite.config.ts` if the published path changes.
