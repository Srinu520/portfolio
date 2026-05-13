import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

const siteUrl = 'https://www.srinud.com';
const siteName = 'Srinu D';
const siteTitle = 'Srinu D | Custom B2B Software & MVP Development';
const siteDescription =
  'Custom B2B software, MVP development, workflow automation, and ongoing product support for founders and growing teams.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: '%s | ' + siteName,
  },
  description: siteDescription,
  keywords: [
    'Srinu',
    'Srinu D',
    'Srinu Duggempudi',
    'srinud',
    'srinud.com',
    'Custom B2B Software',
    'MVP Development',
    'Workflow Automation',
    'Internal Tools',
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
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
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
    name: 'Srinu Duggempudi',
    url: siteUrl,
    jobTitle: 'Custom B2B Software and MVP Development Consultant',
    knowsAbout: ['React', 'Next.js', 'Django', 'Python', 'TypeScript', 'MVP Development', 'Workflow Automation'],
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
