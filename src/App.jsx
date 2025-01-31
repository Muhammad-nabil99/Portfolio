import React, { Suspense } from "react";
const Contact = React.lazy(() => import("./components/Contact"));
const Experience = React.lazy(() => import("./components/Experience"));
const Footer = React.lazy(() => import("./components/Footer"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Project = React.lazy(() => import("./components/Project"));
const Skills = React.lazy(() => import("./components/Skills"));
const AnimatedCursor = React.lazy(() => import("react-animated-cursor"));
const Element = React.lazy(() =>
  import("react-scroll").then((module) => ({ default: module.Element }))
);
const Link = React.lazy(() =>
  import("react-scroll").then((module) => ({ default: module.Link }))
);
import { DarkModeProvier } from "./context/DarkModeContext";
import Spinner from "./components/Spinner";
import isMobile from "./helpers/isDevice";


function App() {
  const isTouchDevice = isMobile();
  return (
    <Suspense fallback={<Spinner />}>
      <DarkModeProvier>
        {!isTouchDevice && <AnimatedCursor
          innerSize={30}
          outerSize={30}
          color="250,173,27"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            "select",
            "button",
            ".link",
          ]}
        />}
        <div className="font-poppins dark:bg-slate-800  dark:text-white">
          <header className="capitalize flex flex-col h-screen ">
            <Navbar />

            <div className="mt-32 font-semibold  md:text-5xl text-3xl text-center flex flex-col gap-20">
              <h1>
                Hey! i&apos;m <span className="text-[#faad1b]">Nabil</span> <span className="wave"> 👋</span>
              </h1>

              <p className=" px-2 leading-normal lg:w-3/4 m-auto">
                Crafting seamless digital experiences as a software engineer.
              </p>
              <p className="text-base font-semibold px-5">
                Let’s build something amazing together! ⚡{" "}
              </p>
            </div>
            <Link
              to="contact"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#faad1b] "
              className="text-xl font-bold m-auto  md:self-start p-2 bg-[#faad1b] w-fit rounded-md text-white my-5 mb-10"
            >
              Contact Me 📱
            </Link>
          </header>
          <Element name="about" className="p-5 bg-[#344c36] my-10 text-white">
            <h1 className="font-bold text-3xl my-10 sm:text-center ">
              About Me👨🏻‍💻
            </h1>
            <div className="flex gap-5 justify-center flex-col sm:flex-row  py-10 px-1">
              <img
                className="max-w-96 sm:w-1/2 h-56 object-cover rounded-md"
                src="./image/about-me.png"
                alt=""
              />
              <div className=" sm:w-1/2  md:w-1/3 flex  justify-start flex-col">
                <p className="w-full text-md">
                  Hi, I&apos;m Nabil, a{" "}
                  <span className="text-[#faad1b]"> Front-End Developer </span>
                  specializing in React and modern web technologies. I&apos;m
                  expanding into backend development to become a full-stack
                  developer. Passionate about creating seamless digital
                  experiences, I prioritize continuous learning and aim to build
                  impactful tech solutions.
                </p>

                {/* <button className=" text-xl font-bold m-auto  md:self-start p-2 bg-[#faad1b] w-fit rounded-md text-white my-5">
                Download CV
              </button> */}
              </div>
            </div>
          </Element>
          <Element name="skills" className="p-5">
            <h1 className="font-bold text-3xl my-10 sm:text-center">
              Skills✨
            </h1>
            <div className="w-3/4 mx-auto my-16 ">
              <Skills
                teckStacks={[
                  "react",
                  "bootstrap",
                  "tailwind",
                  "figma",
                  "supabase",
                  "firebase",
                  "nodeJs",
                  "reactQuery",
                  "reactRouter",
                  "git",
                  "javascript",
                  "redux",
                ]}
              />
            </div>
          </Element>
          <Element name="experiences" className="p-5">
            <h1 className="font-bold text-3xl my-10 sm:text-center ">
              Experience 🚀
            </h1>
            <Experience />
          </Element>
          <Element name="projects" className="p-5 mb-20">
            <h1 className="font-bold text-3xl my-10 sm:text-center ">
              Projects💻
            </h1>
            <Project />
          </Element>
          <Element name="contact" className="p-5">
            <h1 className="font-bold text-3xl my-10 sm:text-center  ">
              Contact
            </h1>
            <Contact />
          </Element>
          <footer>
            <Footer />
          </footer>
        </div>
      </DarkModeProvier>
    </Suspense>
  );
}
export default App;
