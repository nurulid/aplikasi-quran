import {
  Inter,
  Noto_Sans_Arabic,
  IBM_Plex_Sans_Arabic,
  Noto_Kufi_Arabic,
} from 'next/font/google';
import '@/styles/globals.css';
import { Provider } from '@/components/provider';
import { Analytics } from '@vercel/analytics/next';
import Link from 'next/link';

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
        <body
          className={`${inter.className} ${notoArabic.variable} ${ibmArabic.variable} ${kufiArabic.variable}`}
        >
          <div className="p-4 text-center bg-blue-600 text-white">
            <p>
              Check the new version at{' '}
              <Link
                className="underline font-bold"
                href="https://aplikasi-muslim-seven.vercel.app/"
              >
                Aplikasi Muslim
              </Link>
            </p>
            <p className="text-sm">
              If you have any feedback plese send to{' '}
              <Link
                className="font-semibold"
                href="mailto:call.nurulid@gmail.com"
              >
                call.nurulid@gmail.com
              </Link>, thank you.
            </p>
          </div>
          {children}
          <Analytics />
        </body>
      </html>
    </Provider>
  );
}
