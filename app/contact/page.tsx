"use client";

import { Download, GithubIcon, Globe, Home, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTransitionControl } from "@/components/TransitionContext";

export default function Contact() {
  const { startTransition } = useTransitionControl();

  return (
    <div className="w-full h-screen p-4 sm:p-8 md:p-16 md:pb-32 box-border overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full gap-12">
        <div className="flex-1 aspect-square bg-gray-700 relative">
          <Image
            src="/meContact.png"
            alt="1"
            fill
            className="object-cover filter grayscale hover:grayscale-0 transition duration-600 ease-in-out"
          />
        </div>
        <div className="flex-1 aspect-square md:aspect-auto overflow-y-auto">
          <div className="h-full flex flex-col justify-start">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mb-18">
              Contact <span className="block">Information</span>
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl sm:text-2xl md:text-3xl font-semibold">
                  Phone
                </h3>
                <p className="text-2xl sm:text-xl md:text-2xl font-thin">
                  (91) 9443376775
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-2xl md:text-3xl font-semibold">
                  Email
                </h3>
                <p className="text-2xl sm:text-xl md:text-2xl font-thin">
                  sanjivy(at)princeappstudio.in{" "}
                  <span className="block">sanjivy.android(at)gmail.com</span>
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-2xl md:text-3xl font-semibold">
                  Resume
                </h3>
                <a
                  href="/docs/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 text-2xl sm:text-xl md:text-2xl font-thin hover:underline"
                >
                  <Download size={20} className="text-current" />
                  Download
                </a>
              </div>

              <div>
                <h3 className="text-3xl sm:text-2xl md:text-3xl font-semibold">
                  Github
                </h3>
                <Link
                  className="inline-flex items-center gap-2  text-2xl sm:text-xl md:text-2xl font-thin hover:underline"
                  href={"https://www.github.com/princesanjivy"}
                  target="_blank"
                >
                  <GithubIcon size={20} className="text-current" />
                  princesanjivy
                </Link>
              </div>

              <div>
                <h3 className="text-3xl sm:text-2xl md:text-3xl font-semibold">
                  Instagram
                </h3>
                <Link
                  className="inline-flex items-center gap-2  text-2xl sm:text-xl md:text-2xl font-thin hover:underline"
                  href={"https://www.instagram.com/princesanjivy"}
                  target="_blank"
                >
                  <Instagram size={20} className="text-current" />
                  princesanjivy
                </Link>
              </div>

              <div>
                <h3 className="text-3xl sm:text-2xl md:text-3xl font-semibold">
                  Legacy Website
                </h3>
                <Link
                  className="inline-flex items-center gap-2  text-2xl sm:text-xl md:text-2xl font-thin hover:underline"
                  href={"https://princesanjivy-portfolio.web.app"}
                  target="_blank"
                >
                  <Globe size={20} className="text-current" />
                  portfolio
                </Link>
              </div>
            </div>
            <p className="text-sm text-zinc-500 mt-18">
              This portfolio was developed using <strong>Next.js</strong> and is
              hosted on <strong>Vercel</strong>. The UI design was inspired by
              the{" "}
              <a
                href="https://www.freepik.com/free-vector/monochrome-portfolio-design_413162459.htm#fromView=keyword&page=1&position=3&uuid=309f8378-925d-4799-9caf-699d8d8c8de0&query=Minimalist+Portfolio+Template"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black transition"
              >
                Monochrome Minimal Portfolio
              </a>{" "}
              template from <strong>Freepik</strong>.
            </p>
            <div className="flex flex-row justify-end">
              <button
                onClick={() => startTransition("/")}
                className="w-12 h-12 bg-zinc-900 m-8 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-transform duration-300 transform hover:scale-110 hover:rotate-3 z-50"
                title="Go to Home"
              >
                <Home size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
