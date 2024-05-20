import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="h-[90vh] text-center flex flex-col items-center justify-center">
      <h1 className='text-9xl text-primary/20'>404</h1>
      <h2 className="text-3xl text-primary">There was a problem.</h2>
      <p>
        We <span className="font-semibold">could not find</span> the page you
        were looking for.
      </p>
      <p>
        Go back to the{' '}
        <Link href="/my-quran" className="underline">
          homepage
        </Link>
        .
      </p>
    </main>
  );
}
