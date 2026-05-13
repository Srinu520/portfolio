import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'ASTRO INDU',
    description: 'A paid consultation platform for live expert sessions, wallet billing, and horoscope tools.',
    longDescription:
      'ASTRO INDU is a real-time astrology consultation web platform that connects users with astrologers via voice calls, chat, and horoscope tools. The system allows astrologers to manage availability, receive scheduled or instant session requests, and perform Vedic analysis using integrated APIs.',
    clientIndustry: 'Astrological Services',
    problem:
      'The business needed to turn expert availability, paid calls, wallet balances, and horoscope calculations into one reliable customer experience.',
    solution:
      'I built a real-time consultation platform with React dashboards, Django services, Twilio calling, Stripe payments, WebSockets, and automated session handling.',
    result:
      'Reduced operational friction around paid sessions, improved user retention loops, and gave the business a direct channel for monetized expert access.',
    role: 'Lead Engineer',
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
    description: 'An engineering workflow tool for rooftop solar design, calculations, and document generation.',
    longDescription:
      'This web application supports solar engineers in designing rooftop layouts using map-based interfaces and drawing tools. Users can place, rotate, and calculate panel arrangements in real time, and generate engineering documents like BoM, installation drawings, and racking guides.',
    clientIndustry: 'Solar Engineering',
    problem:
      'Solar engineers needed a faster way to design rooftop layouts, calculate panel placement, and produce project documents without switching between disconnected tools.',
    solution:
      'I built an interactive design platform using React, PixiJS, map APIs, Django services, and export-ready document workflows for engineering teams.',
    result:
      'Accelerated reporting, reduced repeated design work, and helped engineering teams move from layout planning to installation-ready outputs faster.',
    role: 'Lead Engineer',
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
    description: 'A comparison and purchase flow for quote-heavy insurance products.',
    longDescription:
      'A web-based aggregator allowing users to compare insurance products, receive real-time premium quotes, and purchase policies online. The system fetches offers from multiple insurance providers via APIs, filters options, and guides users through purchase and payment steps.',
    clientIndustry: 'Insurance',
    problem:
      'Customers needed to compare provider quotes quickly, while the business needed fewer drop-offs during the policy selection and purchase flow.',
    solution:
      'I built dynamic React interfaces, API-backed quote filtering, purchase steps, and performance improvements for a smoother buying path.',
    result:
      'Created a clearer comparison experience, reduced waiting time in quote-heavy screens, and improved the path from browsing to policy purchase.',
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
    description: 'A focused product demo for course discovery, lesson browsing, and learning progress.',
    longDescription:
      'EdPlatform is a demo e-learning experience showcasing a responsive course catalog, lesson detail views, and clear progress cues. It focuses on simple, accessible UI patterns, fast navigation, and a modular structure that can be extended into a full LMS.',
    clientIndustry: 'Education',
    problem:
      'Learning products often lose users when course discovery and lesson navigation feel cluttered or slow.',
    solution:
      'I built a lightweight education platform demo with responsive catalog screens, lesson pages, and accessible UI patterns.',
    result:
      'Delivered a clear product foundation that can be extended into a full LMS, marketplace, or internal training portal.',
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

