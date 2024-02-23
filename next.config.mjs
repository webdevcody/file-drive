/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "adventurous-caiman-790.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
