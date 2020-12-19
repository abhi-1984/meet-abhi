import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <nav className="px-6 py-6 sm:py-12">
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
        <div className="hidden sm:grid grid-flow-col auto-cols-max gap-12 items-center relative z-10">
          <Link href="/about">
            <a className="relative z-10 focus:outline-none hover:text-accent focus:ring focus:ring-opacity-50 focus:ring-accent">
              About
            </a>
          </Link>
          <Link href="/ux-matters">
            <a className="focus:outline-none focus:ring hover:text-accent focus:ring-opacity-50 focus:ring-accent">
              UX Case Studies
            </a>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="text-sm  font-medium px-4 py-2 bg-accent rounded-md  focus:outline-none  focus:ring focus:ring-opacity-50 focus:ring-accent"
          >
            Say Hi
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
