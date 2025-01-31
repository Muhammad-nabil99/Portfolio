import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex items-center flex-col bg-black text-white">
      <div className="my-2">
        <h2 className="font-bold my-2 capitalize text-center">Get in touch</h2>
        <div className="flex gap-4 justify-center">
          <a target="_blank" href="https://github.com/Muhammad-nabil99">
            <FaGithub className="w-6 h-6" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/muhammad-nabil-3960382b2/">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a target="_blank" href="https://www.instagram.com/muhammadnabil991025/">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
      <p className="font-bold my-5 text-center">
        Powered by <span className="text-[#faad1b]">Nabil</span> 2023
      </p>
    </div>
  );
}
export default Footer;
