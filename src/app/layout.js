import { Inter, Noto_Sans_Arabic, IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic } from 'next/font/google';
import '@/styles/globals.css';
import { Provider } from '@/components/provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
  weight: ['300', '400'],
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-ibm-arabic',
  weight: ['300', '400'],
});

const kufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-kufi-arabic',
  weight: ['300', '400'],
});

export const metadata = {
  title: "Aplikasi Qur'an",
  description:
    'Quran web app in Bahasa Indonesia built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en" data-theme="lemonade">
        <body className={`${inter.className} ${notoArabic.variable} ${ibmArabic.variable} ${kufiArabic.variable}`}>
          {children}
        </body>
      </html>
    </Provider>
  );
}
