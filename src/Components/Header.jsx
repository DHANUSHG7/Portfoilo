import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // becomes fixed after hero
  const [visible, setVisible] = useState(true);  // hide/show on scroll direction inside hero
  const lastY = useRef(0);
  const heroHeight = useRef(0);

  // compute hero height on mount + on resize
  useEffect(() => {
    const updateHeroHeight = () => {
      const el = document.getElementById("home");
      heroHeight.current = el ? el.getBoundingClientRect().height : 700;
    };
    updateHeroHeight();
    window.addEventListener("resize", updateHeroHeight);
    return () => window.removeEventListener("resize", updateHeroHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // if scrolled past hero -> fix navbar and keep visible
      if (y > heroHeight.current) {
        setIsFixed(true);
        setVisible(true);
      } else {
        setIsFixed(false);
        // inside hero: hide on scroll down, show on scroll up
        if (y > lastY.current && y > 50) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` left-0 w-full transition-transform transform:ease-in-out duration-300 z-50
        ${isFixed ? "fixed top-0" : "relative"}
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
      aria-hidden={false}
    >
      <div className="zoom-in backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/10 
        rounded-b-2xl md:p-3 p-2 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center" style={{ minHeight: 64 }}>
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded flex items-center justify-center font-bold text-xl">
                  D
                </div>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-bold text-3xl">
                  DHANUSH
                </span>
              </a>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-6 cursor-pointer">
              <Link to={'home'} className="text-white transition-all duration-300 ease-in-out hover:text-indigo-300">Home</Link>
              <Link to={'about'} className="text-white transition-all duration-300 hover:text-indigo-300 ">About</Link>
              <Link to={'knowledge'} className="text-white transition-all duration-300 hover:text-indigo-300 ">Knowledge</Link>
              <Link to={'projects'} className="text-white transition-all duration-300 hover:text-indigo-300">Projects</Link>
              <Link to={'certificate'} className="text-white transition-all duration-300 hover:text-indigo-300">Certificates</Link>
              <Link to={'contact'} className="ml-4 inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md">
                Contact Me
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setOpen(!open)}
                aria-controls="mobile-menu"
                aria-expanded={open}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div id="mobile-menu" className={`md:hidden ${open ? "block" : "hidden"} border-t border-white/10`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to={'home'} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">Home</Link>
            <Link to={'about'} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">About</Link>
            <Link to={'knowledge'} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">Knowledge</Link>
            <Link to={'projects'} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">Projects</Link>
            <Link to={'certificate'} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">Certificates</Link>
            <Link  to={'contact'} className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Contact Me</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
