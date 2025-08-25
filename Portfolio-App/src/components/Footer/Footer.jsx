import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#465697] text-white py-8 mt-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact</h1>
        <h3 className="text-md md:text-lg mb-4 font-normal opacity-90">
          Feel Free To Reach Out!
        </h3>
        <ul className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <li className="flex items-center gap-2">
            <MdOutlineEmail size={28} />
            <a href="mailto:myemail@gmail.com" className="hover:underline">
              myemail@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedinIn size={28} />
            <a
              href="https://linkedin.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/username
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub size={28} />
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/username
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
