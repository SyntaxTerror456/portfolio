

// "use client";


// import About from "./about/page";
// import Experience from "./experience/page";
// import Project from "./project/page";
// import Contact from "./contact/page";
// import HomePage from "./homePage/page";
// import Navbar from "./navbar/page";


// export default function Home() {
//   return (
//     <>
//     <Navbar/>
//     <HomePage/>
//      <About/>
//      <Experience/>
//      <Project/>
//      <Contact/>
//     </>
    
//   );
// }

"use client"

import About from "./about/page";
import Experience from "./experience/page";
import Project from "./project/page";
import Contact from "./contact/page";
import HomePage from "./homePage/page";



export default function Home() {
  
  return (
    <>

      {/* <Navbar /> */}
      
      <section id="home"><HomePage /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="project"><Project /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
