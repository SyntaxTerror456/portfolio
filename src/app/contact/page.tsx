

"use client";

import { MdEmail } from "react-icons/md";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [massage, setMassage] = useState<string>('');

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{

      const response = await axios.post("/api/email",{
        email, subject, massage
      })

      alert(response.data.message);
      console.log(email,subject,massage);
     
      setEmail('');
      setSubject('');
      setMassage('');

    }catch(error:any){
   
    if (error.response) {
      alert(error.response.data.message)
    } else {
      alert("An unknown error occurred")
    }
    }
    
    
  };

  return (
    <div id="contact" className="flex flex-col items-center py-12 px-4 md:px-12">
      <h1 className="text-sm md:text-base font-semibold text-gray-600">Get In Touch</h1>
      <h1 className="text-[32px] md:text-[48px] font-mono text-black font-bold mb-10">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl bg-gray-50 p-8 rounded-3xl shadow-xl">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Let's talk</h2>
          <p className="text-gray-600">
            I’m currently available to take on new projects. Feel free to send me a message about anything you want me to work on. I'll get back to you soon!
          </p>

          <div className="flex items-center gap-3 text-gray-700">
            <MdEmail size={20} />
            <span>kingshukbd.01@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaPhoneVolume size={20} />
            <span>+8801706656622</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaLocationDot size={20} />
            <span>Uttara, Dhaka</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleClick} className="flex flex-col gap-5">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
            <input value={email}
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
            <input value={subject}
              type="text"
              id="subject"
              required
              onChange={(e) => setSubject(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label htmlFor="massage" className="text-sm font-medium text-gray-700">Message</label>
            <textarea value={massage}
              id="massage"
              rows={5}
              required
              onChange={(e) => setMassage(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200 self-start"
          >
            Submit Now
          </button>
        </form>
        
      </div>
      <h1 className="md:text-2xl text-sm mt-18 text-center">Copyright © 2025 <br /> Developed By Kingshuk Hajong. <br /> All Rights Reserved.</h1>
    </div>
  );
}
