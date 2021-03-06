/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search',
        permanent: true,
      }
    ]
  }
}
