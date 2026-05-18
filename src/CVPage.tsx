import React, { useEffect, useMemo, useState } from 'react'

type Language = 'da' | 'en'

type ExperienceItem = {
  role: string
  org: string
  period: string
  logo: string
  type: string
  summary: string
  bullets: string[]
  relatedRole?: {
    title: string
    org: string
    period: string
    bullets: string[]
  }
}

const contact = {
  name: 'Mads Dixen',
  email: 'mads.dixen@gmail.com',
  phone: '+45 31 31 38 68',
  linkedin: 'https://www.linkedin.com/in/madsdixen/',
  cvUrl: 'https://madsdixen.github.io/cv/',
}

const content = {
  da: {
    languageName: 'Dansk',
    eyebrow: 'Product Manager / Product Owner',
    title: 'Produktansvarlig med teknisk forståelse, brugerblik og sans for sikker drift',
    location: 'Aarhus, Danmark',
    intro:
      'Jeg arbejder med digitale produkter i krydsfeltet mellem brugere, forretning, IT-drift og leverandører. Min styrke er at skabe overblik, prioritere det vigtigste og få komplekse systemændringer sikkert fra behov til løsning.',
    targetRoles: ['Product Owner', 'Product Manager', 'Digital produktansvarlig', 'IT Product Manager'],
    ctaPrimary: 'Kontakt',
    ctaSecondary: 'LinkedIn',
    meta: {
      current: 'Nuværende fokus',
      education: 'Uddannelse',
      availability: 'Målrettet roller',
    },
    metaItems: [
      'Produktansvar for digitale studie-, eksamens- og evalueringssystemer',
      'MSc ITKO, Aarhus BSS',
      'PM/PO-roller i digitale produkter, platforme, SaaS og IT-nære organisationer',
    ],
    sections: {
      value: 'Relevant for PM/PO-roller',
      skills: 'Kompetencer',
      experience: 'Erfaring',
      education: 'Uddannelse',
      certifications: 'Certificeringer',
      tools: 'Teknologisk forståelse',
      footer: 'Kontakt',
    },
    valueProps: [
      {
        label: 'Produktprioritering',
        text: 'Skaber overblik over behov, afhængigheder og risici, så roadmap og backlog kan prioriteres realistisk.',
      },
      {
        label: 'Samarbejde på tværs',
        text: 'Får brugere, drift, ledelse, IT og leverandører til at arbejde ud fra samme retning og beslutningsgrundlag.',
      },
      {
        label: 'Fra behov til løsning',
        text: 'Kobler brugerindsigt, krav, test og implementering, så løsninger kan lande ordentligt i organisationen.',
      },
      {
        label: 'Sikker og stabil drift',
        text: 'Tager højde for datakvalitet, compliance og informationssikkerhed i produktbeslutninger og ændringsforløb.',
      },
    ],
    skillGroups: [
      {
        label: 'Produkt',
        items: ['Roadmaps', 'Backlog', 'Prioritering', 'Kravarbejde', 'Release- og upgrade-koordinering'],
      },
      {
        label: 'Leverance',
        items: ['Agile/Scrum', 'Test og QA', 'Procesoptimering', 'Leverandørsamarbejde', 'Kvalitetssikring'],
      },
      {
        label: 'Brugerindsigt og UX',
        items: ['Brugerresearch', 'Kunderejser', 'Wireframes', 'Prototyper', 'Brugercentreret design'],
      },
      {
        label: 'Teknik og governance',
        items: ['Informationssikkerhed', 'ISO27001', 'NIS2', 'GDPR', 'Integrationer', 'Automatisering'],
      },
    ],
    experience: [
      {
        role: 'Product Manager',
        org: 'Studiesystemer, Aarhus University',
        period: '2024 - nu',
        logo: 'logos/au.png',
        type: 'Fuldtid',
        summary:
          'Produktansvar for digitale eksamens- og evalueringssystemer med mange brugergrupper, driftsafhængigheder og eksterne leverandører.',
        bullets: [
          'Prioriterer roadmap, backlog, opgraderinger, testforløb, datakvalitet og kvalitetssikring for WISEflow og Explorance Blue.',
          'Omsætter behov fra fakulteter, drift, support og leverandører til klare krav, beslutninger og gennemførlige leverancer.',
          'Koordinerer ændringer på tværs af IT, uddannelsesadministration og systemleverandører med fokus på stabil drift.',
          'Kvalificerer integrationer, databehov, fejlsøgning og konsekvenser ved ændringer i komplekse systemlandskaber.',
        ],
        relatedRole: {
          title: 'Lokal informationssikkerhedskoordinator',
          org: 'AU Uddannelse',
          period: '2024 - nu',
          bullets: [
            'Koordinerer lokale ISMS-aktiviteter, awareness, aktivoverblik, risikovurderinger og rapportering.',
            'Sikrer at produkt- og driftsbeslutninger tager højde for ISO27001, NIS2 og GDPR i samarbejde med central IT.',
          ],
        },
      },
      {
        role: 'Cybersecurity Consultant',
        org: 'IQ Metal - Integrated Metal Solutions',
        period: '2024',
        logo: 'logos/iqmetal.png',
        type: 'Praktik',
        summary:
          'Praktisk arbejde med informationssikkerhed, risici og implementerbare sikkerhedstiltag i en produktionsvirksomhed.',
        bullets: [
          'Udarbejdede sikkerhedspolitikker, procedurer og awarenessmateriale med fokus på praktisk anvendelse.',
          'Gennemførte risikovurderinger og sårbarhedsanalyser som grundlag for prioritering af sikkerhedsindsatser.',
          'Omsatte compliancekrav og tekniske risici til konkrete anbefalinger for ledelse og medarbejdere.',
        ],
      },
      {
        role: 'UX Designer',
        org: 'Wakeque',
        period: '2024',
        logo: 'logos/wakeque.png',
        type: 'Praktik',
        summary:
          'Produktnært UX-arbejde på onboarding og kunderejse for et vertikalt SaaS-produkt.',
        bullets: [
          'Kortlagde brugerbehov og forbedringsmuligheder i onboardingflow med research, wireframes og prototyper.',
          'Samarbejdede med udviklere om at omsætte brugerindsigter til implementerbare produktforbedringer.',
          'Bidrog til tydeligere brugerflows og bedre sammenhæng mellem produktværdi, interface og teknisk løsning.',
        ],
      },
      {
        role: 'Teaching Assistant, Software Development',
        org: 'MSc ITKO, Aarhus BSS',
        period: '2022 - 2023',
        logo: 'logos/bss.png',
        type: 'Deltid',
        summary:
          'Undervisnings- og feedbackrolle i softwareudvikling for ITKO-studerende.',
        bullets: [
          'Faciliterede øvelser, gav feedback på opgaver og hjalp studerende med at forstå softwareudvikling i praksis.',
          'Styrkede evnen til at forklare tekniske problemstillinger klart til ikke-specialister.',
        ],
      },
      {
        role: 'ISO27001 Consultant',
        org: 'ApplicateIT',
        period: '2021',
        logo: 'logos/applicate.png',
        type: 'Praktik',
        summary:
          'Arbejde med ISO27001 og opbygning af informationssikkerhedsledelse i praksis.',
        bullets: [
          'Arbejdede med ISO27001-standarden og bidrog til etablering og drift af et information security management system.',
        ],
      },
    ] satisfies ExperienceItem[],
    education: [
      {
        degree: 'MSc - IT, Communication & Organization (ITKO)',
        school: 'Aarhus BSS, Aarhus University',
        period: '2021 - 2023',
        logo: 'logos/bss.png',
      },
      {
        degree: 'BA - Digital Design, IT, Aesthetics & Interaction and Information Studies',
        school: 'Aarhus University',
        period: '2017 - 2020',
        logo: 'logos/au.png',
      },
      {
        degree: 'AP - Service, Hospitality & Tourism Management (Sport & Event)',
        school: 'Dania - Business Academy',
        period: '2015 - 2017',
        logo: 'logos/dania.png',
      },
    ],
    certifications: [
      {
        name: 'Professional Scrum Product Owner I (PSPO I)',
        image: 'pspo.png',
        url: 'https://www.credly.com/badges/32e3ed17-021a-471d-9028-47629ae6f15a/public_url',
      },
      {
        name: 'Microsoft Certified: Power Platform Fundamentals',
        image: 'ppf.png',
        url: 'https://learn.microsoft.com/api/credentials/share/en-gb/madsdixen-7648/861AED63E5788481?sharingId=5C88479DBB3C0924',
      },
      {
        name: 'Google Cybersecurity Certificate',
        image: 'gcc.png',
        url: 'https://coursera.org/share/4a0c5f52428c0cf2ca39a38f7ae7db45',
      },
    ],
    tools:
      'Azure, Power Platform, API management, integrationer, SQL, JavaScript, Python, C#, test/QA, automatisering og AI-værktøjer. Jeg kan tale med både brugere, udviklere, drift og leverandører og omsætte tekniske hensyn til produktbeslutninger.',
    footerText: 'Produkt, teknologi, brugerindsigt og governance samlet i en praktisk PM/PO-profil.',
  },
  en: {
    languageName: 'English',
    eyebrow: 'Product Manager / Product Owner',
    title: 'Product-minded profile with technical understanding, user focus and operational judgment',
    location: 'Aarhus, Denmark',
    intro:
      'I work with digital products at the intersection of users, business needs, IT operations and vendors. My strength is creating clarity, prioritizing what matters and moving complex system changes from need to workable solution.',
    targetRoles: ['Product Owner', 'Product Manager', 'Digital Product Lead', 'IT Product Manager'],
    ctaPrimary: 'Contact',
    ctaSecondary: 'LinkedIn',
    meta: {
      current: 'Current focus',
      education: 'Education',
      availability: 'Target roles',
    },
    metaItems: [
      'Product ownership for digital study, exam and evaluation systems',
      'MSc ITKO, Aarhus BSS',
      'PM/PO roles in digital products, platforms, SaaS and IT-near organizations',
    ],
    sections: {
      value: 'Relevant for PM/PO roles',
      skills: 'Capabilities',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      tools: 'Technical fluency',
      footer: 'Contact',
    },
    valueProps: [
      {
        label: 'Product prioritization',
        text: 'Creates an overview of needs, dependencies and risks so roadmap and backlog can be prioritized realistically.',
      },
      {
        label: 'Cross-functional collaboration',
        text: 'Aligns users, operations, management, IT and vendors around a shared direction and decision basis.',
      },
      {
        label: 'From need to solution',
        text: 'Connects user insight, requirements, testing and implementation so solutions can land properly in the organization.',
      },
      {
        label: 'Stable and secure operations',
        text: 'Factors data quality, compliance and information security into product decisions and change processes.',
      },
    ],
    skillGroups: [
      {
        label: 'Product',
        items: ['Roadmaps', 'Backlog', 'Prioritization', 'Requirements', 'Release and upgrade coordination'],
      },
      {
        label: 'Delivery',
        items: ['Agile/Scrum', 'Testing and QA', 'Process optimization', 'Vendor collaboration', 'Quality assurance'],
      },
      {
        label: 'Discovery & UX',
        items: ['User research', 'Customer journeys', 'Wireframes', 'Prototypes', 'User-centered design'],
      },
      {
        label: 'Tech & Governance',
        items: ['Information security', 'ISO27001', 'NIS2', 'GDPR', 'Integrations', 'Automation'],
      },
    ],
    experience: [
      {
        role: 'Product Manager',
        org: 'Studiesystemer, Aarhus University',
        period: '2024 - Present',
        logo: 'logos/au.png',
        type: 'Full-time',
        summary:
          'Product responsibility for digital exam and evaluation systems with many user groups, operational dependencies and external vendors.',
        bullets: [
          'Prioritize roadmap, backlog, upgrades, test tracks, data quality and quality assurance for WISEflow and Explorance Blue.',
          'Translate needs from faculties, operations, support and vendors into clear requirements, decisions and feasible deliveries.',
          'Coordinate changes across IT, educational administration and system vendors with focus on stable operations.',
          'Qualify integrations, data needs, troubleshooting and change impact in complex system landscapes.',
        ],
        relatedRole: {
          title: 'Local Information Security Coordinator',
          org: 'AU Uddannelse',
          period: '2024 - Present',
          bullets: [
            'Coordinate local ISMS activities, awareness, asset overview, risk assessments and reporting.',
            'Ensure product and operational decisions account for ISO27001, NIS2 and GDPR in collaboration with central IT.',
          ],
        },
      },
      {
        role: 'Cybersecurity Consultant',
        org: 'IQ Metal - Integrated Metal Solutions',
        period: '2024',
        logo: 'logos/iqmetal.png',
        type: 'Internship',
        summary:
          'Hands-on work with information security, risks and implementable security measures in a manufacturing company.',
        bullets: [
          'Developed security policies, procedures and awareness material with focus on practical use.',
          'Conducted risk assessments and vulnerability analyses as input for security prioritization.',
          'Translated compliance requirements and technical risks into concrete recommendations for management and employees.',
        ],
      },
      {
        role: 'UX Designer',
        org: 'Wakeque',
        period: '2024',
        logo: 'logos/wakeque.png',
        type: 'Internship',
        summary:
          'Product-oriented UX work on onboarding and customer journey for a vertical SaaS product.',
        bullets: [
          'Mapped user needs and improvement opportunities in the onboarding flow through research, wireframes and prototypes.',
          'Collaborated with developers to turn user insight into implementable product improvements.',
          'Contributed to clearer user flows and better alignment between product value, interface and technical solution.',
        ],
      },
      {
        role: 'Teaching Assistant, Software Development',
        org: 'MSc ITKO, Aarhus BSS',
        period: '2022 - 2023',
        logo: 'logos/bss.png',
        type: 'Part-time',
        summary:
          'Teaching and feedback role in software development for ITKO students.',
        bullets: [
          'Facilitated exercises, gave assignment feedback and helped students understand software development in practice.',
          'Strengthened the ability to explain technical topics clearly to non-specialists.',
        ],
      },
      {
        role: 'ISO27001 Consultant',
        org: 'ApplicateIT',
        period: '2021',
        logo: 'logos/applicate.png',
        type: 'Internship',
        summary:
          'Work with ISO27001 and practical information security management.',
        bullets: [
          'Worked with the ISO27001 standard and contributed to building and operating an information security management system.',
        ],
      },
    ] satisfies ExperienceItem[],
    education: [
      {
        degree: 'MSc - IT, Communication & Organization (ITKO)',
        school: 'Aarhus BSS, Aarhus University',
        period: '2021 - 2023',
        logo: 'logos/bss.png',
      },
      {
        degree: 'BA - Digital Design, IT, Aesthetics & Interaction and Information Studies',
        school: 'Aarhus University',
        period: '2017 - 2020',
        logo: 'logos/au.png',
      },
      {
        degree: 'AP - Service, Hospitality & Tourism Management (Sport & Event)',
        school: 'Dania - Business Academy',
        period: '2015 - 2017',
        logo: 'logos/dania.png',
      },
    ],
    certifications: [
      {
        name: 'Professional Scrum Product Owner I (PSPO I)',
        image: 'pspo.png',
        url: 'https://www.credly.com/badges/32e3ed17-021a-471d-9028-47629ae6f15a/public_url',
      },
      {
        name: 'Microsoft Certified: Power Platform Fundamentals',
        image: 'ppf.png',
        url: 'https://learn.microsoft.com/api/credentials/share/en-gb/madsdixen-7648/861AED63E5788481?sharingId=5C88479DBB3C0924',
      },
      {
        name: 'Google Cybersecurity Certificate',
        image: 'gcc.png',
        url: 'https://coursera.org/share/4a0c5f52428c0cf2ca39a38f7ae7db45',
      },
    ],
    tools:
      'Azure, Power Platform, API management, integrations, SQL, JavaScript, Python, C#, testing/QA, automation and AI tools. I can work with users, developers, operations and vendors and translate technical considerations into product decisions.',
    footerText: 'Product, technology, user insight and governance in a practical PM/PO profile.',
  },
} as const

const languages: Language[] = ['da', 'en']

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">{children}</h2>
      <div className="h-px flex-1 bg-zinc-200" />
    </div>
  )
}

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-white p-2">
      <img src={src} alt={alt} className="max-h-10 max-w-10 object-contain" />
    </div>
  )
}

export default function CVPage() {
  const [language, setLanguage] = useState<Language>('da')
  const copy = content[language]

  const phoneLink = useMemo(() => contact.phone.replace(/\s/g, ''), [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-zinc-900" lang={language}>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600">
            <span>{copy.location}</span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:inline-block" />
            <a className="underline-offset-4 hover:underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:inline-block" />
            <a className="underline-offset-4 hover:underline" href={`tel:${phoneLink}`}>
              {contact.phone}
            </a>
          </div>

          <div className="flex w-fit rounded-md border border-zinc-300 bg-zinc-50 p-1" aria-label="Language selector">
            {languages.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`rounded px-3 py-1.5 text-sm font-medium transition ${
                  language === item
                    ? 'bg-zinc-950 text-white shadow-sm'
                    : 'text-zinc-600 hover:bg-white hover:text-zinc-950'
                }`}
                aria-pressed={language === item}
              >
                {content[item].languageName}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[1fr_320px] lg:px-8 lg:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">{copy.eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              {contact.name}
            </h1>
            <p className="mt-4 max-w-4xl text-2xl font-medium leading-tight text-zinc-800 sm:text-3xl">
              {copy.title}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-700">{copy.intro}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {copy.targetRoles.map((role) => (
                <span key={role} className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-900">
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="rounded-md bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                {copy.ctaPrimary}
              </a>
              <a
                href={contact.linkedin}
                className="rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-950"
              >
                {copy.ctaSecondary}
              </a>
              <a
                href={contact.cvUrl}
                className="rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-950"
              >
                CV
              </a>
            </div>
          </div>

          <aside className="lg:justify-self-end">
            <img
              src="portrait.jpg"
              alt={`Portrait of ${contact.name}`}
              className="aspect-[4/5] w-full max-w-[280px] rounded-md object-cover shadow-sm ring-1 ring-zinc-200"
            />
            <dl className="mt-6 space-y-4 border-t border-zinc-200 pt-5">
              {[
                [copy.meta.current, copy.metaItems[0]],
                [copy.meta.education, copy.metaItems[1]],
                [copy.meta.availability, copy.metaItems[2]],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{label}</dt>
                  <dd className="mt-1 text-sm leading-6 text-zinc-800">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <SectionHeading>{copy.sections.value}</SectionHeading>
        <div className="grid gap-px overflow-hidden rounded-md border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-4">
          {copy.valueProps.map((item) => (
            <article key={item.label} className="bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-950">{item.label}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-4 lg:px-8">
        <SectionHeading>{copy.sections.skills}</SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {copy.skillGroups.map((group) => (
            <article key={group.label} className="rounded-md border border-zinc-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-sm text-zinc-700">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 rounded-md border border-zinc-200 bg-white p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">{copy.sections.tools}</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-700">{copy.tools}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <SectionHeading>{copy.sections.experience}</SectionHeading>
        <div className="space-y-4">
          {copy.experience.map((item) => (
            <article key={`${item.role}-${item.org}`} className="rounded-md border border-zinc-200 bg-white p-5 sm:p-6">
              <div className="grid gap-5 sm:grid-cols-[auto_1fr_auto]">
                <Logo src={item.logo} alt={`${item.org} logo`} />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-zinc-950">{item.role}</h3>
                    <span className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-600">
                      {item.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-zinc-600">{item.org}</p>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-700">{item.summary}</p>
                </div>
                <p className="text-sm font-medium text-zinc-500 sm:text-right">{item.period}</p>
              </div>

              <ul className="mt-5 space-y-2 pl-5 text-sm leading-6 text-zinc-700 marker:text-emerald-700">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              {item.relatedRole && (
                <div className="mt-5 border-t border-zinc-200 pt-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-zinc-950">{item.relatedRole.title}</h4>
                      <p className="mt-1 text-sm text-zinc-600">{item.relatedRole.org}</p>
                    </div>
                    <p className="text-sm font-medium text-zinc-500">{item.relatedRole.period}</p>
                  </div>
                  <ul className="mt-3 space-y-2 pl-5 text-sm leading-6 text-zinc-700 marker:text-emerald-700">
                    {item.relatedRole.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10 lg:px-8">
        <SectionHeading>{copy.sections.education}</SectionHeading>
        <div className="space-y-3">
          {copy.education.map((item) => (
            <article key={item.degree} className="grid gap-4 rounded-md border border-zinc-200 bg-white p-5 sm:grid-cols-[auto_1fr_auto]">
              <Logo src={item.logo} alt={`${item.school} logo`} />
              <div>
                <h3 className="font-semibold text-zinc-950">{item.degree}</h3>
                <p className="mt-1 text-sm text-zinc-600">{item.school}</p>
              </div>
              <p className="text-sm font-medium text-zinc-500 sm:text-right">{item.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12 lg:px-8">
        <SectionHeading>{copy.sections.certifications}</SectionHeading>
        <div className="grid gap-3 sm:grid-cols-3">
          {copy.certifications.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-36 items-center gap-5 rounded-md border border-zinc-200 bg-white p-5 transition hover:border-zinc-400 hover:shadow-sm"
            >
              <img src={item.image} alt={item.name} className="h-24 w-24 shrink-0 object-contain" />
              <h3 className="text-sm font-semibold leading-5 text-zinc-900">{item.name}</h3>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-sm text-zinc-300">{copy.footerText}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a className="text-zinc-100 underline-offset-4 hover:underline" href={contact.linkedin}>
              LinkedIn
            </a>
            <a className="text-zinc-100 underline-offset-4 hover:underline" href={`mailto:${contact.email}`}>
              {copy.sections.footer}
            </a>
            <a className="text-zinc-100 underline-offset-4 hover:underline" href={`tel:${phoneLink}`}>
              {contact.phone}
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
