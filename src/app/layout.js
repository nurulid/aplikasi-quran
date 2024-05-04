import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
  weight: ['300', '400'],
});

export const metadata = {
  title: "Aplikasi Qur'an",
  description:
    'Quran web app in Bahasa Indonesia built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={`${inter.className} ${notoArabic.variable}`}>
        {children}
      </body>
    </html>
  );
}
