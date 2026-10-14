export type Language = 'da' | 'en'

export type ExperienceItem = {
  role: string
  org: string
  period: string
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

export const contact = {
  name: 'Mads Dixen',
  email: 'mads.dixen@gmail.com',
  phone: '+45 31 31 38 68',
  linkedin: 'https://www.linkedin.com/in/madsdixen/',
}

export const content = {
  da: {
    languageName: 'Dansk',
    eyebrow: 'Product Manager / Product Owner',
    title: 'Produktudvikling · Brugerindsigt · Informationssikkerhed',
    location: 'Aarhus, Danmark',
    intro:
      'Product Manager med erfaring i digitale studieadministrative systemer, UX og informationssikkerhed. På Aarhus Universitet omsætter jeg sammen med teamet brugerbehov til prioriteringer, krav og koordinerede systemændringer. Jeg kombinerer en kandidat i ITKO med praktisk teknologiforståelse og skaber sammenhæng mellem brugere, IT og leverandører - fra behovsafklaring til test og stabil drift.',
    sections: {
      skills: 'Kompetencer',
      experience: 'Erfaring',
      education: 'Uddannelse',
      certifications: 'Certificeringer',
      tools: 'Teknologiforståelse',
    },
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
        label: 'Teknik, data og governance',
        items: ['Integrationer', 'Datakvalitet', 'Informationssikkerhed', 'ISO 27001', 'NIS2', 'GDPR'],
      },
    ],
    experience: [
      {
        role: 'Product Manager',
        org: 'Studiesystemer, Aarhus Universitet',
        period: '2024 - nu',
        type: 'Fuldtid',
        summary:
          'Del af teamet bag studieadministrative systemer til blandt andet digital eksamen og digital evaluering.',
        bullets: [
          'Bidrager til prioritering af roadmap og backlog samt planlægning af opgraderinger, test og kvalitetssikring.',
          'Omsætter behov fra fakulteter, drift og support til klare krav og beslutningsgrundlag i samarbejde med leverandører.',
          'Koordinerer ændringer på tværs af IT, uddannelsesadministration og systemleverandører med fokus på stabil drift.',
          'Afklarer integrationer, databehov og konsekvenser af ændringer i et komplekst systemlandskab.',
        ],
        relatedRole: {
          title: 'Lokal informationssikkerhedskoordinator',
          org: 'AU Uddannelse',
          period: '2024 - nu',
          bullets: [
            'Koordinerer lokale ISMS-aktiviteter, awareness, aktivoverblik, risikovurderinger og rapportering.',
            'Bidrager til arbejdet med ISO 27001, NIS2 og GDPR i samarbejde med central IT.',
          ],
        },
      },
      {
        role: 'Cybersecurity Consultant',
        org: 'IQ Metal - Integrated Metal Solutions',
        period: '2024',
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
        type: 'Praktik',
        summary:
          'Produktnært UX-arbejde på onboarding og kunderejse for et vertikalt SaaS-produkt.',
        bullets: [
          'Undersøgte brugerbehov og kortlagde forbedringsmuligheder i onboarding gennem research, wireframes og prototyper.',
          'Samarbejdede med udviklere om at omsætte brugerindsigter til implementerbare produktforbedringer.',
          'Udarbejdede forslag til tydeligere brugerflows med fokus på sammenhæng mellem produktværdi og interface.',
        ],
      },
      {
        role: 'Teaching Assistant, Software Development',
        org: 'MSc ITKO, Aarhus BSS',
        period: '2022 - 2023',
        type: 'Deltid',
        summary:
          'Undervisnings- og feedbackrolle i softwareudvikling for ITKO-studerende.',
        bullets: [
          'Faciliterede øvelser, gav feedback på opgaver og hjalp studerende med at forstå softwareudvikling i praksis.',
          'Styrkede evnen til at forklare tekniske problemstillinger klart til ikke-specialister.',
        ],
      },
      {
        role: 'ISO 27001 Consultant',
        org: 'ApplicateIT',
        period: '2021',
        type: 'Praktik',
        summary:
          'Arbejde med ISO 27001 og opbygning af informationssikkerhedsledelse i praksis.',
        bullets: [
          'Arbejdede med ISO 27001-standarden og bidrog til etablering og drift af et information security management system.',
        ],
      },
    ] satisfies ExperienceItem[],
    education: [
      {
        degree: 'Cand.it. - IT, kommunikation og organisation (ITKO)',
        school: 'Aarhus BSS, Aarhus Universitet',
        period: '2021 - 2023',
      },
      {
        degree: 'Bachelor - Digital design, IT, æstetik og interaktion samt informationsvidenskab',
        school: 'Aarhus Universitet',
        period: '2017 - 2020',
      },
      {
        degree: 'Serviceøkonom - Sport & Event Management',
        school: 'Erhvervsakademi Dania',
        period: '2015 - 2017',
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
      'Kendskab til Azure, Power Platform, API management, SQL, JavaScript, Python og C# samt automatisering og AI-værktøjer. Anvender min tekniske baggrund til at afklare data, integrationer og risici med udviklere, drift og leverandører.',
  },
  en: {
    languageName: 'English',
    eyebrow: 'Product Manager / Product Owner',
    title: 'Product development · User insight · Information security',
    location: 'Aarhus, Denmark',
    intro:
      'Product Manager with experience in digital student administration systems, UX and information security. At Aarhus University, I work with the team to translate user needs into priorities, requirements and coordinated system changes. With an MSc in ITKO and practical technical understanding, I connect users, IT and vendors from requirements discovery through testing and reliable operations.',
    sections: {
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      tools: 'Technical understanding',
    },
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
        label: 'Technology, data & governance',
        items: ['Integrations', 'Data quality', 'Information security', 'ISO 27001', 'NIS2', 'GDPR'],
      },
    ],
    experience: [
      {
        role: 'Product Manager',
        org: 'Studiesystemer, Aarhus University',
        period: '2024 - Present',
        type: 'Full-time',
        summary:
          'Part of the team supporting student administration systems, including digital examinations and evaluations.',
        bullets: [
          'Contribute to roadmap and backlog prioritization and the planning of upgrades, testing and quality assurance.',
          'Translate needs from faculties, operations and support into clear requirements and decision support in collaboration with vendors.',
          'Coordinate changes across IT, educational administration and system vendors with focus on stable operations.',
          'Clarify integrations, data requirements and the impact of changes across a complex system landscape.',
        ],
        relatedRole: {
          title: 'Local Information Security Coordinator',
          org: 'AU Uddannelse',
          period: '2024 - Present',
          bullets: [
            'Coordinate local ISMS activities, awareness, asset overview, risk assessments and reporting.',
            'Contribute to work on ISO 27001, NIS2 and GDPR in collaboration with central IT.',
          ],
        },
      },
      {
        role: 'Cybersecurity Consultant',
        org: 'IQ Metal - Integrated Metal Solutions',
        period: '2024',
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
        type: 'Internship',
        summary:
          'Product-oriented UX work on onboarding and customer journey for a vertical SaaS product.',
        bullets: [
          'Mapped user needs and improvement opportunities in the onboarding flow through research, wireframes and prototypes.',
          'Collaborated with developers to turn user insight into implementable product improvements.',
          'Proposed clearer user flows with a focus on alignment between product value and interface.',
        ],
      },
      {
        role: 'Teaching Assistant, Software Development',
        org: 'MSc ITKO, Aarhus BSS',
        period: '2022 - 2023',
        type: 'Part-time',
        summary:
          'Teaching and feedback role in software development for ITKO students.',
        bullets: [
          'Facilitated exercises, gave assignment feedback and helped students understand software development in practice.',
          'Strengthened the ability to explain technical topics clearly to non-specialists.',
        ],
      },
      {
        role: 'ISO 27001 Consultant',
        org: 'ApplicateIT',
        period: '2021',
        type: 'Internship',
        summary:
          'Work with ISO 27001 and practical information security management.',
        bullets: [
          'Worked with the ISO 27001 standard and contributed to building and operating an information security management system.',
        ],
      },
    ] satisfies ExperienceItem[],
    education: [
      {
        degree: 'MSc - IT, Communication & Organization (ITKO)',
        school: 'Aarhus BSS, Aarhus University',
        period: '2021 - 2023',
      },
      {
        degree: 'BA - Digital Design, IT, Aesthetics & Interaction and Information Studies',
        school: 'Aarhus University',
        period: '2017 - 2020',
      },
      {
        degree: 'AP - Service, Hospitality & Tourism Management (Sport & Event)',
        school: 'Dania - Business Academy',
        period: '2015 - 2017',
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
      'Familiar with Azure, Power Platform, API management, SQL, JavaScript, Python and C#, as well as automation and AI tools. Apply this background to clarify data requirements, integrations and risks with developers, operations and vendors.',
  },
} as const
