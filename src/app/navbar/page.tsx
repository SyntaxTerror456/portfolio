


// "use client"

// import { IoReorderThree } from "react-icons/io5";
// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// export default function Navbar(){
//     const [menuOpen,setMenuOpen]=useState<boolean>(false);
//     const pathname=usePathname();
//     return(
//         <div className="w-full p-10 relative">
//             <div className="flex justify-around items-center">
//             <Link href="/">
//             <h1 className="text-3xl font-mono ">Kingshuk Hajong</h1>
//             </Link>
           

//             {/* Hamburger Icon (visible on mobile) */}

//             <div className="md:hidden">
//                 <button onClick={()=> setMenuOpen(!menuOpen)}>
//                     <IoReorderThree size={30}/>
//                 </button>
//             </div>

//              {/* Menu (visible on desktop) */}
//              <ul className="hidden md:flex gap-7">

//              <Link href="/" className="flex flex-col items-center gap-1 hover:opacity-70">
//                 <p className="text-2xl  ">Home</p>
//                 {
//                     pathname==="/"?<hr className="w-[70%] border-none h-[2px] bg-gray-500" />:""
//                 }
//                 </Link>

//                 <Link href="/about" className="flex flex-col items-center gap-1 hover:opacity-70">
//                 <p className="text-2xl  ">About</p>
//                 {
//                     pathname==="/about"?<hr className="w-[70%] border-none h-[2px] bg-gray-500" />:""
//                 }
//                 </Link>

//                 <Link href="/experience" className="flex flex-col items-center gap-1 hover:opacity-70">
//                 <p className="text-2xl ">Experience</p>
//                 {
//                     pathname==="/experience"?<hr className="w-[70%] border-none h-[2px] bg-gray-500" />:""
//                 }
//                 </Link>

//                 <Link href="/project" className="flex flex-col items-center gap-1 hover:opacity-70">
//                 <p className="text-2xl  ">Project</p>
//                 {
//                     pathname==="/project"?<hr className="w-[70%] border-none h-[2px] bg-gray-500" />:""
//                 }
//                 </Link>

//                 <Link href="/contact" className="flex flex-col items-center gap-1 hover:opacity-70">
//                 <p className="text-2xl ">Contact</p>
//                 {
//                     pathname==="/contact"?<hr className="w-[70%] border-none h-[2px] bg-gray-500" />:""
//                 }
//                 </Link>

//              </ul>

//               {/* Mobile Sidebar Menu */}

//               <div className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden`} >
//             <ul className="flex flex-col gap-6 p-6">
            
//             <Link href="/" onClick={() => setMenuOpen(false)} className="text-xl">Home</Link>

//             <Link href="/about" onClick={() => setMenuOpen(false)} className="text-xl">About</Link>
//             <Link href="/experience" onClick={() => setMenuOpen(false)} className="text-xl">Experience</Link>
//            <Link href="/project" onClick={() => setMenuOpen(false)} className="text-xl">Project</Link>
//            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-xl">Contact</Link>
//             </ul >

//               </div>

//             </div>
            
//         </div>
//     )
// }


"use client"

import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollLinks = [
        { label: "Home", id: "home" },
        { label: "About", id: "about" },
        { label: "Experience", id: "experience" },
        { label: "Project", id: "project" },
        { label: "Contact", id: "contact" },
    ];

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // close mobile menu
        }
    };

    return (
        <div className="w-full p-10 sticky bg-white z-50 ">
            <div className="flex justify-around items-center">
                <h1 className="text-3xl font-mono cursor-pointer" onClick={() => scrollTo("home")}>
                    Kingshuk Hajong
                </h1>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <IoReorderThree size={30} />
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-7">
                    {scrollLinks.map(link => (
                        <li
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="cursor-pointer text-2xl hover:opacity-70 flex flex-col items-center"
                        >
                            {link.label}
                        </li>
                    ))}
                </ul>

                {/* Mobile Sidebar Menu */}
                <div className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                    <ul className="flex flex-col gap-6 p-6">
                        {scrollLinks.map(link => (
                            <li
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className="text-xl cursor-pointer"
                            >
                                {link.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
