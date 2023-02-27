/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.dog.ceo',
      port: '',
      pathname: '/breeds/**/**'

    },
    {protocol: 'https',
    hostname: 'fastly.4sqi.net',
    port: '',
    pathname: '/img/**/**'}]
  },
 webpack(config) {
  config.experiments = {...config.experiments, topLevelAwait: true }
  return config
  }
}

module.exports = nextConfig
