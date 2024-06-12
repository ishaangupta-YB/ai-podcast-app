/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: process.env.NEXT_PUBLIC_CONVEX_URL.replace("https://", "")
          
        }, 
        {
          protocol: 'https',
          hostname: 'img.clerk.com'
        }, 
      ]
    }
  };
  
  export default nextConfig;