

import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-blue-700 text-gray-100 shadow w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                <Link to="/">
                    <div className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0" >
                        <span className="ml-3 text-xl">DEUYDIC</span>
                    </div>
                </Link>
                <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
                    <Link to="/" className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
                        Home
                    </Link>
                    <Link to="/about" className="cursor-pointer uppercase hover:text-indigo-300" >
                        About
                    </Link>
                </nav>
            </div>

        </header>
    )
}


