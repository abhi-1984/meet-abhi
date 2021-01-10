import Link from "next/link";
import { DribbbleIcon, LinkedInIcon, TwitterIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="py-12 px-10 border-t border-solid border-white border-opacity-10">
      <div className="wrapper flex items-center justify-between">
        <div className="opacity-60">Abhishek © {new Date().getFullYear()}</div>
        <div className="grid grid-flow-col auto-cols-max gap-8">
          <a
            href="https://www.twitter.com/_abhiii"
            rel="noopener noreferrer"
            target="_blank"
            tabIndex={0}
            className="hover:opacity-60"
            aria-label="Follow Abhishek on Twitter"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://dribbble.com/_abhiii"
            target="_blank"
            rel="noopener noreferrer"
            target="_blank"
            tabIndex={0}
            className="hover:opacity-60"
            aria-label="Follow Abhishek on Dribbble"
          >
            <DribbbleIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/origine/"
            rel="noopener noreferrer"
            target="_blank"
            tabIndex={0}
            className="hover:opacity-60"
            aria-label="Connect with  Abhishek on LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
