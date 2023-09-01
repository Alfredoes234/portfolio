
import Rive from "@/components/rive";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-44 ml-24 mr-16">
      <div className="ml-64 mb-[575px]">
        <div className="text-hero"> Hi I&apos;m<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-bblack text-opacity-0"> Alfie</span></div>
        <h3 className="text-h3">
          Junior Software Developer &
          Designer
        </h3>
      </div>
      <div className="flex">
        <div className="flex-shrink-0">
          <Image src={"/photo_me.svg"} alt={"Photo of me"} width={391} height={391} />
        </div>
        <div className="ml-10">
          <h2 className="text-h2 mb-4">About Me</h2>
          <p className="flex w-15 text-para flex-wrap">
            I am a 17 year old with a deep interest in the sciences and business which I find both of them very interesting. I also have played a lot of games in my spare time to relax and have fun. I like to sometimes research random things I find interesting, someday I want to learn how to make music that I like and make a game.
          </p>
        </div>
      </div>
      <div className="mt-28">
        <h2 className="text-h2 mb-4">Hobbies</h2>
        <p className="text-para mr-96 break-words">
          I like to code in my spare time when I get a project I want to do, I work out when I can in my free time. I also like to watch anime as well because the stories are fun and interesting, and I&apos;m getting into soldering for little projects and I
          listen and find out about physics through channels like <Link href={"https://www.youtube.com/@veritasium"} className="hover:text-accent">Veritasium</Link>.
        </p>
      </div>
      <div className="flex justify-center mt-32">
        <h1 className="text-h1">Projects</h1>
      </div>
      <div className="flex gap-10 mt-10 mb-48">
        <Link href={"https://github.com/Alfredoes234/BRADBOT"} className="group relative flex transition hover:scale-105 ">
          <Image src={"/Robot.svg"} alt={"Photo of an old timey robot"} width={391} height={391} className="rounded-md object-cover" />
          <div className="absolute rounded-md bg-grey w-full h-full opacity-5 transition-opacity duration-500 group-hover:opacity-80 " />
          <div className="absolute bottom-0 px-4 py-3 w-full">
            <h3 className="text-h3"> Discord Bot </h3>
            <p className="text-small">
              A discord bot made using python
            </p>
          </div>
        </Link>
        <Link href={""} className="group relative flex transition hover:scale-105 ">
          <Image src={"/project_rectangle.svg"} alt={"Work in progress"} width={391} height={391} className="rounded-md object-cover" />
          <div className="absolute rounded-md bg-grey w-full h-full opacity-5 transition-opacity duration-500 group-hover:opacity-80 " />
          <div className="absolute bottom-0 px-4 py-3 w-full">
            <h3 className="text-h3"> Wip </h3>
            <p className="text-small">
              Desc
            </p>
          </div>
        </Link>
        <Link href={""} className="group relative flex transition hover:scale-105 ">
          <Image src={"/project_rectangle.svg"} alt={"Work in progress"} width={391} height={391} className="rounded-md object-cover" />
          <div className="absolute rounded-md bg-grey w-full h-full opacity-5 transition-opacity duration-500 group-hover:opacity-80 " />
          <div className="absolute bottom-0 px-4 py-3 w-full">
            <h3 className="text-h3"> Wip </h3>
            <p className="text-small">
              Desc
            </p>
          </div>
        </Link>
        <Link href={""} className="group relative flex transition hover:scale-105 ">
          <Image src={"/project_rectangle.svg"} alt={"Work in progress"} width={391} height={391} className="rounded-md object-cover" />
          <div className="absolute rounded-md bg-grey w-full h-full opacity-5 transition-opacity duration-500 group-hover:opacity-80 " />
          <div className="absolute bottom-0 px-4 py-3 w-full">
            <h3 className="text-h3"> Wip </h3>
            <p className="text-small">
              Desc
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
