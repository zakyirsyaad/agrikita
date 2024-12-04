import Header from "@/components/header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#009257] px-10 xl:px-20 2xl:px-32 py-5 min-h-screen relative">
      <Header />
      <Hero />
      <Image
        src={"/images/motif hero kiri.png"}
        alt="logo"
        width={200}
        height={200}
        priority={true}
        className="absolute top-0 left-0"
      />
      <Image
        src={"/images/motif hero kanan.png"}
        alt="logo"
        width={350}
        height={350}
        priority={true}
        className="absolute bottom-0 right-0"
      />
    </main>
  );
}
