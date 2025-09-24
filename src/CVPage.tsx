import React, { useMemo } from 'react'

export default function CVPage() {
  const profile = useMemo(() => ({
    name: 'Mads Dixen',
    title: 'IT & Product Management | InfoSec Coordination',
    summary:
      "Strategic and forward-thinking IT & Product Management professional with a master's degree in IT, Communication & Organization. Experienced in leading digital transformation, managing complex system landscapes, and coordinating information security. Strong blend of product management, cybersecurity, and stakeholder engagement to streamline processes, enhance user experiences, and ensure compliance (ISO27001, NIS2, GDPR).",
    location: 'Aarhus, Denmark',
    email: 'mads.dixen@gmail.com',
    phone: '+45 31 31 38 68',
    linkedin: 'https://www.linkedin.com/in/madsdixen/',
    pdf: '/MadsDixen_CV.pdf'
  }), [])

  const skills = [
    'Product Management',
    'Roadmaps & Backlogs',
    'Stakeholder Management',
    'Process Optimization',
    'Information Security (ISO27001, NIS2, GDPR)',
    'Azure · Power Platform',
    'APIs · Integrations',
    'SQL · JavaScript · Python',
    'UX/UI',
    'Testing · QA',
  ]

  const experience = [
    {
      role: 'Product Manager',
      org: 'Studiesystemer (AU)',
      period: '2024 – Present',
      logo: 'logos/au.png',
      bullets: [
        'Product ownership for digital exam & evaluation systems (WISEflow, Explorance Blue).',
        'Own roadmaps & backlogs; drive upgrades, testing, data tasks, and quality gates.',
        'Cross-functional coordination with operations, IT, faculties, and vendors.',
        'Bridge business & IT with focus on efficiency and user experience.',
      ],
    },
    {
      role: 'Local Information Security Coordinator (LISK)',
      org: 'AU Uddannelse',
      period: '2024 – Present',
      logo: 'logos/au.png',
      bullets: [
        'Coordinate local ISMS activities and awareness initiatives.',
        'Support risk assessments, asset documentation, and management reporting.',
        'Align with ISO27001/NIS2/GDPR obligations; incident liaison with central IT.',
      ],
    },
    {
      role: 'UX Designer',
      org: 'SaaS (Water Sports Platform)',
      period: '2024',
      logo: 'logos/wakeque.png',
      bullets: [
        'Optimized onboarding and customer journey for a vertical SaaS product.',
      ],
    },
    {
      role: 'Cybersecurity Consultant',
      org: 'Integrated Metal Solutions',
      period: '2024',
      logo: 'logos/iqmetal.png',
      bullets: [
        'Developed security policies, conducted risk assessments, ensured compliance.',
      ],
    },
    {
      role: 'Teaching Assistant (Software Development)',
      org: 'MSc ITKO',
      period: '2022 – 2023',
      logo: 'logos/bss.png',
      bullets: [
        'Assisted course delivery and practical exercises in software development.',
      ],
    },
    {
      role: 'ISO27001 Consultant',
      org: 'ApplicateIT',
      period: '2021',
      logo: 'logos/applicate.png',
      bullets: [
        'Studying the ISO27001 standard while creating and managing an information security management system.',
      ],
    },
  ]

  const education = [
    {
      degree: 'MSc – IT, Communication & Organization (ITKO)',
      school: 'Aarhus University',
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
      school: 'Business Academy',
      period: '2015 – 2017',
      logo: 'logos/dania.png',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-sm" />
              <div>
                <h1 className="text-lg font-semibold leading-tight tracking-tight">{profile.name}</h1>
                <p className="text-xs text-slate-500">{profile.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
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
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-14">
        <div className="grid items-start gap-8 sm:grid-cols-[auto_1fr]">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-sky-200/60 via-indigo-200/50 to-fuchsia-200/40 blur-2xl" />
            <img
              src="portrait.jpg"
              alt="Portrait of Mads Dixen"
              className="h-40 w-40 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-3xl object-cover shadow-xl ring-4 ring-white"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{profile.name}</h2>
            <p className="mt-1 text-base font-medium text-slate-600">{profile.title}</p>
            <div className="mt-3 h-1 w-24 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500" />
            <p className="mt-4 max-w-3xl text-[15.5px] leading-relaxed text-slate-700">
              {profile.summary}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-700">
              <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm">{profile.location}</span>
              <a href={`mailto:${profile.email}`} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm underline underline-offset-4">{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm underline underline-offset-4">{profile.phone}</a>
              <a href={profile.linkedin} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm underline underline-offset-4">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Core Skills</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm border border-slate-200/60 shadow-sm hover:shadow transition"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold tracking-tight">Experience</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400" />
        </div>
        <div className="mt-5 space-y-6">
          {experience.map((item, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500" />
              <div className="p-4 grid grid-cols-4 gap-4">
                <div className="col-span-3">
                  <h4 className="text-base font-semibold">
                    {item.role} <span className="text-slate-500">· {item.org}</span>
                  </h4>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700">
                    {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
                <div className="col-span-1 flex flex-col items-end justify-between">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={`${item.org} logo`}
                      className="max-h-24 max-w-24 object-contain mb-2"
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
<section className="mx-auto max-w-5xl px-4 pb-16">
  <div className="flex items-center gap-3">
    <h3 className="text-xl font-semibold tracking-tight">Education</h3>
    <div className="h-px flex-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400" />
  </div>

  <div className="mt-5 space-y-6">
    {education.map((e, i) => (
      <div
        key={i}
        className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-slate-800 dark:border-slate-700"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500" />
        <div className="p-4 grid grid-cols-4 gap-4">
          {/* Left column: degree + school */}
          <div className="col-span-3">
            <p className="font-medium">{e.degree}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{e.school}</p>
          </div>

          {/* Right column: logo + year */}
          <div className="col-span-1 flex flex-col items-end justify-between">
            {e.logo && (
              <div className="flex-shrink-0">
                <img
                  src={e.logo}
                  alt={`${e.school} logo`}
                  className="max-h-24 max-w-24 object-contain mb-2"
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

      {/* Footer */}
      <footer className="border-t border-slate-200/70 bg-gradient-to-b from-white to-slate-100 py-6 text-sm text-slate-500">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
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
