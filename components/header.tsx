export default function Header() {
    return (
        <div className="bg-gray-500 flex w-screen h-36 items-center justify-evenly text-white text-lg">
            <h1>Matthew Wellendorf</h1>
            <div className="flex items-center gap-12">
                <a href="#home" className="active:underline focus:underline underline-offset-8 decoration-4">Home</a>
                <a href="#about" className="active:underline focus:underline underline-offset-8 decoration-4">About</a>
                <a href="#skills" className="active:underline focus:underline underline-offset-8 decoration-4">Skills</a>
                <a href="#projects" className="active:underline focus:underline underline-offset-8 decoration-4">Projects</a>
                <a href="#contact" className="active:underline focus:underline underline-offset-8 decoration-4">Contact</a>
            </div>
        </div>
    )
}