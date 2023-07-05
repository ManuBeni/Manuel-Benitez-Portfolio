import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import "@fontsource/poppins/700.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />

      <About />

      <Projects />

      <section id="contact">
        <Contact />
      </section>
      <footer className="bg-slate-600 flex justify-center h-[5rem] items-center">
        <div
          id="container"
          className="flex flex-row justify-between h-[2rem] w-[90%]"
        >
          <h1 className="text-slate-50 text-xs md:text-lg">
            Copyright © 2023. All rights are reserved
          </h1>
          <div className="flex flex-row items-center">
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
