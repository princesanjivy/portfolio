"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTransitionControl } from "./TransitionContext";

export default function ScrollNavigator({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isScrolling = useRef(false);
  const { startTransition } = useTransitionControl();

  const routeOrder = [
    "/",
    "/about",
    "/projects",
    "/testimonials",
    "/reviews",
    "/contact",
  ];

  const navigate = (direction: "next" | "prev") => {
    const currentIndex = routeOrder.indexOf(pathname || "/");

    const newIndex =
      direction === "next"
        ? Math.min(routeOrder.length - 1, currentIndex + 1)
        : Math.max(0, currentIndex - 1);

    if (newIndex !== currentIndex) {
      startTransition(routeOrder[newIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        navigate("next");
      }
    };

    const handleTap = (e: MouseEvent | TouchEvent) => {
      if (isScrolling.current) return;
      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), 800);

      let clientX = 0;

      if (e instanceof MouseEvent) {
        clientX = e.clientX;
      } else if (e instanceof TouchEvent) {
        clientX = e.changedTouches[0]?.clientX || 0;
      }

      const screenWidth = window.innerWidth;

      if (clientX < screenWidth / 2) {
        navigate("prev");
      } else {
        navigate("next");
      }
    };

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      window.addEventListener("click", handleTap);
      window.addEventListener("touchend", handleTap);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (isMobile) {
        window.removeEventListener("click", handleTap);
        window.removeEventListener("touchend", handleTap);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pathname]);

  return <>{children}</>;
}
