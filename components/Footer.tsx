import React from "react";
import { ArrowLeftRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    // Hide footer on mobile view
    <footer className="fixed bottom-0 w-full z-50 py-16 px-16 text-white hidden md:block">
      <div className="flex justify-between items-center text-black text-2xl">
        <span>Sanjivy Kumaravel</span>
        <div className="flex flex-col items-center gap-1 text-sm text-zinc-900">
          <ArrowLeftRight className="w-6 h-6 animate-pulse" />
          <span className="text-xs text-center">Navigate with space</span>
        </div>
        <span>Software Engineer</span>
      </div>
    </footer>
  );
};

export default Footer;
