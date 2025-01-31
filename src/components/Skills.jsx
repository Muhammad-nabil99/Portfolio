/* eslint-disable react/prop-types */
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function Skills({ size, teckStacks = [], type = "md" }) {
  let svgSize = 0;
  let space = "";
  if (type === "sm") {
    size = `w-5 h-5`;
    svgSize = `1.25rem`;
    space = `3`;
  } else {
    size = `w-9 h-9`;
    svgSize = `2.20rem`;
    space = `5`;
  }

  return (
    <div className={`flex gap-${space} my-5 flex-wrap justify-center`}>
      {teckStacks.map((tech) => {
        {
          if (tech === "react")
            return (
              <div key={tech} className="flex items-center flex-col ">
                <div
                  className={`${
                    type === "sm"
                      ? `w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1 `
                      : ""
                  } `}
                >
                  <FaReact className={`${size} text-blue-400`} />
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  React Js
                </span>
              </div>
            );
        }
        {
          if (tech === "bootstrap")
            return (
              <div key={tech} className="flex items-center flex-col ">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <FaBootstrap className={`${size} text-violet-500`} />
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  Bootstrap
                </span>
              </div>
            );
        }
        {
          if (tech === "tailwind")
            return (
              <div key={tech} className="flex items-center flex-col ">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <RiTailwindCssFill className={`${size} text-blue-400`} />
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  Tailwind
                </span>
              </div>
            );
        }
        {
          if (tech === "git")
            return (
              <div key={tech} className="flex items-center flex-col ">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <FaGitAlt className={`${size} text-red-500`} />
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>Git</span>
              </div>
            );
        }
        {
          if (tech === "figma")
            return (
              <div key={tech} className="flex items-center flex-col ">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={svgSize}
                    height={svgSize}
                    viewBox="0 0 256 384"
                  >
                    <path
                      fill="#0ACF83"
                      d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"
                    />
                    <path
                      fill="#A259FF"
                      d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"
                    />
                    <path
                      fill="#F24E1E"
                      d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"
                    />
                    <path
                      fill="#FF7262"
                      d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"
                    />
                    <path
                      fill="#1ABCFE"
                      d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"
                    />
                  </svg>
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  Figma
                </span>
              </div>
            );
        }
        {
          if (tech === "firebase")
            return (
              <div key={tech} className="flex items-center flex-col ">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={svgSize}
                    height={svgSize}
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#ffa000"
                      d="M17.474 103.276L33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39l6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714z"
                    />
                    <path
                      fill="#f57c00"
                      d="M71.903 64.005L54.955 31.913l-37.481 71.363Z"
                    />
                    <path
                      fill="#ffca28"
                      d="M110.577 103.276L98.51 28.604a2.913 2.913 0 0 0-1.984-2.286a2.906 2.906 0 0 0-2.94.714l-76.112 76.243l42.115 23.618a8.728 8.728 0 0 0 8.51 0l42.478-23.618Z"
                    />
                    <path
                      fill="#fff"
                      fillOpacity=".2"
                      d="M98.51 28.604a2.913 2.913 0 0 0-1.984-2.286a2.906 2.906 0 0 0-2.94.713L78.479 42.178L66.6 19.562a2.91 2.91 0 0 0-5.15 0l-6.494 12.365L38.662 1.538A2.91 2.91 0 0 0 35.605.044a2.907 2.907 0 0 0-2.384 2.425L17.474 103.276h-.051l.05.058l.415.204l75.676-75.764a2.91 2.91 0 0 1 4.932 1.571l11.965 74.003l.116-.073zm-80.898 74.534L33.228 3.182A2.91 2.91 0 0 1 35.613.756a2.911 2.911 0 0 1 3.057 1.495l16.292 30.39l6.495-12.366a2.91 2.91 0 0 1 5.15 0L78.245 42.41L17.61 103.138Z"
                    />
                    <path
                      fill="#a52714"
                      d="M68.099 126.18a8.728 8.728 0 0 1-8.51 0l-42.015-23.55l-.102.647l42.115 23.61a8.728 8.728 0 0 0 8.51 0l42.48-23.61l-.11-.67l-42.37 23.575z"
                      opacity=".2"
                    />
                  </svg>
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  Firebase
                </span>
              </div>
            );
        }
        {
          if (tech === "supabase")
            return (
              <div key={tech} className="flex items-center flex-col">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={svgSize}
                    height={svgSize}
                    viewBox="0 0 128 128"
                  >
                    <defs>
                      <linearGradient
                        id="deviconSupabase0"
                        x1="53.974"
                        x2="94.163"
                        y1="54.974"
                        y2="71.829"
                        gradientTransform="translate(29.387 60.096) scale(1.1436)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#249361" />
                        <stop offset="1" stopColor="#3ecf8e" />
                      </linearGradient>
                      <linearGradient
                        id="deviconSupabase1"
                        x1="36.156"
                        x2="54.484"
                        y1="30.578"
                        y2="65.081"
                        gradientTransform="translate(29.387 60.096) scale(1.1436)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" />
                        <stop offset="1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#deviconSupabase0)"
                      d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
                      transform="translate(-27.722 -60.338)"
                    />
                    <path
                      fill="url(#deviconSupabase1)"
                      fillOpacity=".2"
                      d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z"
                      transform="translate(-27.722 -60.338)"
                    />
                    <path
                      fill="#3ecf8e"
                      d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z"
                    />
                  </svg>
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  Supabase
                </span>
              </div>
            );
        }
        {
          if (tech === "javascript")
            return (
              <div key={tech} className="flex items-center flex-col">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <IoLogoJavascript className={`${size} text-yellow-300`} />
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  Javascript
                </span>
              </div>
            );
        }
        {
          if (tech === "nodeJs")
            return (
              <div key={tech} className="flex items-center flex-col">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <FaNodeJs className={`${size} text-green-500`} />
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  NodeJs
                </span>
              </div>
            );
        }
        {
          if (tech === "redux")
            return (
              <div key={tech} className="flex items-center flex-col">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <SiRedux className={`${size} text-violet-500`} />
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  Redux
                </span>
              </div>
            );
        }
        {
          if (tech === "reactRouter")
            return (
              <div key={tech} className="flex items-center flex-col">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <SiReactrouter className={`${size} text-red-500`} />
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  React Router
                </span>
              </div>
            );
        }
        {
          if (tech === "reactQuery")
            return (
              <div key={tech} className="flex items-center flex-col">
                <div
                  className={`${
                    type === "sm"
                      ? "w-fit h-fit rounded-full bg-violet-200 dark:bg-slate-900 p-1"
                      : ""
                  } `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={svgSize}
                    height={svgSize}
                    viewBox="0 0 256 230"
                  >
                    <path
                      fill="#00435B"
                      d="m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527h61.802Zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034h89.296Zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506h72.616Zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151h37.617Z"
                    />
                    <path
                      fill="#002B3B"
                      d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082Z"
                    />
                    <path
                      fill="#FF4154"
                      d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687ZM78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618Zm124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295l.112.033ZM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459Zm108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013ZM77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59Z"
                    />
                    <path
                      fill="#FFD94C"
                      d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475Zm26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48h21.951Zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47Zm-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46h1.588Zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866Zm-46.509 5.732h10.32"
                    />
                  </svg>
                </div>
                <span className={`${type === "sm" ? "hidden" : ""}`}>
                  React Query
                </span>
              </div>
            );
        }
      })}
    </div>
  );
}
export default Skills;
