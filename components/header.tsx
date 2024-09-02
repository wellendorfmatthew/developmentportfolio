'use client'

export default function Header() {

    const handleLink = (link : number) => {
        const links = document.querySelectorAll('.link');

        links.forEach(link => {
            link.classList.remove('underline');
        })

        const clickedLink = document.querySelector(`.link-${link}`);
        clickedLink?.classList.add('underline')
    }

    return (
        <div className="bg-thistle flex w-screen h-36 items-center justify-evenly text-black text-lg">
            <h1 className="font-bold">Matthew Wellendorf</h1>
            <div className="flex items-center gap-12">
                <a 
                    href="#home" 
                    className="underline-offset-8 decoration-4 link link-0" 
                    onClick={() => handleLink(0)}
                >
                    Home
                </a>
                <a 
                    href="#about" 
                    className="underline-offset-8 decoration-4 link link-1" 
                    onClick={() => handleLink(1)}
                >
                    About
                </a>
                <a 
                    href="#skills" 
                    className="underline-offset-8 decoration-4 link link-2" 
                    onClick={() => handleLink(2)}
                >
                    Skills
                </a>
                <a 
                    href="#projects" 
                    className="underline-offset-8 decoration-4 link link-3" 
                    onClick={() => handleLink(3)}
                >
                    Projects
                </a>
                <a 
                    href="#contact" 
                    className="underline-offset-8 decoration-4 link link-4" 
                    onClick={() => handleLink(4)}
                >
                    Contact
                </a>
            </div>
        </div>
    )
}