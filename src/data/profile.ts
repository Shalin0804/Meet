export const profile = {
  name: 'Meet Vaishnani',
  role: 'Business Development Executive',
  company: 'Codefloor IT Tech LLP',
  phone: '+91 95106 70411',
  email: 'vaishnanimeet2971@gmail.com',
}

export const heroBadges = [
  'Lead Generation',
  'Client Relationships',
  'Business Development',
  'Sales Strategy',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const aboutHighlights = [
  {
    title: 'Business Development',
    text: 'Identifying new business opportunities through market research and strategic networking.',
  },
  {
    title: 'Client Relationships',
    text: 'Building and maintaining strong relationships with prospective and existing clients.',
  },
  {
    title: 'Sales Strategy',
    text: 'Applying B2B and B2C sales approaches to close deals and drive growth.',
  },
  {
    title: 'Web Design Foundation',
    text: 'A background in HTML, CSS and front-end tools that grounds every client conversation in technical understanding.',
  },
]

export type ExperienceItem = {
  role: string
  org: string
  period: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
  role: 'Business Development Executive',
  org: 'Codefloor IT Tech LLP',
  period: '2025 — Current',
  points: [
    'Generating and qualifying leads for web, mobile, and custom IT development projects',
    'Understanding client requirements and recommending suitable technical solutions',
    'Preparing customized proposals, quotations, and business presentations',
    'Managing client communication, negotiations, follow-ups, and deal progression',
    'Coordinating with technical teams to align client expectations with project requirements',
  ],
},
  {
    role: 'Business Development Executive',
    org: 'Nateco IT Solutions Pvt. Ltd.',
    period: '2024 — 2025',
    points: [
      'Identifying new business opportunities and managing client relationships',
      'Understanding client requirements and presenting tailored IT solutions',
      'Preparing proposals, generating leads, and negotiating deals',
      'Supporting successful project execution alongside cross-functional teams',
      'Maintaining strong post-sale relationships and long-term partnerships',
    ],
  },
  {
    role: 'Website Design',
    org: 'Tops Technologies',
    period: '2022 — 2023',
    points: [
      'Completed a 5-month professional web design training program',
      'Worked on multiple design projects using HTML, CSS, and front-end tools',
    ],
  },
  {
    role: 'Industrial Training Institute (ITI)',
    org: 'Education',
    period: '2019 — 2021',
    points: ['1st Year academic performance: 83%', '2nd Year academic performance: 78%'],
  },
]

export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Business Development',
    description: 'Finding and building the opportunities that grow a business.',
    skills: ['Lead Generation', 'Client Acquisition', 'Business Development', 'Market Research'],
  },
  {
    title: 'Sales',
    description: 'Turning interest into signed, successful deals.',
    skills: ['B2B Sales Strategy', 'B2C Sales Strategy', 'Negotiation', 'Deal Closure'],
  },
  {
    title: 'Client Management',
    description: 'Keeping relationships strong long after the deal closes.',
    skills: [
      'Client Relationship Management',
      'Client Communication',
      'Follow-ups',
      'Customer Satisfaction',
    ],
  },
  {
    title: 'Web Design',
    description: 'A technical foundation that makes client conversations sharper.',
    skills: ['HTML', 'CSS', 'Front-end Tools'],
  },
]

export const achievements = [
  {
    title: 'High-Quality Lead Conversion',
    text: 'Successfully generated and converted high-quality leads into active clients.',
  },
  {
    title: 'Market Growth Contribution',
    text: 'Contributed to business growth by identifying new market opportunities.',
  },
  {
    title: 'Repeat Business',
    text: 'Maintained strong client relationships resulting in repeat business.',
  },
  {
    title: 'Consistent Target Achievement',
    text: 'Consistently achieved assigned sales and business development targets.',
  },
  {
    title: 'Stronger Client Engagement',
    text: 'Improved client engagement through effective communication and follow-ups.',
  },
]

export type EducationItem = {
  title: string
  org: string
  period: string
  detail?: string
}

export const education: EducationItem[] = [
  {
    title: 'Industrial Training Institute (ITI)',
    org: 'ITI',
    period: '2019 — 2021',
    detail: '1st Year — 83% · 2nd Year — 78%',
  },
  {
    title: 'Website Design',
    org: 'Tops Technologies',
    period: '2022 — 2023',
  },
  {
    title: 'Website Designer Course',
    org: 'Tops Technologies',
    period: '2022 — 2023',
    detail: '5-month professional web design training program',
  },
]

export const process = [
  {
    number: '01',
    title: 'Understand',
    text: "Understand the client's business and requirements.",
  },
  {
    number: '02',
    title: 'Connect',
    text: 'Build meaningful communication and relationships.',
  },
  {
    number: '03',
    title: 'Strategize',
    text: 'Identify opportunities and develop an appropriate approach.',
  },
  {
    number: '04',
    title: 'Deliver',
    text: 'Support successful execution and long-term relationships.',
  },
]
