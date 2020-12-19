import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="px-3 py-12">
      <div className="wrapper flex items-center justify-between relative">
        <Link href="/">
          <a className="focus:outline-none">
            <Image
              src={"/assets/common/logo.png"}
              alt="Meet Abhi"
              width={80}
              height={80}
            />
          </a>
        </Link>
        <div className="grid grid-flow-col auto-cols-max gap-12 items-center relative z-10">
          <Link href="/about">
            <a className="relative z-10 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-accent">
              About
            </a>
          </Link>
          <Link href="/ux-matters">
            <a className="focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-accent">
              UX Case Studies
            </a>
          </Link>
          <button className="text-sm  font-medium px-4 py-2 bg-accent rounded-full  focus:outline-none  focus:ring focus:ring-opacity-50 focus:ring-accent">
            Say Hi
          </button>
        </div>
      </div>
    </nav>
  );
}
