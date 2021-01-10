import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Meta from "../components/meta";
import Footer from "./footer";
import ContactPopover from "./contactPopover";

import Nav from "./nav";

export default function Layout({ preview, children }) {
  const [showGetInTouchPopover, setShowGetInTouchPopover] = useState(false);

  const handleGetInTouchPopover = () => {
    setShowGetInTouchPopover(!showGetInTouchPopover);
  };

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
              className="fixed z-50 bg-black bg-opacity-95 backdrop-overlay text-white inset-0 "
              onClick={() => handleGetInTouchPopover()}
            />
            <ContactPopover />
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
