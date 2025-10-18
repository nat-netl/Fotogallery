/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL('http://static.photos/cityscape/**'), 
      new URL('http://static.photos/nature/**'), 
      new URL('http://static.photos/travel/**'),
      new URL('http://static.photos/office/**')
    ],
  },
};

export default nextConfig;
