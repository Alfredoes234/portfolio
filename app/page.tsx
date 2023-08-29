
import Rive from "@/components/rive";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-44 ml-24 mr-16">
      <div className="ml-64 mb-[550px]">
        <div className="text-hero"> Hi I&apos;m<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-bblack text-opacity-0"> Alfie</span></div>
        <div className="text-h3">
          Junior Software Developer &
          Designer
        </div>
      </div>
      <div className="flex">
        <div className="flex-shrink-0">
          <Image src={"/photo_me.svg"} alt={"Photo of me"} width={391} height={391} />
        </div>
        <div className="ml-10">
          <h2 className="text-h2 mb-4">About Me</h2>
          <p className="flex w-15 text-para flex-wrap">
            I am a 17 year old with a deep interest in the sciences and business which I find both
            of them very interesting. I also have played a lot of games in my spare time to relax
            and have fun. I like to sometimes research random things I find interesting, I also have
            a lot of, siblings, someday I want to learn how to make music that I like and make a
            game.
          </p>
        </div>
      </div>
      <div className="mt-28">
        <h2 className="text-h2 mb-4">Hobbies</h2>
        <p className="text-para mr-96 break-words">
          I am a 17 year old with a deep interest in the sciences and business which I find both
          of them very interesting. I also have played a lot of games in my spare time to relax
          and have fun. I like to sometimes research random things I find interesting, I also have
          a lot of, siblings, someday I want to learn how to make music that I like and make a
          game.
        </p>
      </div>
      <div className="flex justify-center mt-32">
        <h1 className="text-h1">Projects</h1>
        <div>
          
        </div>
      </div>
      <div className="w-20 h-20">
        <Rive />
      </div>
    </main>
  );
}
