import React, { useMemo } from 'react'

export default function CVPage() {
  const profile = useMemo(() => ({
    name: 'Mads Dixen',
    title: 'IT & Product Management | InfoSec Coordination',
    summary:
      "Strategic and forward-thinking IT & Product Management professional with a master's degree in IT, Communication & Organization. Experienced in leading digital transformation, managing complex system landscapes, and coordinating information security. Strong blend of product management, cybersecurity, and stakeholder engagement to streamline processes, enhance user experiences, and ensure compliance.",
    location: 'Aarhus, Denmark',
    email: 'mads.dixen@gmail.com',
    phone: '+45 31 31 38 68',
    linkedin: 'https://www.linkedin.com/in/madsdixen/',
  }), [])

  const skills = [
    'Product Management',
    'Roadmaps & Backlogs',
    'Stakeholder Management',
    'Process Optimization',
    'Information Security (ISO27001, NIS2, GDPR)',
    'Azure · Power Platform',
    'API Management · Integrations',
    'SQL · JavaScript · Python · C#',
    'UX/UI',
    'Testing · QA',
    'Agile · Scrum',
    'Automation Solutions',
  ]

  const experience = [
    {
      role: 'Product Manager',
      org: 'Studiesystemer (AU)',
      period: '2024 – Present',
      logo: 'logos/au.png',
      type: 'Full-time',
      bullets: [
        'Product management for digital exam & evaluation systems (WISEflow, Explorance Blue).',
        'Own roadmaps & backlogs; drive upgrades, testing, data tasks, and quality gates.',
        'Cross-functional coordination with operations, IT, faculties, and vendors.',
        'Bridge business & IT with focus on efficiency and user experience.',
      ],
    },
    {
      role: 'Local Information Security Coordinator',
      org: 'AU Uddannelse',
      period: '2024 – Present',
      logo: 'logos/au.png',
      type: 'Full-time',
      bullets: [
        'Coordinate local ISMS activities and awareness initiatives.',
        'Support risk assessments, asset documentation, and management reporting.',
        'Align with ISO27001/NIS2/GDPR obligations; incident liaison with central IT.',
      ],
    },
    {
      role: 'Cybersecurity Consultant',
      org: 'Integrated Metal Solutions',
      period: '2024',
      logo: 'logos/iqmetal.png',
      type: 'Internship',
      bullets: [
        'Developing and implementing security policies and procedures.',
        'Conducting risk assessments and vulnerability analyses.',
        'Providing training and awareness programs for employees.',
        'Ensuring compliance with industry standards and regulations.',        
      ],
    },
        {
      role: 'UX Designer',
      org: 'SaaS (Water Sports Platform)',
      period: '2024',
      logo: 'logos/wakeque.png',
      type: 'Internship',
      bullets: [
        'Optimized onboarding and customer journey for a vertical SaaS product.',
        'Conducted user research, created wireframes, and developed prototypes.',
        'Collaborated with developers to implement user-centric designs.',
      ],
    },
    {
      role: 'Teaching Assistant (Software Development)',
      org: 'MSc ITKO – BSS Aarhus University',
      period: '2022 – 2023',
      logo: 'logos/bss.png',
      type: 'Part-time',
      bullets: [
        'Assisted course delivery and practical exercises in software development.',
        'Provided student support and feedback on assignments and projects.',
      ],
    },
    {
      role: 'ISO27001 Consultant',
      org: 'ApplicateIT',
      period: '2021',
      logo: 'logos/applicate.png',
      type: 'Internship',
      bullets: [
        'Studying the ISO27001 standard while creating and managing an information security management system.',
      ],
    },
  ]

  const education = [
    {
      degree: 'MSc – IT, Communication & Organization (ITKO)',
      school: 'BSS – Aarhus University',
      period: '2021 – 2023',
      logo: 'logos/bss.png',
    },
    {
      degree: 'BA – Digital Design, IT, Aesthetics & Interaction & Information Studies',
      school: 'Aarhus University',
      period: '2017 – 2020',
      logo: 'logos/au.png',
    },
    {
      degree: 'AP – Service, Hospitality & Tourism Management (Sport & Event)',
      school: 'Dania – Business Academy',
      period: '2015 – 2017',
      logo: 'logos/dania.png',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800 print:bg-white print:text-slate-900 print:p-10 print:max-w-4xl print:mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 print:static print:bg-transparent print:border-none print:px-0 print:py-0">
        <div className="relative mx-auto max-w-5xl px-4 print:max-w-none print:px-0">
          <div className="flex items-center justify-between py-3 print:py-0">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-sm print:hidden" />
              <div>
                <h1 className="text-lg font-semibold leading-tight tracking-tight print:text-2xl">{profile.name}</h1>
                <p className="text-xs text-slate-500 print:text-base">{profile.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm print:hidden">
              <button
                onClick={() => window.print()}
                className="rounded-xl border border-slate-200/70 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur hover:bg-white transition"
                aria-label="Print CV"
              >
                Print
              </button>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-14 print:max-w-none print:px-0 print:py-8">
        <div className="grid items-start gap-8 sm:grid-cols-[auto_1fr] print:grid-cols-1 print:gap-4">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-sky-200/60 via-indigo-200/50 to-fuchsia-200/40 blur-2xl print:hidden" />
            <img
              src="portrait.jpg"
              alt="Portrait of Mads Dixen"
              className="h-40 w-40 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-3xl object-cover shadow-xl ring-4 ring-white print:h-40 print:w-40 print:rounded-2xl print:ring-0 print:shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl print:text-3xl">{profile.name}</h2>
            <p className="mt-1 text-base font-medium text-slate-600 print:text-lg">{profile.title}</p>
            <div className="mt-3 h-1 w-24 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 print:bg-slate-300 print:bg-none" />
            <p className="mt-4 max-w-3xl text-[15.5px] leading-relaxed text-slate-700">
              {profile.summary}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-700 print:gap-2 print:text-base">
              <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm print:bg-transparent print:px-0 print:py-0 print:border-none print:shadow-none">
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm underline underline-offset-4 print:bg-transparent print:px-0 print:py-0 print:border-none print:shadow-none"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm underline underline-offset-4 print:bg-transparent print:px-0 print:py-0 print:border-none print:shadow-none"
              >
                {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm underline underline-offset-4 print:bg-transparent print:px-0 print:py-0 print:border-none print:shadow-none"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-5xl px-4 py-6 print:max-w-none print:px-0 print:py-4">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600 print:text-base print:tracking-normal">Core Skills</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 print:bg-slate-300 print:bg-none" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2 print:text-sm">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm border border-slate-200/60 shadow-sm hover:shadow transition print:bg-transparent print:border print:border-slate-200 print:shadow-none"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-5xl px-4 py-8 print:max-w-none print:px-0 print:py-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold tracking-tight print:text-lg">Experience</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 print:bg-slate-300 print:bg-none" />
        </div>
        <div className="mt-5 space-y-6">
          {experience.map((item, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg print:bg-transparent print:shadow-none print:border print:border-slate-200 print:rounded-xl print:break-inside-avoid"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 print:hidden" />
              <div className="p-4 grid grid-cols-4 gap-4 print:grid-cols-3 print:gap-3">
                <div className="col-span-3">
                  <h4 className="text-base font-semibold print:text-base">
                    {item.role} <span className="text-slate-500">· {item.org}</span>
                    {item.type && (
                      <span className="ml-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 print:bg-transparent">
                        {item.type}
                      </span>
                    )}
                  </h4>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700 print:text-sm print:space-y-1">
                    {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
                <div className="col-span-1 flex flex-col items-end justify-between print:items-start print:justify-start">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={`${item.org} logo`}
                      className="max-h-24 max-w-24 object-contain mb-2 print:max-h-16 print:max-w-16"
                    />
                  )}
                  <span className="text-sm text-slate-500">{item.period}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-5xl px-4 pb-16 print:max-w-none print:px-0 print:pb-8">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold tracking-tight print:text-lg">Education</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 print:bg-slate-300 print:bg-none" />
        </div>

        <div className="mt-5 space-y-6">
          {education.map((e, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg print:bg-transparent print:shadow-none print:break-inside-avoid"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 print:hidden" />
              <div className="p-4 grid grid-cols-4 gap-4 print:grid-cols-3">
                {/* Left column: degree + school */}
                <div className="col-span-3">
                  <p className="font-medium print:text-base">{e.degree}</p>
                  <p className="mt-1 text-sm text-slate-600">{e.school}</p>
                </div>

                {/* Right column: logo + year */}
                <div className="col-span-1 flex flex-col items-end justify-between print:items-start">
                  {e.logo && (
                    <div className="flex-shrink-0">
                      <img
                        src={e.logo}
                        alt={`${e.school} logo`}
                        className="max-h-24 max-w-24 object-contain mb-2 print:max-h-16 print:max-w-16"
                      />
                    </div>
                  )}
                  <span className="text-sm text-slate-500">{e.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-5xl px-4 pb-16 print:max-w-none print:px-0 print:pb-6 print:pt-2">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold tracking-tight print:text-lg">Certifications</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 print:bg-slate-300 print:bg-none" />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 print:grid-cols-3 print:gap-3">
          {['ppf.png', 'gcc.png', 'bea.png'].map((cert, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-2xl border border-slate-200/70 bg-white shadow-sm p-6 transition hover:-translate-y-0.5 hover:shadow-lg print:bg-transparent print:shadow-none"
            >
              <img
                src={`${cert}`}
                alt={`Certification ${i + 1}`}
                className="max-h-24 object-contain print:max-h-16"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 bg-gradient-to-b from-white to-slate-100 py-6 text-sm text-slate-500 print:border-t print:bg-transparent print:px-0 print:py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 print:max-w-none print:px-0">
          {/*<p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>*/}
          <div className="flex items-center gap-3">
            <a href={profile.linkedin} className="underline underline-offset-4">LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="underline underline-offset-4">Email</a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="underline underline-offset-4">Phone</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
