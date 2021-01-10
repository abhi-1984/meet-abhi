import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

import Meta from "../components/meta";
import Footer from "./footer";
import ContactPopover from "./contactPopover";

import Nav from "./nav";

export default function Layout({ preview, children }) {
  const [showGetInTouchPopover, setShowGetInTouchPopover] = useState(false);

  const handleGetInTouchPopover = () => {
    setShowGetInTouchPopover(!showGetInTouchPopover);
  };

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      //Do whatever when esc is pressed
      setShowGetInTouchPopover(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <>
      <Meta />

      <AnimatePresence>
        {showGetInTouchPopover && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ easings: "easeInOut" }}
              className="fixed z-50 bg-black bg-opacity-80 backdrop-overlay text-white inset-0 "
              onClick={() => handleGetInTouchPopover()}
            />
            <ContactPopover handleGetInTouchPopover={handleGetInTouchPopover} />
          </>
        )}
      </AnimatePresence>

      <div className="bg-black text-white min-h-screen">
        <Nav handleGetInTouchPopover={handleGetInTouchPopover} />
        <main className="pt-16">{children}</main>
        <Footer />
      </div>
    </>
  );
}
