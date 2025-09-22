import Image from "next/image";

export default function About() {
  return (
    <div className="w-full h-screen p-4 sm:p-8 md:p-16 md:pb-32 box-border overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full gap-6">
        <div className="flex-1 aspect-square md:aspect-auto overflow-y-auto">
          <div className="h-full flex flex-col justify-start">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mb-8">
              About Me
            </h1>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              Hello! I am Sanjivy Kumaravel
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mb-6">
              A passionate software engineer with over four years of experience,
              I enjoy building apps and games for mobile and web, as well as
              developing open source APIs. In addition to my software
              engineering work, I provide sessions for <strong>Python</strong>{" "}
              and <strong>Flutter</strong>, having taught over many college
              students and working professionals.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mb-6">
              I take pride in my ability to explain complex concepts in a clear
              and concise manner, helping my students to quickly grasp the
              skills they need to succeed. In my spare time, I have worked on
              several projects, further honing my development skills.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl">
              I am currently a software engineer at{" "}
              <a
                href="https://www.jpmorganchase.com/"
                target="_blank"
                className="font-normal hover:underline"
              >
                JPMorganChase
              </a>
              , where I continue to leverage my expertise in{" "}
              <strong>Golang</strong> and other technologies to build innovative
              software solutions.
            </p>
          </div>
        </div>
        <div className="flex-1 aspect-square bg-gray-700 relative">
          <Image
            src="/me.jpg"
            alt="1"
            fill
            className="object-cover filter grayscale hover:grayscale-0 transition duration-600 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
