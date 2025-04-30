
"use client";

import Image from "next/image";
import man from "../public/image/man.jpg";
import man3 from "../public/image/man3.jpg";
import man4 from "../public/image/man4.jpg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



export default function HomePage(){
    return(
      <>
     
        <div id="home" className="flex flex-col md:flex-row items-center justify-center w-full md:py-24 px-4 py-8 gap-8">
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <Image
          src={man}
          className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-full"
          alt="man profile"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center text-center gap-2 mt-6 md:mt-0">
        <h1 className="text-sm md:text-base font-semibold text-gray-600">
          Hello, I'm
        </h1>
        <h1 className="text-2xl md:text-4xl font-semibold">
          Kingshuk Hajong
        </h1>
        <h1 className="text-xl md:text-3xl font-semibold text-gray-700">
          FullStack Developer
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button className="border font-semibold py-2 px-4 rounded-3xl hover:bg-gray-800 hover:text-white transition-colors duration-300">
            Download CV
          </button>
          <button className="border font-semibold py-2 px-4 rounded-3xl bg-gray-700 hover:bg-gray-900 text-white">
            Contact Info
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 justify-center text-3xl text-gray-700">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SyntaxTerror456"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
    </>
    )
}