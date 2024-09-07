'use client'
import Image from "next/image"
import Github from "../public/github.png"
import LinkedIn from "../public/linkedin.png"

export default function Home() {
    return (
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black">
            <h1 className="font-bold text-4xl">Home</h1>
            <p 
                className="max-w-[500px] min-w-52"
            >
            I am a Front-End / Full-Stack Developer currently interning for Geaux Network and looking for a full time 
            developer position.
            </p>
            <div className="flex gap-8">
                <a href="https://github.com/wellendorfmatthew?tab=repositories" className="hover:bg-thistle hover:rounded-full duration-300">
                    <Image src={Github} alt="Github"></Image>
                </a>
                <a href="https://www.linkedin.com/in/matthew-wellendorf-7a9ba828a/" className="hover:bg-thistle hover:rounded-full duration-300">
                    <Image src={LinkedIn} alt="LinkedIn"></Image>
                </a>
            </div>
            <a 
                href="/softwareresume.pdf" 
                target="_blank" 
                className="bg-thistle text-lg px-8 py-4 rounded-full font-bold hover:drop-shadow-xl duration-150"
            >
            Resume
            </a>
        </div>
    )
}