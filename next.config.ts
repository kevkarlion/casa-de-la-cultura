/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Generar AVIF + WebP automáticamente para navegadores que lo soporten
    formats: ['image/avif', 'image/webp'],

    // Tamaños para imágenes responsive con layout responsive/intrinsic
    deviceSizes: [480, 768, 1024, 1280, 1536],

    // Tamaños para imágenes con layout fixed o fill con sizes
    imageSizes: [64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig
