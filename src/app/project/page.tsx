"use client";

import Image from "next/image";
import project1 from "../public/image/project-1.png";
import project2 from "../public/image/project-2.png";
import project3 from "../public/image/project-3.png";

export default function Project() {
    return (
        <div id="project" className="flex flex-col justify-center items-center py-8 px-4 md:px-8">
            <h1 className="text-sm md:text-base font-semibold text-gray-600">Browse My Recent</h1>
            <h1 className="text-[36px] md:text-[48px] font-mono text-black font-bold mb-10">Projects</h1>

            {/* Project grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {[
                    {
                        img: project1,
                        title: "Portfolio Website",
                        github: "https://github.com/yourusername/portfolio",
                        live: "https://yourportfolio.com",
                    },
                    {
                        img: project2,
                        title: "E-Commerce App",
                        github: "https://github.com/yourusername/ecommerce",
                        live: "https://yourecommerce.com",
                    },
                    {
                        img: project3,
                        title: "Blog CMS",
                        github: "https://github.com/yourusername/blogcms",
                        live: "https://yourblogcms.com",
                    },
                ].map(({ img, title, github, live }, index) => (
                    <div
                        key={index}
                        className="flex flex-col border border-gray-300 px-6 py-8 items-center rounded-3xl gap-4 bg-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <Image
                            src={img}
                            alt={title}
                            className="w-full h-64 md:h-94 object-cover rounded-2xl"
                        />
                        <h1 className="text-2xl font-semibold font-mono text-center">{title}</h1>
                        <div className="flex gap-3">
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-gray-600 px-10 py-2 rounded-3xl hover:bg-gray-900 hover:text-white transition"
                            >
                                Github
                            </a>
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-gray-600 px-6 py-2 rounded-3xl hover:bg-gray-900 hover:text-white transition"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
