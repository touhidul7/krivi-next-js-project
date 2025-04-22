/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        domains: ['*'],
        unoptimized: true
    },
    trailingSlash: true
};
export default nextConfig;
