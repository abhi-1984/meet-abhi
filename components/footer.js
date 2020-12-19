import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 py-4">
      <div className="wrapper flex items-center justify-between">
        <div className="opacity-60">© {new Date().getFullYear()} Abhi</div>
        <div className="grid grid-flow-col auto-cols-max gap-8">
          <Link href="/about">
            <a>About</a>
          </Link>
          <div className="hidden sm:block">hello@meet-abhi.com</div>
        </div>
      </div>
    </footer>
  );
}
