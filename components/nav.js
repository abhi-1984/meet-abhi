import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <nav className="px-10 py-3 fixed top-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur z-40">
      <div className="wrapper flex items-center justify-between relative">
        <Link href="/">
          <a className="focus:outline-none text-xl">ab.</a>
        </Link>
        <div className="hidden sm:grid grid-flow-col auto-cols-max gap-10 items-center relative z-10">
          <Link href="/#work">
            <a className="relative z-10 focus:outline-none hover:text-accent focus:ring focus:ring-opacity-50 focus:ring-accent">
              Work
            </a>
          </Link>
          <Link href="/about">
            <a className="focus:outline-none focus:ring hover:text-accent focus:ring-opacity-50 focus:ring-accent">
              About
            </a>
          </Link>
          <button className="font-semibold px-4 py-2 bg-accent text-black rounded-md hover:shadow-inner  focus:outline-none  focus:ring focus:ring-opacity-50 focus:ring-accent">
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}
