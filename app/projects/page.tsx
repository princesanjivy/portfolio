import Image from "next/image";

export default function Project() {
  return (
    <div className="w-full h-screen p-4 sm:p-8 md:p-16 md:pb-32 box-border overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full gap-6">
        <div className="flex-1 aspect-square md:aspect-auto overflow-y-auto">
          <div className="h-full flex flex-col justify-start">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mb-8">
              Projects
            </h1>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              Mobile Apps
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mb-6">
              I have created several Android apps in my leisure time, some of
              which have garnered over 1K downloads on the{" "}
              <a
                href="https://play.google.com/store/apps/dev?id=6439925551269057866"
                target="_blank"
                className="underline hover:text-black transition"
              >
                Google Play Store
              </a>
              . I have also published a few of them on{" "}
              <a
                href="https://apps.apple.com/us/developer/sanjivy-kumaravel/id1741498828"
                target="_blank"
                className="underline hover:text-black transition"
              >
                Apple&apos;s App Store
              </a>
              , Xiaomi&apos;s GetApps, and contributed to FOSS on F-Droid.
            </p>

            <ul className="list-disc pl-6 space-y-4 text-lg sm:text-lg md:text-xl font-light max-w-2xl">
              <li>
                <a
                  href="https://github.com/princesanjivy/tic-tac-toe"
                  target="_blank"
                  className="font-medium underline hover:text-black transition"
                >
                  Tic Tac Toe - Online
                </a>
                : A two-player game built using Flutter and Firebase, with three
                different modes for playing.
              </li>
              <li>
                <a
                  href="https://runmicro.princeappstudio.in/" // replace with actual Micro link
                  target="_blank"
                  className="font-medium underline hover:text-black transition"
                >
                  Micro
                </a>
                : A platform that allows users to run Python scripts or Java
                programs over the web via WebSockets interactively.
              </li>
            </ul>
          </div>
        </div>
        {/* Right staggered image layout */}
        <div className="flex-1 aspect-square  relative overflow-hidden">
          <div className="absolute inset-0 overflow-x-auto overflow-y-hidden">
            {/* Mobile: horizontal scroll layout */}
            <div className="flex gap-2 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-2 w-max md:w-full h-full">
              <div className="relative w-64 h-96 md:w-full md:h-full md:row-span-2">
                <Image
                  src="/msf.png"
                  alt="Movie Style Fonts"
                  fill
                  className="object-cover filter grayscale hover:grayscale-0 transition duration-600 ease-in-out"
                />
              </div>
              <div className="relative w-64 h-48 md:w-full md:h-full">
                <Image
                  src="/tictactoe.png"
                  alt="Tic Tac Toe"
                  fill
                  className="object-cover filter grayscale hover:grayscale-0 transition duration-600 ease-in-out"
                />
              </div>
              <div className="relative w-64 h-48 md:w-full md:h-full">
                <Image
                  src="/aucons.png"
                  alt="AU ICons"
                  fill
                  className="object-cover filter grayscale hover:grayscale-0 transition duration-600 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
