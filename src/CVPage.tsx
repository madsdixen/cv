import React, { useMemo, useState } from 'react'

export default function CVPage() {
  const [dark, setDark] = useState(true)

  const profile = useMemo(() => ({
    name: 'Mads Dixen',
    title: 'IT & Product Management | InfoSec Coordination',
    summary:
      "Strategic and forward-thinking IT & Product Management professional with a master's degree in IT, Communication & Organization. Experienced in leading digital transformation, managing complex system landscapes, and coordinating information security. Strong blend of product management, cybersecurity, and stakeholder engagement to streamline processes, enhance user experiences, and ensure compliance (ISO27001, NIS2, GDPR).",
    location: 'Aarhus, Denmark',
    email: 'mads.dixen@gmail.com',
    phone: '+45 31 31 38 68',
    linkedin: 'https://www.linkedin.com/in/madsdixen/',
    github: 'https://github.com/',
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
      bullets: [
        'Optimized onboarding and customer journey for a vertical SaaS product.',
      ],
    },
    {
      role: 'Cybersecurity Consultant',
      org: 'Integrated Metal Solutions',
      period: '2024',
      bullets: [
        'Developed security policies, conducted risk assessments, ensured compliance.',
      ],
    },
    {
      role: 'Teaching Assistant (Software Development)',
      org: 'MSc ITKO',
      period: '2022 – 2023',
      bullets: [
        'Assisted course delivery and practical exercises in software development.',
      ],
    },
  ]

  const education = [
    {
      degree: 'MSc – IT, Communication & Organization (ITKO)',
      school: 'Aarhus University',
      period: '2021 – 2023',
    },
    {
      degree: 'BA – Digital Design, IT, Aesthetics & Interaction & Information Studies',
      school: 'Aarhus University',
      period: '2017 – 2020',
    },
    {
      degree: 'AP – Service, Hospitality & Tourism Management (Sport & Event)',
      school: 'Business Academy',
      period: '2015 – 2017',
    },
  ]

  return (
    <div className={dark ? 'dark' : ''}>
      <div className='min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100'>
        <header className='sticky top-0 z-20 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70'>
          <div className='mx-auto flex max-w-4xl items-center justify-between px-4 py-3'>
            <div className='flex items-center gap-3'>
              <div className='h-8 w-8 rounded-xl bg-sky-600/90' />
              <h1 className='text-lg font-semibold tracking-tight'>{profile.name}</h1>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <a href={profile.pdf} className='rounded-xl border border-slate-200/70 px-3 py-1.5 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800'>
                Download PDF
              </a>
              <button onClick={() => window.print()} className='rounded-xl border border-slate-200/70 px-3 py-1.5 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800' aria-label='Print CV'>
                Print
              </button>
              <button onClick={() => setDark(d => !d)} className='rounded-xl bg-slate-900 px-3 py-1.5 text-white hover:opacity-90 dark:bg-slate-100 dark:text-slate-900' aria-label='Toggle theme'>
                {dark ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>
        </header>

        <section className='mx-auto max-w-4xl px-4 py-10 sm:py-12'>
          <div className='grid items-start gap-6 sm:grid-cols-[auto_1fr]'>
            <div className='h-20 w-20 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/20' />
            <div>
              <h2 className='text-2xl font-bold tracking-tight sm:text-3xl'>{profile.title}</h2>
              <p className='mt-3 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300'>
                {profile.summary}
              </p>
              <div className='mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300'>
                <span>{profile.location}</span>
                <span className='opacity-50'>•</span>
                <a href={`mailto:${profile.email}`} className='underline underline-offset-4'>{profile.email}</a>
                <span className='opacity-50'>•</span>
                <a href={profile.linkedin} className='underline underline-offset-4'>LinkedIn</a>
                <span className='opacity-50'>•</span>
                <a href={profile.github} className='underline underline-offset-4'>GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section className='mx-auto max-w-4xl px-4 py-4'>
          <h3 className='text-base font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>
            Core Skills
          </h3>
          <div className='mt-3 flex flex-wrap gap-2'>
            {skills.map(s => (
              <span key={s} className='rounded-full border border-slate-200/70 px-3 py-1 text-sm dark:border-slate-700'>
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className='mx-auto max-w-4xl px-4 py-8'>
          <h3 className='text-xl font-semibold'>Experience</h3>
          <div className='mt-4 space-y-6'>
            {experience.map((item, idx) => (
              <article key={idx} className='rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
                <div className='flex flex-wrap items-baseline justify-between gap-2'>
                  <h4 className='text-base font-semibold'>
                    {item.role} <span className='text-slate-500'>· {item.org}</span>
                  </h4>
                  <span className='text-sm text-slate-500'>{item.period}</span>
                </div>
                <ul className='mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300'>
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className='mx-auto max-w-4xl px-4 pb-16'>
          <h3 className='text-xl font-semibold'>Education</h3>
          <div className='mt-4 grid gap-4 sm:grid-cols-2'>
            {education.map((e, i) => (
              <div key={i} className='rounded-2xl border border-slate-200/70 bg-white p-4 dark:border-slate-800 dark:bg-slate-900'>
                <div className='flex items-center justify-between'>
                  <p className='font-medium'>{e.degree}</p>
                  <span className='text-sm text-slate-500'>{e.period}</span>
                </div>
                <p className='mt-1 text-sm text-slate-600 dark:text-slate-300'>{e.school}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className='border-t border-slate-200/70 bg-white/60 py-6 text-sm text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'>
          <div className='mx-auto flex max-w-4xl items-center justify-between px-4'>
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <div className='flex items-center gap-3'>
              <a href={profile.linkedin} className='underline underline-offset-4'>LinkedIn</a>
              <a href={profile.github} className='underline underline-offset-4'>GitHub</a>
              <a href={`mailto:${profile.email}`} className='underline underline-offset-4'>Email</a>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @media print {
          header, footer, .print-hidden { display: none !important; }
          a { text-decoration: none; color: inherit; }
          .rounded-2xl { box-shadow: none !important; }
          .bg-white, .dark\\:bg-slate-900 { background: transparent !important; }
          .border, .dark\\:border-slate-800 { border: none !important; }
        }
      `}</style>
    </div>
  )
}
