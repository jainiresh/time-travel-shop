/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_OLD_PRODUCTS: process.env.OLD_PRODUCTS
    }
};

export default nextConfig;
