import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Nav({ handleGetInTouchPopover }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="px-10 py-3 fixed top-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur z-40">
      <div className="wrapper flex items-center justify-between relative">
        <Link href="/">
          <a className="focus:outline-none text-xl">
            {scrollPosition >= 160 ? (
              <Image src="/assets/common/logo.png" width="32px" height="32px" />
            ) : (
              <span>ab.</span>
            )}
          </a>
        </Link>
        <div className="grid grid-flow-col auto-cols-max gap-6 sm:gap-10 items-center relative z-10">
          <Link href="/">
            <a className="hidden sm:inline focus:outline-none hover:text-accent focus:ring focus:ring-opacity-50 focus:ring-accent">
              Work
            </a>
          </Link>
          <Link href="/about">
            <a className="focus:outline-none focus:ring hover:text-accent focus:ring-opacity-50 focus:ring-accent">
              About
            </a>
          </Link>

          <button
            onClick={() => handleGetInTouchPopover()}
            className="font-semibold px-2 sm:px-4 py-2 bg-accent text-black rounded-md hover:shadow-inner  focus:outline-none  focus:ring focus:ring-opacity-50 focus:ring-accent"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}
