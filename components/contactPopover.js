import { LinkedInIcon, MailIcon, TwitterIcon } from "./icons";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactPopover() {
  return (
    <motion.section
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ easings: "easeInOut" }}
      className="px-10 pt-20 pb-10 bg-black text-white fixed top-0 left-0 right-0 z-50"
    >
      <div className="wrapper grid sm:grid-flow-row md:grid-flow-col auto-cols-fr gap-10">
        <div>
          <span className="text-sm uppercase opacity-60 font-semibold">
            Don’t be shy
          </span>
          <h3 className="mt-4">
            Let's talk, share our vision and create something awesome together.
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex items-center p-4 bg-jetBlack rounded-md cursor-pointer group hover:bg-white hover:bg-opacity-10 transition duration-300">
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <MailIcon />
            </div>
            <div className="text-lg font-light flex-1">hello@meet-abhi.com</div>

            <div className="hidden md:flex px-2 py-1 bg-white rounded font-semibold text-black opacity-0 group-hover:opacity-100 transition duration-300">
              Copy
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
