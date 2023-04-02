/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CONTACT_FORM_API_KEY:
      process.env.NEXT_PUBLIC_CONTACT_FORM_API_KEY,
  },
};

module.exports = nextConfig;
