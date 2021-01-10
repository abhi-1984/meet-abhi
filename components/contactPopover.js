import { CloseIcon, LinkedInIcon, MailIcon, TwitterIcon } from "./icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import useClipboard from "react-use-clipboard";

export default function ContactPopover({ handleGetInTouchPopover }) {
  const [isCopied, setCopied] = useClipboard("hello@meet-abhi.com", {
    successDuration: 1000,
  });

  return (
    <motion.section
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.7 }}
      className="w-440 max-w-full px-10 pt-20 pb-10 bg-black text-white fixed top-0 bottom-0 right-0 z-50"
    >
      <div
        onClick={() => handleGetInTouchPopover()}
        className="absolute right-8 top-8 opacity-20 cursor-pointer hover:opacity-100 duration-300 transition"
      >
        <CloseIcon />
      </div>
      <div className=" flex items-stretch justify-between flex-col h-full">
        <div className="flex-1 flex flex-col items-start">
          <div className="mb-8">
            <Image src="/assets/common/logo.png" width="64px" height="64px" />
          </div>
          <span className="text-sm uppercase opacity-60 font-semibold">
            Don’t be shy
          </span>
          <h3 className="mt-4">
            Let's talk, share our vision and create something awesome together.
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <a
            href="mailto:hello@meet-abhi.com"
            className="flex md:hidden items-center p-4 bg-jetBlack rounded-md hover:bg-white hover:bg-opacity-10 transition duration-300"
          >
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <MailIcon />
            </div>
            <div className="text-lg font-light">hello@meet-abhi.com</div>
          </a>
          <div
            onClick={setCopied}
            className={`hidden md:flex items-center p-4 bg-jetBlack rounded-md relative cursor-pointer group hover:bg-white hover:bg-opacity-10 transition duration-300`}
          >
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <MailIcon />
            </div>
            <div className="text-lg font-light flex-1">hello@meet-abhi.com</div>

            <div
              onClick={setCopied}
              className="hidden md:flex px-2 py-1 bg-white rounded font-semibold text-black opacity-0 group-hover:opacity-100 transition duration-300"
            >
              {isCopied ? "Copied" : "Copy"}
            </div>
          </div>
          <a
            href="https://www.twitter.com/_abhiii"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            className="flex items-center p-4 bg-jetBlack rounded-md hover:bg-white hover:bg-opacity-10 transition duration-300"
          >
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <TwitterIcon />
            </div>
            <div className="text-lg font-light">Send me a DM</div>
          </a>
          <a
            href="https://www.linkedin.com/in/origine/"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            className="flex items-center p-4 bg-jetBlack rounded-md hover:bg-white hover:bg-opacity-10 transition duration-300"
          >
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <LinkedInIcon />
            </div>
            <div className="text-lg font-light">Connect on LinkedIn</div>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
