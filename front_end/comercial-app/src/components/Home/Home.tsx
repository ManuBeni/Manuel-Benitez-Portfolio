import Header from "../Header/Header";

import "@fontsource/poppins/700.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects"

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
        className="scroll-smooth sm:min-h-screen min-h-[1200px] h-screen w-screen bg-slate-100 flex justify-center items-center"
      >
        <Projects/>
      </section>
    </>
  );
};

export default Home;
