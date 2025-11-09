import type { Project, Skill, Experience } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'ASTRO INDU',
    description: 'Real-time astrology consultation platform with voice calls and horoscope tools',
    longDescription:
      'ASTRO INDU is a real-time astrology consultation web platform that connects users with astrologers via voice calls, chat, and horoscope tools. The system allows astrologers to manage availability, receive scheduled or instant session requests, and perform Vedic analysis using integrated APIs.',
    role: 'Full Stack Developer',
    technologies: [
      'React.js',
      'Redux Rematch',
      'Material UI',
      'Django',
      'Twilio Voice API',
      'Stripe',
      'WebSockets',
      'Celery',
      'Redis',
    ],
    highlights: [
      'Built responsive user and astrologer dashboards with React.js and Redux Rematch',
      'Integrated Twilio Voice API for browser-based VOIP calling with fallback to phone calls',
      'Enabled real-time media sharing via Django Channels and WebSockets',
      'Configured Stripe payment gateway and wallet top-ups with secure transaction logging',
      'Used Celery and Redis for session timeouts, reminders, and scheduled billing',
      'Built horoscope modules using VedicAstroAPI for Kundli generation',
    ],
    image: 'astro-indu',
    live: 'https://astroindu.com/',
  },
  {
    id: 2,
    title: 'Solar Engineering Platform',
    description: 'Interactive web app for rooftop solar panel design with real-time calculations',
    longDescription:
      'This web application supports solar engineers in designing rooftop layouts using map-based interfaces and drawing tools. Users can place, rotate, and calculate panel arrangements in real time, and generate engineering documents like BoM, installation drawings, and racking guides.',
    role: 'Full Stack Developer',
    technologies: ['React.js', 'PixiJS', 'Google Maps API', 'Bing Maps API', 'Django', 'Jest', 'React Testing Library'],
    highlights: [
      'Built interactive drawing tools with React and PixiJS for real-time panel placement',
      'Integrated Google and Bing Maps for satellite imagery-based layout design',
      'Developed PDF and BoM generation features for export-ready engineering outputs',
      'Handled dynamic layout changes with custom React hooks and memoization',
      'Implemented comprehensive component testing with Jest and React Testing Library',
      'Contributed to feature planning and participated in Agile ceremonies',
    ],
    image: 'solar-engineering',
    live: 'https://design.unirac.com/',
  },
  {
    id: 3,
    title: 'Insurance Aggregator Platform',
    description: 'Multi-provider insurance comparison with real-time quotes and policy purchase',
    longDescription:
      'A web-based aggregator allowing users to compare insurance products, receive real-time premium quotes, and purchase policies online. The system fetches offers from multiple insurance providers via APIs, filters options, and guides users through purchase and payment steps.',
    role: 'React Developer',
    technologies: ['React.js', 'Redux', 'SCSS', 'Node.js', 'REST APIs', 'Payment Integration'],
    highlights: [
      'Developed dynamic and filterable UI interfaces using React and Redux',
      'Integrated APIs to fetch quote data from multiple external insurers',
      'Optimized load times through lazy loading, code splitting, and on-demand rendering',
      'Contributed to backend enhancement using Node.js for query optimization',
      'Ensured accessibility and responsive design on mobile and desktop',
    ],
    image: 'insurance-aggregator',
  },
  {
    id: 4,
    title: 'EdPlatform (Demo)',
    description: 'Modern education platform demo with course catalog, lessons, and clean UX',
    longDescription:
      'EdPlatform is a demo e-learning experience showcasing a responsive course catalog, lesson detail views, and clear progress cues. It focuses on simple, accessible UI patterns, fast navigation, and a modular structure that can be extended into a full LMS.',
    role: 'Frontend Developer',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Responsive course catalog and lesson pages with consistent navigation',
      'Accessible interactions and focus states for keyboard users',
      'Lightweight build optimized for GitHub Pages static hosting',
      'Clean component structure ready to evolve into a full LMS',
    ],
    image: 'edplatform',
    live: 'https://srinu520.github.io/edplatform/',
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React.js', 'JavaScript', 'TypeScript', 'Redux', 'React Hooks', 'Material UI', 'HTML5', 'CSS3', 'Bootstrap', 'SCSS'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Django', 'Django REST Framework', 'Node.js', 'Express.js'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Postman', 'Jira', 'VS Code', 'Bitbucket', 'Celery', 'Docker'],
  },
  {
    category: 'Testing & Quality',
    items: ['Jest', 'React Testing Library', 'Postman'],
  },
  {
    category: 'APIs & Services',
    items: ['RESTful APIs', 'JWT Auth', 'Firebase', 'Stripe', 'Twilio', 'WebSockets'],
  },
];

export const experience: Experience[] = [
  {
    company: 'Unirac Limited',
    position: 'Full Stack Developer',
    period: 'Mar 2022 – Present',
    description: 'Developed and maintained scalable web applications for solar engineering solutions.',
  },
  // {
  //   company: 'Aesthetic IT Soft, Hyderabad',
  //   position: 'React & Backend Developer',
  //   period: 'Feb 2020 – Mar 2022',
  //   description: 'Built responsive UI components and backend APIs for various client projects.',
  // },
];
