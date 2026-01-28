import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="bg-gray-900 rounded-xl text-gray-300 py-6 mt-10">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Find me Online
        </h2>

        <div className="flex space-x-4 mt-4 md:mt-0 text-center justify-center mb-6">
          <a
            href="https://www.facebook.com/kabirhiking/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 text-xl"
          >
            <FaFacebook />
          </a>

          <a
            href="https://x.com/Kabir_TRT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 text-xl"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.instagram.com/raihankabir716/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 text-xl"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/kabirhiking"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 text-xl"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-center">&copy; {new Date().getFullYear()} All rights reserved. Made by RK</p>
        {/* <p className="text-center">Contact: [email protected]</p> */}
      </div>
    </footer>
  );
};

export { Footer };