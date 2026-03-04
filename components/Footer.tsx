import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Show House
        </p>

        <div className="flex items-center gap-6 text-sm">

          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/privacypolicy"
            className="hover:text-white transition"
          >
            Privacy Policy
          </Link>

          <Link
            href="/termsofservice"
            className="hover:text-white transition"
          >
            Terms of Service
          </Link>

        </div>
      </div>
    </footer>
  );
}