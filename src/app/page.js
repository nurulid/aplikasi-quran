import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-5 max-w-2xl mx-auto">
      <h2>Hello 🙂</h2>
      <p>
        This project is in progress, check the
        <Link href="/my-quran" className="underline">
          {' '}
          preview.
        </Link>
      </p>
    </main>
  );
}
