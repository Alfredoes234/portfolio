import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <main className="mt-24 ml-24 mr-16">
            <h1 className="text-h1">Contact</h1>
            <div className="flex mt-20 mb-52">
                <div className="mr-52">
                    <p className="text-para w-96 mr-20">
                        Do you have an idea that you want to
                        bring into fruition? Contact me and I
                        might be able to help you with the
                        execution of the idea.
                    </p>
                    <div className="bg-grey h-56 w-96 mt-10">
                        <h3 className="text-h3 ml-2 mr-2">Q&A</h3>  
                        <details className="mt-5 mb-5 ml-2 mr-2">
                            <summary>What time zone are you in?</summary>
                            <p>
                                I am BST/GMT which is the UK time zone, so I might not be able to
                                reply instantly.
                            </p>
                       </details>
                        <details className="mt-5 mb-5 ml-2 mr-2">
                            <summary>Is there set prices?</summary>
                            <p>
                                No there isn&apos;t a set price its done on a per project basis with a
                                discussion on the price.
                            </p>
                       </details>
                    </div>
                    
                </div>
                
                <Image src={"/Form.svg"} alt={"Photo of crispin school academy"} width={800} height={600} className=" absolute flex-shrink-0 right-10 top-36" />
            </div>

        </main>
    )
}