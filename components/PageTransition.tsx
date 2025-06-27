"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({
  isActive,
  // isFirstLoad,
  onCovered,
  onDone,
}: {
  isActive: boolean;
  // isFirstLoad: boolean;
  onCovered: () => void;
  onDone: () => void;
}) {
  const [stage, setStage] = useState<"entering" | "exiting" | null>(null);

  // useEffect(() => {
  //   if (isActive) setStage("entering");
  // }, [isActive]);

  // On first mount, animate out to reveal page
  useEffect(() => {
    // if (isFirstLoad) {
    //   setStage("entering");
    // } else

    if (isActive) {
      setStage("entering");
    }
  }, [isActive]);
  // add isFirstLoad to deps

  const handleComplete = () => {
    if (stage === "entering") {
      onCovered(); // This triggers router.push()
      setStage("exiting"); // Begin exit animation
    } else if (stage === "exiting") {
      onDone(); // Clean up
      setStage(null);
    }
  };

  if (!stage) return null;

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: stage === "entering" ? "0%" : "100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={handleComplete}
      className="fixed top-0 left-0 w-full h-full bg-zinc-900 z-50 pointer-events-none"
    />
  );
}
