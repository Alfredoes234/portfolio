import Alfie from "@/components/gradient";
import Rive from "@/components/rive";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-hero"> Hi I&apos;m <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Alfie</span> </div>
      <div className="w-20 h-20">
        <Rive />
      </div>
    </>
  );
}
