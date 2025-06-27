"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "./PageTransition";

type TransitionContextType = {
  startTransition: (to: string) => void;
  isTransitioning: boolean;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function useTransitionControl() {
  const ctx = useContext(TransitionContext);
  if (!ctx)
    throw new Error("useTransitionControl must be used inside provider");
  return ctx;
}

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // const [isFirstLoad, setIsFirstLoad] = useState(true);

  const startTransition = (to: string) => {
    setTargetPath(to);
    setIsTransitioning(true);
  };

  const onOverlayCovered = () => {
    if (targetPath) {
      router.push(targetPath);
      setTargetPath(null);
    }
  };

  const onTransitionEnd = () => {
    setIsTransitioning(false);
    //   setIsFirstLoad(false);
  };

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning }}>
      {children}
      <PageTransition
        isActive={isTransitioning}
        // isFirstLoad={isFirstLoad}
        onCovered={onOverlayCovered}
        onDone={onTransitionEnd}
      />
    </TransitionContext.Provider>
  );
}
