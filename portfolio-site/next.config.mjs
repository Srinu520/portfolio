// Configure Next.js to support GitHub Pages static export when requested.
// We toggle export behavior using env BUILD_FOR_PAGES and pass the base path
// via NEXT_BASE_PATH from the GitHub Actions workflow.

const isPages = process.env.BUILD_FOR_PAGES === 'true';
const basePath = isPages ? process.env.NEXT_BASE_PATH || '' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only enable static export for the GitHub Pages build.
  ...(isPages ? { output: 'export', trailingSlash: true } : {}),
  // Apply basePath/assetPrefix only for Pages to serve under /<repo> when needed.
  ...(isPages && basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
