import { useEffect, useState } from 'react'

import { contact, content, type ExperienceItem, type Language } from './cvContent'

const languages: Language[] = ['da', 'en']

function Icon({ name }: { name: 'download' | 'print' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === 'download' ? <><path d="M12 3v12m-5-5 5 5 5-5" /><path d="M5 16v5h14v-5" /></> : <><path d="M6 9V3h12v6M6 18H4V9h16v9h-2" /><path d="M6 14h12v7H6z" /><path d="M17 12h.01" /></>}
    </svg>
  )
}

function Experience({ item, compact = false }: { item: ExperienceItem; compact?: boolean }) {
  return (
    <article className={`experience-item ${compact ? 'compact' : ''}`}>
      <div className="entry-heading">
        <div>
          <h3>{item.role}</h3>
          <p className="organization">{item.org} <span className="entry-type">· {item.type}</span></p>
        </div>
        <p className="period">{item.period}</p>
      </div>
      {!compact && <p className="entry-summary">{item.summary}</p>}
      <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
      {item.relatedRole && (
        <div className="related-role">
          <div className="entry-heading">
            <div><h4>{item.relatedRole.title}</h4><p className="organization">{item.relatedRole.org}</p></div>
            <p className="period">{item.relatedRole.period}</p>
          </div>
          <ul>{item.relatedRole.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        </div>
      )}
    </article>
  )
}

export default function CVPage() {
  const [language, setLanguage] = useState<Language>(() => new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'da')
  const copy = content[language]
  const isDanish = language === 'da'
  const pdfName = `Mads-Dixen-CV-${language.toUpperCase()}.pdf`

  useEffect(() => {
    document.documentElement.lang = language
    document.title = `Mads-Dixen-CV-${language.toUpperCase()}`
    const url = new URL(window.location.href)
    url.searchParams.set('lang', language)
    window.history.replaceState(null, '', url)
  }, [language])

  const printCV = async () => {
    await document.fonts.ready
    await Promise.all(Array.from(document.images).map(image => image.decode().catch(() => undefined)))
    window.print()
  }

  const footer = (page: number) => (
    <footer className="page-footer">
      <span>{contact.name} <span className="footer-divider">/</span> Product Manager · Product Owner</span>
      <span>{page} / 2</span>
    </footer>
  )

  return (
    <main lang={language}>
      <nav className="toolbar" aria-label={isDanish ? 'CV-indstillinger' : 'CV settings'}>
        <a href="#cv" className="toolbar-name">{contact.name}<span>CV</span></a>
        <div className="toolbar-actions">
          <div className="language-switch" role="group" aria-label={isDanish ? 'Sprog' : 'Language'}>
            {languages.map(item => <button key={item} type="button" aria-pressed={language === item} onClick={() => setLanguage(item)}>{content[item].languageName}</button>)}
          </div>
          <button className="icon-button" type="button" onClick={printCV} aria-label={isDanish ? 'Udskriv CV' : 'Print CV'} title={isDanish ? 'Udskriv CV' : 'Print CV'}><Icon name="print" /></button>
          <a className="download-button" href={`${import.meta.env.BASE_URL}${pdfName}`} download={pdfName}><Icon name="download" /><span>{isDanish ? 'Gem PDF' : 'Download PDF'}</span></a>
        </div>
      </nav>

      <aside className="document-note" aria-label={isDanish ? 'PDF og udskrivning' : 'PDF and printing'}>
        <p><span className="note-dot" />{isDanish ? 'CV på to A4-sider' : 'Two-page A4 résumé'}<span className="note-separator">·</span>{isDanish ? 'Vælg sprog, og hent en færdig PDF' : 'Choose a language and download the PDF'}</p>
        <details><summary>{isDanish ? 'Indstillinger til udskrivning' : 'Print settings'}</summary><p>{isDanish ? 'Brug A4, 100 % skalering og ingen margener. Slå browserens sidehoved og sidefod fra. Aktivér baggrundsgrafik for at bevare farverne. Gem PDF-knappen giver en færdig fil med disse indstillinger.' : 'Use A4, 100% scale and no margins. Disable browser headers and footers. Enable background graphics to preserve the colours. The Download PDF button provides a file prepared with these settings.'}</p></details>
      </aside>

      <div className="cv-document" id="cv">
        <section className="cv-page" aria-label={isDanish ? 'Profil og erfaring' : 'Profile and experience'}>
          <header className="profile-header">
            <div className="profile-copy">
              <p className="eyebrow">{copy.eyebrow}</p>
              <h1>{contact.name}</h1>
              <p className="profile-title">{copy.title}</p>
              <address className="contact-details">
                <span>{copy.location}</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                <a href={contact.linkedin}>linkedin.com/in/madsdixen</a>
              </address>
            </div>
            <img className="portrait" src={`${import.meta.env.BASE_URL}portrait.jpg`} width="128" height="160" alt={isDanish ? 'Portræt af Mads Dixen' : 'Portrait of Mads Dixen'} />
          </header>

          <section className="profile-section">
            <h2>{isDanish ? 'Profil' : 'Profile'}</h2>
            <p>{copy.intro}</p>
          </section>

          <section className="experience-section">
            <h2>{isDanish ? 'Erhvervserfaring' : 'Professional experience'}</h2>
            {copy.experience.slice(0, 3).map(item => <Experience key={item.org} item={item} />)}
          </section>
          {footer(1)}
        </section>

        <section className="cv-page second-page" aria-label={isDanish ? 'Kompetencer og baggrund' : 'Skills and background'}>
          <header className="continuation-header"><span>{contact.name}</span><span>{isDanish ? 'Kompetencer og baggrund' : 'Skills and background'}</span></header>

          <section className="skills-section">
            <h2>{copy.sections.skills}</h2>
            <div className="skills-grid">
              {copy.skillGroups.map(group => (
                <div className="skill-group" key={group.label}><h3>{group.label}</h3><p>{group.items.join(' · ')}</p></div>
              ))}
            </div>
            <div className="technical-context"><h3>{copy.sections.tools}</h3><p>{copy.tools}</p></div>
          </section>

          <section className="earlier-experience">
            <h2>{isDanish ? 'Tidligere erfaring' : 'Earlier experience'}</h2>
            {copy.experience.slice(3).map(item => <Experience key={item.org} item={item} compact />)}
          </section>

          <section className="education-section">
            <h2>{copy.sections.education}</h2>
            {copy.education.map(item => (
              <article className="education-item" key={item.degree}>
                <div className="entry-heading"><div><h3>{item.degree}</h3><p className="organization">{item.school}</p></div><p className="period">{item.period}</p></div>
              </article>
            ))}
          </section>

          <section className="certifications-section">
            <h2>{copy.sections.certifications}</h2>
            <div className="certification-row">
              {copy.certifications.map(item => (
                <a key={item.name} className="certification" href={item.url} target="_blank" rel="noreferrer">
                  <img src={`${import.meta.env.BASE_URL}${item.image}`} width="80" height="80" alt="" />
                  <h3>{item.name}</h3>
                </a>
              ))}
            </div>
          </section>
          {footer(2)}
        </section>
      </div>
    </main>
  )
}
