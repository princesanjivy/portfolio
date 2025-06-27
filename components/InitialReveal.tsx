"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 1000); // 1s reveal
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "100%" }} // wipe-out effect
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-screen h-screen bg-zinc-900 z-[9999]"
        />
      )}
    </AnimatePresence>
  );
}
