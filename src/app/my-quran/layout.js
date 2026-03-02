import { APLIKASI_MUSLIM_LINK } from "@/lib/constants";
import Link from "next/link";

export default async function QuranLayout({ children }) {
  const appMuslimLink = APLIKASI_MUSLIM_LINK;

  return (
    <main className="h-full cw-full max-w-[1440px] mx-auto">
      <div className="p-4 text-center bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg my-4">
        <p>
          Check the new version at{' '}
          <Link
            className="underline font-bold"
            href={appMuslimLink}
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
