import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Srinu D | Custom B2B Software & MVP Development',
    short_name: 'Srinu D',
    description:
      'Full-stack software developer for custom web apps, business websites, MVP development, workflow automation, and internal tools.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1220',
    theme_color: '#0b1220',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
