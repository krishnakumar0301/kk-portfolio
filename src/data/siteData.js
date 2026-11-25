export const profile = {
  initials: 'KK',
  name: 'KRISHNA KUMAR',
  displayName: 'Krishna Kumar',
  intro: "HELLO, I'M",
  role: 'Aspiring Data Analyst',
  description:
    'I am an MCA student passionate about Data Analytics, Python, SQL and Data Visualization. I enjoy transforming raw data into meaningful insights and solving real-world problems through technology.',
  about:
    'I am Krishna Kumar, a BCA graduate and currently pursuing my Master of Computer Applications (MCA). I am passionate about technology, software development, Cloud Computing, and Artificial Intelligence. I enjoy learning new technologies, building practical projects, and developing solutions to real-world problems.',
  email: 'akumarkrishna2004@gmail.com',
  github: 'https://github.com/krishnakumar0301',
  linkedin: 'https://www.linkedin.com/in/krishna-kumar-820266373/',
  resume: '/Krishna_Kumar_Resume.pdf',
  image: '/assets/krishna-profile.png',
  location: 'India',
  availability: 'Open to Opportunities',
}

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    icon: 'code',
    accent: 'blue',
    skills: [
      { name: 'Python', level: 'Core' },
      { name: 'SQL', level: 'Core' },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    icon: 'chart',
    accent: 'violet',
    skills: [
      { name: 'Excel', level: 'Regular' },
      { name: 'Power BI', level: 'Regular' },
      { name: 'Pandas', level: 'Regular' },
      { name: 'NumPy', level: 'Regular' },
    ],
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    icon: 'pie',
    accent: 'cyan',
    skills: [
      { name: 'Matplotlib', level: 'Regular' },
      { name: 'Seaborn', level: 'Familiar' },
      { name: 'Power BI', level: 'Regular' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    accent: 'blue',
    skills: [{ name: 'MySQL', level: 'Regular' }],
  },
  {
    id: 'web-technologies',
    title: 'Web Technologies',
    icon: 'globe',
    accent: 'violet',
    skills: [
      { name: 'HTML', level: 'Familiar' },
      { name: 'CSS', level: 'Familiar' },
      { name: 'JavaScript', level: 'Familiar' },
    ],
  },
  {
    id: 'additional',
    title: 'Additional',
    icon: 'sparkles',
    accent: 'cyan',
    skills: [{ name: 'Machine Learning', level: 'Exploring' }],
  },
]

export const projects = [
  {
    id: 'olist-sales-dashboard',
    number: '01',
    title: 'E-commerce Sales Analysis Dashboard',
    status: 'In Progress',
    description:
      'An end-to-end E-commerce Sales Analysis project using the Brazilian Olist dataset to analyze sales performance, customer behavior, order trends and delivery performance.',
    tech: ['Python', 'SQL', 'MySQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'DAX'],
    chart: 'bars',
    accent: 'blue',
    featured: true,
    outcomes: [
      'Brought together order, customer and product data into an analysis-ready workflow.',
      'Analyzed sales performance, customer behavior, order trends and delivery performance.',
      'Built an analytics view with Power BI and DAX for clear decision support.',
    ],
  },
  {
    id: 'medicine-shortage-tracker',
    number: '02',
    title: 'Medicine Shortage Tracking and Alert System',
    status: 'Completed',
    description:
      'A medicine inventory management system designed to monitor medicine stock, demand, expiry dates and shortages.',
    tech: ['Python', 'Database', 'HTML', 'CSS', 'JavaScript'],
    chart: 'inventory',
    accent: 'violet',
    featured: false,
    outcomes: [
      'Tracked medicine stock, demand and expiry dates in one inventory workflow.',
      'Highlighted low-stock situations to support timely shortage alerts.',
      'Built a simple interface for reviewing and maintaining medicine records.',
    ],
  },
  {
    id: 'document-management-system',
    number: '03',
    title: 'Intelligent Document Management System',
    status: 'Completed',
    description:
      'An intelligent document management application designed to organize, store, manage and retrieve digital documents efficiently.',
    tech: [],
    chart: 'documents',
    accent: 'cyan',
    featured: false,
    outcomes: [
      'Organized and stored digital documents in a structured workspace.',
      'Supported clear document management across stored records.',
      'Made stored documents easier to retrieve when needed.',
    ],
  },
]

export const education = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    period: '2024 – Present',
    status: 'Pursuing',
    detail:
      'Currently developing knowledge in software development, cloud computing, AI, databases, and advanced computer applications.',
    icon: 'graduation',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2021 – 2024',
    status: 'Completed',
    detail:
      'Built a strong foundation in computer applications, programming, database management, and web technologies.',
    icon: 'book',
  },
]

export const learningFocus = [
  'Cloud Computing',
  'Artificial Intelligence',
  'Data Analytics',
  'Software Development',
  'Database Systems',
]
