import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

const siteUrl = 'https://www.srinud.com';
const siteName = 'Srinu Duggempudi';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'Srinu Duggempudi | Full Stack Developer',
    template: '%s | ' + siteName,
  },
  description:
    'Portfolio and contact hub for Srinu Duggempudi, a full stack engineer crafting resilient experiences with React, Next.js, and Django.',
  keywords: [
    'Srinu',
    'Srinu D',
    'Srinu Duggempudi',
    'srinud',
    'srinud.com',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Django',
    'Python',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: siteName,
    title: 'Srinu Duggempudi | Full Stack Developer',
    description:
      'Portfolio and contact hub for Srinu Duggempudi, a full stack engineer crafting resilient experiences with React, Next.js, and Django.',
    locale: 'en_US',
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srinu Duggempudi | Full Stack Developer',
    description:
      'Portfolio and contact hub for Srinu Duggempudi, a full stack engineer crafting resilient experiences with React, Next.js, and Django.',
    images: ['/opengraph-image.png'],
  },
  verification: {
    google: 'OTHaZLvKYblKJxTkiHaa8eVIQ44SuiAsmC2_lojnEKs',
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#0b1220' }, { media: '(prefers-color-scheme: light)', color: '#ffffff' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteName,
    url: siteUrl,
    jobTitle: 'Full Stack Developer',
    knowsAbout: ['React', 'Next.js', 'Django', 'Python', 'TypeScript', 'Full Stack Engineering'],
    email: 'mailto:srinuduggempudi26@gmail.com',
    telephone: '+91-9391339072',
    sameAs: [siteUrl],
  } as const;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
