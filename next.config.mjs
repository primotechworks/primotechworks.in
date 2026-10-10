/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // "Work" lived at /portfolio before it was renamed to "Clients".
      { source: "/portfolio", destination: "/clients", permanent: true },
      { source: "/portfolio/:slug", destination: "/clients/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
