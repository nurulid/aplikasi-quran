import { APLIKASI_MUSLIM_LINK } from '@/lib/constants';
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const appMuslimLink = APLIKASI_MUSLIM_LINK;

  return (
    // Show case the new Aplikasi Muslim project
    <main className="p-5 max-w-2xl mx-auto mt-0 md:mt-10">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Aplikasi Qur&apos;an
      </h1>
      <p className="mb-4">
        This is the home page of the{' '}
        <Link href="/my-quran" className="text-green-600 font-semibold">
          Aplikasi Qur&apos;an
        </Link>{' '}
        web application. Please visit our new project for more features and
        updates.
      </p>
      <Link
        href={appMuslimLink}
        className="text-green-600 underline font-semibold"
      >
        <Image
          src="/aplikasi-muslim.webp"
          alt="Aplikasi Muslim"
          width={600}
          height={300}
          className="mb-4 rounded-2xl"
        />
        Go to Aplikasi Muslim{' '}
        <SquareArrowOutUpRight className="inline-block ml-1 size-5" />
      </Link>
    </main>
  );
}
