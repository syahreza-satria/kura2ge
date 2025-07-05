/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Konfigurasi ini WAJIB ada agar bisa menggunakan <Image>
    // dengan URL dari luar (remote), yang juga menjadi syarat
    // untuk menggunakan fitur seperti placeholder="blur".
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '', // Kosongkan jika tidak ada port spesifik
        pathname: '/account123/**', // Pola path, '**' berarti semua sub-path
      },
      // Anda bisa menambahkan domain lain di sini jika perlu
      // Contoh untuk placehold.co dari kode Anda sebelumnya:
      {
        protocol: 'http',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;