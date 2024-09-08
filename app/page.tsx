import Image from "next/image";
import Header from "@/components/header";
import Github from "../public/github.png";
import LinkedIn from "../public/linkedin.png";
import Programming from "../public/programming.png";

export default function Portfolio() {
  return (
    <div>
      <Header></Header>
      <div className="pt-44 flex flex-col gap-8">
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black pt-[150px]" id="home">
          <h1 className="font-bold text-4xl">Home</h1>
          <Image src={Programming} alt="Programming"></Image>
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
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black pt-[150px]" id="about">
            <h1 className="font-bold text-4xl">About</h1>
            <p 
                className="max-w-[500px] min-w-52"
            >
            Entry-level Software Engineer experienced in using HTML and CSS to build responsive web applications and eager to use
            React, Javascript, Node.js and other technologies to solve complex problems and make meaningful contributions.
            </p>
        </div>
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black pt-[150px]" id="skills">
            <h1 className="font-bold text-4xl">Skills</h1>
            <p 
                className="max-w-[500px] min-w-52"
            >
            Entry-level Software Engineer experienced in using HTML and CSS to build responsive web applications and eager to use
            React, Javascript, Node.js and other technologies to solve complex problems and make meaningful contributions.
            </p>
        </div>
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black pt-[150px]" id="projects">
            <h1 className="font-bold text-4xl">Projects</h1>
            <p 
                className="max-w-[500px] min-w-52"
            >
            Entry-level Software Engineer experienced in using HTML and CSS to build responsive web applications and eager to use
            React, Javascript, Node.js and other technologies to solve complex problems and make meaningful contributions.
            </p>
        </div>
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black pt-[150px]" id="contact">
            <h1 className="font-bold text-4xl">Contact</h1>
            <p 
                className="max-w-[500px] min-w-52"
            >
            Entry-level Software Engineer experienced in using HTML and CSS to build responsive web applications and eager to use
            React, Javascript, Node.js and other technologies to solve complex problems and make meaningful contributions.
            </p>
        </div>
      </div>
    </div>
  );
}
