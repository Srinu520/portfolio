import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

const siteUrl = 'https://www.srinud.com';
const siteName = 'Srinu D';
const siteTitle = 'Srinu D | Custom B2B Software & MVP Development';
const siteDescription =
  'Senior full-stack software developer building custom web apps, business websites, MVPs, workflow automation, and internal tools for founders and growing teams.';
const ogImage = '/opengraph-image';
const twitterImage = '/twitter-image';
const email = 'srinuduggempudi26@gmail.com';
const phone = '+91-9391339072';
const searchKeywords = [
  'Srinu',
  'Srinu D',
  'Srinu Duggempudi',
  'srinud',
  'srinud.com',
  'Software Developer',
  'Full Stack Developer',
  'Full Stack Software Developer',
  'Full Stack Web Developer',
  'Freelance Software Developer',
  'Freelance Full Stack Developer',
  'Hire Software Developer',
  'Hire Full Stack Developer',
  'Web Developer',
  'Website Developer',
  'Web App Developer',
  'App Developer',
  'Mobile App Developer',
  'React Developer',
  'Next.js Developer',
  'Django Developer',
  'Python Developer',
  'TypeScript Developer',
  'Custom Software Developer',
  'Custom B2B Software',
  'Custom Software Development',
  'Software Development Services',
  'Web Application Development',
  'Website Development Services',
  'Business Website Development',
  'Mobile App Development',
  'MVP Development',
  'MVP Developer',
  'MVP App Developer',
  'Startup MVP Development',
  'SaaS Developer',
  'B2B SaaS Developer',
  'B2B Software Consultant',
  'Solo Software Agency',
  'Workflow Automation',
  'Workflow Automation Developer',
  'Business Process Automation',
  'Internal Tools',
  'Internal Tool Development',
  'Dashboard Development',
  'Admin Panel Development',
  'API Integration Developer',
  'Payment Integration Developer',
  'Hyderabad Software Developer',
  'Hyderabad Full Stack Developer',
  'India Software Developer',
  'Remote Software Developer',
] as const;
const expertiseTopics = [
  'Software Development',
  'Full Stack Development',
  'Web Development',
  'Website Development',
  'Web Application Development',
  'Mobile App Development',
  'React',
  'Next.js',
  'Django',
  'Python',
  'TypeScript',
  'MVP Development',
  'SaaS Development',
  'Workflow Automation',
  'Internal Tools',
  'Dashboard Development',
  'Admin Panels',
  'Payments',
  'API Integrations',
] as const;
const services = [
  {
    name: 'Rapid MVP Development',
    description:
      'Secure auth, core product logic, billing, and clean web interfaces shipped in focused 4-8 week builds.',
  },
  {
    name: 'Workflow Automation & Internal Tools',
    description:
      'Custom dashboards and automations that connect APIs, sync databases, and remove repetitive manual work.',
  },
  {
    name: 'Legacy App Modernization & Support',
    description:
      'Monthly support, stack migrations, security updates, and practical feature rollouts for existing software.',
  },
  {
    name: 'Website & Web App Development',
    description:
      'Business websites, customer portals, admin panels, and custom web applications built with clean UX and production-ready code.',
  },
] as const;

const serializeJsonLd = (jsonLd: unknown) => JSON.stringify(jsonLd).replace(/</g, '\\u003c');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  title: {
    default: siteTitle,
    template: '%s | ' + siteName,
  },
  description: siteDescription,
  keywords: [...searchKeywords],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Srinu D - Custom B2B Software and MVP Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: twitterImage,
        width: 1200,
        height: 630,
        alt: 'Srinu D - Custom B2B Software and MVP Development',
      },
    ],
  },
  verification: {
    google: 'OTHaZLvKYblKJxTkiHaa8eVIQ44SuiAsmC2_lojnEKs',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: 'en-US',
        publisher: {
          '@id': `${siteUrl}/#business`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#business`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Srinu Duggempudi',
        alternateName: siteName,
        url: siteUrl,
        email: `mailto:${email}`,
        telephone: phone,
        jobTitle: 'Full Stack Software Developer and Custom B2B Software Consultant',
        image: `${siteUrl}${ogImage}`,
        worksFor: {
          '@id': `${siteUrl}/#business`,
        },
        knowsAbout: [...expertiseTopics],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#business`,
        name: siteName,
        url: siteUrl,
        image: `${siteUrl}${ogImage}`,
        description: siteDescription,
        email,
        telephone: phone,
        founder: {
          '@id': `${siteUrl}/#person`,
        },
        areaServed: [
          {
            '@type': 'Country',
            name: 'India',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'United States',
          },
          {
            '@type': 'Place',
            name: 'Worldwide',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          addressCountry: 'IN',
        },
        serviceType: services.map((service) => service.name),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Custom Software Services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
              provider: {
                '@id': `${siteUrl}/#business`,
              },
            },
          })),
        },
      },
    ],
  } as const;

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
