// /** @type {import('next').NextConfig} */
// const nextConfig = {
//  images: {
//    domains: ['cdn.sanity.io'],
//  },
//  };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during the build process
  },
};

export default nextConfig;

