
import Rive from "@/components/rive";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[175px]">
      <div className="ml-[215px]">
        <div className="text-hero"> Hi I&apos;m
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-bblack text-opacity-0"> Alfie</span> 
        </div>
        <div className="text-h3">
         Junior software developer &
          Designer
        </div>
      </div>
      
      <div className="w-20 h-20">
        <Rive />
      </div>
    </main>
  );
}
