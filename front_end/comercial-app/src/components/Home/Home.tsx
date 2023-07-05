import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import "@fontsource/poppins/700.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects"
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Home = () => {

  return (
    <>
      <Header />
      <section
        id="home"
        className="overflow-hidden min-h-[1200px] md:min-h-[1000px] xl:min-h-screen h-screen w-scren bg-slate-100 flex justify-center items-center xl:mt-10"
      >
        <Hero/>
      </section>
      <section
        id="about"
        className="scroll-smooth sm:min-h-screen min-h-[1150px] h-screen w-screen bg-slate-50 flex justify-center items-center"
      >
        <About/>
      </section>
      <section
        id="projects"
        className="scroll-smooth  xl:min-h-[1200px] lg:min-h-[1400px] md:min-h-[1450px] sm:min-h-[1500px] xs:min-h-[1600px] min-h-[1900px] w-screen bg-slate-100 flex justify-center items-center"
      >
        <Projects/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <footer className="bg-slate-600 flex justify-center h-[4rem] pt-5">
        <div id="container" className="flex flex-row justify-between h-[2rem] w-[90%]">
          <h1 className="text-slate-50"> Copyright © 2023. All rights are reserved</h1>
          <div className="flex flex-row">
          <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ManuBeni"
              className="text-slate-50 pr-5"
            >
              <AiFillGithub size={25} />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/manuel--benitez/"
              className="text-slate-50 "
            >
              <AiOutlineLinkedin size={25} />
            </a>
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Home;
