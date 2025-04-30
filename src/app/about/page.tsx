


"use client"

import Image from "next/image"
import man2 from "../public/image/man2.jpg"
import { FaAward } from "react-icons/fa6"
import { IoSchool } from "react-icons/io5"


export default function About() {
    return (
        <div id="about" className="flex flex-col items-center px-4 md:px-10 pb-24 max-w-screen-xl mx-auto">
            <h1 className="text-[16px] md:text-[18px] text-gray-700">Get To Know More</h1>
            <h1 className="text-[36px] md:text-[48px] text-black font-mono font-bold mb-6">About Me</h1>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full">
                <Image
                    src={man2}
                    className="w-full max-w-[300px] md:max-w-[400px] rounded-3xl object-cover"
                    alt="Profile picture"
                />

                <div className="flex flex-col items-center lg:items-start mt-6 lg:mt-14 w-full max-w-2xl">
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 w-full">
                        <div className="border border-gray-300 flex-1 flex flex-col items-center py-6 px-6 rounded-3xl">
                            <FaAward size={30} className="text-black" />
                            <h1 className="text-lg md:text-xl font-semibold text-black mt-2">Experience</h1>
                            <p className="text-sm md:text-base text-gray-600 font-medium mt-1">2+ years</p>
                            <p className="text-sm md:text-base text-gray-600 font-medium">FullStack Developer</p>
                        </div>

                        <div className="border border-gray-300 flex-1 flex flex-col items-center py-6 px-6 rounded-3xl">
                            <IoSchool size={30} className="text-black" />
                            <h1 className="text-lg md:text-xl font-semibold text-black mt-2">Education</h1>
                            <p className="text-sm md:text-base text-gray-600 font-medium mt-1">HSC from NDC</p>
                            <p className="text-sm md:text-base text-gray-600 font-medium">B.Sc. in CSE</p>
                        </div>
                    </div>

                    <p className="mt-6 text-sm md:text-base text-gray-600 font-medium text-center lg:text-left leading-relaxed px-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, consectetur repellat,
                        doloremque ipsa sequi possimus tenetur laudantium debitis dolorum pariatur expedita
                        placeat nostrum error omnis. Fugiat possimus magni accusantium, iste quae tempora
                        necessitatibus, ipsa rerum, itaque velit quia nostrum? Dolores quo et laborum cupiditate
                        cum. Ipsa assumenda est excepturi, dolorem debitis aperiam molestias aut, ullam, sit cum
                        modi neque ut.
                    </p>
                </div>
            </div>
        </div>
    )
}
