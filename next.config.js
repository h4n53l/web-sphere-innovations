/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GMAIL_ADDRESS: process.env.GMAIL_EMAIL_ADDRESS,
    GMAIL_PASSWORD: process.env.GMAIL_APP_PASSWORD
  }
}

module.exports = nextConfig
