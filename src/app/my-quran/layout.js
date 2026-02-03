import Link from "next/link";

export default function QuranLayout({ children }) {
  return (
    <main className="h-full cw-full max-w-[1440px] mx-auto">
      <div className="p-4 text-center bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg my-4">
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
          <Link className="font-semibold" href="mailto:call.nurulid@gmail.com">
            call.nurulid@gmail.com
          </Link>
          , thank you.
        </p>
      </div>
      {children}
    </main>
  );
}
