


"use client"
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function Experience() {
    const frontendSkills = [
        { skill: "Html", level: "Experienced" },
        { skill: "CSS", level: "Experienced" },
        { skill: "Javascript", level: "Experienced" },
        { skill: "Data Structure", level: "Basic" },
        { skill: "Programming C", level: "Intermediate" },
        { skill: "Programming C++", level: "Intermediate" },
        { skill: "Programming Java", level: "Intermediate" },
        { skill: "Programming Python", level: "Intermediate" }
    ];

    const backendSkills = [
        { skill: "React", level: "Intermediate" },
        { skill: "Tailwind Css", level: "Experienced" },
        { skill: "Mongodb", level: "Experienced" },
        { skill: "My Sql", level: "Experienced" },
        { skill: "Node Js", level: "Experienced" },
        { skill: "Express Js", level: "Experienced" },
        { skill: "Next Js", level: "Intermediate" },
        { skill: "Git & Github", level: "Intermediate" },
    ];

    return (
        <div id="experience" className="flex flex-col items-center px-4 md:px-8 py-10">
            <h2 className="text-[16px] md:text-[18px] text-gray-700">Explore My</h2>
            <h1 className="text-[36px] md:text-[48px] font-mono text-black font-bold mb-10">Experience</h1>
            
            <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
                {/* Card 1 */}
                <div className="border border-gray-300 shadow-xl py-7 px-8 md:px-16 rounded-3xl flex-1">
                    <h2 className="text-center text-2xl font-semibold mb-9 text-gray-600">FullStack Development</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {frontendSkills.map(({ skill, level }) => (
                            <div key={skill} className="flex flex-col">
                                <div className="flex items-center gap-3">
                                    <IoMdCheckmarkCircle size={24} className="text-green-600" />
                                    <p className="text-lg font-semibold">{skill}</p>
                                </div>
                                <p className="text-sm text-gray-500 ml-7">{level}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card 2 */}
                <div className="border border-gray-300 shadow-xl py-7 px-8 md:px-16 rounded-3xl flex-1">
                    <h2 className="text-center text-2xl font-semibold mb-9 text-gray-600">Backend & Tools</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {backendSkills.map(({ skill, level }) => (
                            <div key={skill} className="flex flex-col">
                                <div className="flex items-center gap-3">
                                    <IoMdCheckmarkCircle size={24} className="text-green-600" />
                                    <p className="text-lg font-semibold">{skill}</p>
                                </div>
                                <p className="text-sm text-gray-500 ml-7">{level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
