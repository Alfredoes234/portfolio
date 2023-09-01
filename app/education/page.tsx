import Link from "next/link";
import Image from "next/image";

export default function Education() {
    return(
        <main className="mt-24 ml-24 mr-16">
            <h1 className="text-h1">Education</h1>
            <div className="flex mt-10 mb-24">
                <div>
                    <h3 className="text-h3">Crispin 2017-2022</h3>
                    <p className="text-para">
                        Started secondary school in 2017 and enjoyed the first few years then when the choices came on what you want to do for GCSE and the two not mandatory subjects I picked where DIT and business studies because I have an interest in the two. I also decided to pick geography because It was more practical than history.
                    </p>
                </div>
                <Image src={"/Crispin_School.svg"} alt={"Photo of crispin school academy"} width={600} height={500} className="flex-shrink-0 mr-12 border border-bblack rounded-xl" />  
            </div>
            <div className="flex mb-24">
                <Image src={"/Strode.svg"} alt={"Photo of strode college"} width={700} height={600} className="flex-shrink-0 mr-12 border border-bblack rounded-xl" />
                <div>
                    <h3 className="text-h3 mb-4">Strode College 2022-Current</h3>
                    <p className="text-para">
                        Started college at the start of the winter term in 2022 and decided to take the T level digital production design and development, this was my entry into coding as a whole and Is when I started to seriously code rather than looking at it and think that&apos;s its cool.<br /><br/>I also in the first year participated in a esports competition called student champs held by the British esports association, we made it decently far and it was fun. And in the second year we make websites.
                    </p>
                </div>
            </div>
        </main>
    ) 
}