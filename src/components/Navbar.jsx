import { IconUserCircle } from "@tabler/icons-react";
import { useState, useEffect } from "react"
import {Link} from "react-router-dom";

import '../styles/app.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {

    const scrollThreshold = 100;

    setIsScrolled(scrollPosition > scrollThreshold);
  }, [scrollPosition]);



    const[toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <nav className={`bg-white-400 mb-2 ${isScrolled ? "bg-sky-100 shadow-lg transition-all duration-500 transform scale-100" : ""} sticky`}>
        <div className="container mx-auto px-4 py-3 flex justify-between sm:py-5 lg:px-9  ">
            <div className="cursor-pointer lg:hidden" onClick={() =>setToggleNavbar(toggleNavbar ? false:true)}>
                <span className="text-black font-semibold text-3xl">☰</span>
            </div>
            
            <div className="icon">
                <h1 className="font-extrabold text-blue-900 text-2xl">HolisticEduCraft</h1>
            </div>
            <div className="hidden lg:block">
                <ul className="text-md flex justify-between gap-14">
                    <li>
                    <Link to="/" className="hover:underline">Beranda</Link>
                    </li>
                    <li>
                    <Link to="/materi-belajar" className="hover:underline">Materi Belajar</Link>
                    </li>
                    <li>
                    <Link to="/tentang-kami" className="hover:underline">Tentang Kami</Link>
                    </li>
                </ul>
            </div>

            <div>
                <Link to="/login">

                    <button className="text-2xl"><IconUserCircle 
                    size={24}
                    style={{ width: "1.5em", height: "1.5em"}} />
                    </button>

                </Link>
            </div>
            
            
        </div>
        
        <div className={toggleNavbar ? "block": "hidden"}>
            <ul className="text-lg flex flex-col gap-3  bg-slate-400/35">
                <li className="border-b border-black" >
                    <Link to="/">Beranda</Link>
                </li>
                <li className="border-b border-black" >
                    <Link to="/materi-belajar">Materi Belajar</Link>
                </li>
                <li className="border-b border-black" >
                    <Link to="/tentang-kami">Tentang Kami</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar