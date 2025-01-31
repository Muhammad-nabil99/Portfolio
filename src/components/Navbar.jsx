import Hamburger from "hamburger-react";
import { useState, useEffect } from "react"; // Import useEffect
import { MdDarkMode } from "react-icons/md";
import { TfiShine } from "react-icons/tfi";
import { Link } from "react-scroll";
import { useDarkMode } from "../context/DarkModeContext";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  function toggleCloseDrawer() {
    setOpen(!isOpen);
  }

  useEffect(() => {
    if (window.innerWidth < 767) {
      if (isOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  }, [isOpen]);

  return (
    <div className="fixed mb-20 w-full z-50">
      {" "}
      {/* Increased z-index here */}
      <div
        className={` flex justify-between items-center w-full ${isOpen ? "backdrop-blur-sm " : "bg-white"} ${isDarkMode ? "bg-transparent" : "bg-white"} dark:bg-slate-800 py-2`}
      >
        <div className="md:hidden p-2 px-4">
          <Hamburger
            className="relative z-30"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>

        <button
          className="mx-5 sm:absolute md:top-9   sm:p-2 lg:mr-20 sm:z-40 sm:right-0 w-fit sm:dark:bg-white sm:bg-slate-800  sm:rounded-full"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <MdDarkMode className="text-3xl md:text-2xl sm:dark:text-black sm:text-white" />
          ) : (
            <TfiShine className="text-3xl md:text-2xl sm:dark:text-black sm:text-white" />
          )}
        </button>
      </div>
      <nav
        className={`flex ${isOpen ? "relative top-0 left-0 w-full -z-10" : "relative z-10"}`}
      >
        <ul
          className={`backdrop-blur-sm h-screen md:h-fit md:justify-center bg-white/30 items-center text-black w-full md:w-fit md:rounded-full ${
            isOpen ? "flex" : "hidden"
          } absolute md:static flex-col justify-start   md:flex-row md:flex gap-16 md:gap-16 font-bold px-6 py-16 dark:text-white text-black text-xl sm:text-lg md:py-4  md:mx-auto md:my-4`}
        >
          <li className="w-full text-center">
            <Link
              to="about"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#faad1b]"
              onClick={toggleCloseDrawer}
            >
              About
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="skills"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#faad1b]"
              onClick={toggleCloseDrawer}
            >
              Skills
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="experiences"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#faad1b]"
              onClick={toggleCloseDrawer}
            >
              Experiences
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="projects"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#faad1b]"
              onClick={toggleCloseDrawer}
            >
              Projects
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#faad1b]"
              onClick={toggleCloseDrawer}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
