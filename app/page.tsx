import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/bgpro.jpg"
        alt="background"
        fill
        className="object-cover -z-10"
        priority
      />
    </div>
  );
}
