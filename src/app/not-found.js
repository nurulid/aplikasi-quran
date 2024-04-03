import Link from "next/link"

export default function NotFound() {
  return (
    <main className="h-[90vh] text-center flex flex-col items-center justify-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>We could not find the page you were looking for.</p>
      <p>Go back to the <Link href="/my-quran" className="underline">homepage</Link>.</p>
    </main>
  )
}