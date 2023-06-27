import Header from "../Header/Header";

import "@fontsource/poppins/700.css";
import Hero from "../Hero/Hero";
import About from "../About/About";

const Home = () => {
  const images = import.meta.glob("../assets/icons/*");
  console.log(images);

  return (
    <>
      <Header />
      <section
        id="home"
        className="overflow-hidden min-h-[1100px] xl:min-h-0 h-screen w-scren bg-slate-100 flex justify-center items-center xl:mt-10"
      >
        <Hero/>
      </section>
      <section
        id="about"
        className="scroll-smooth sm:min-h-screen min-h-[1300px] h-screen w-screen bg-slate-50 flex justify-center items-center"
      >
        <About/>
      </section>
      <section
        id="projects"
        className="scroll-smooth sm:min-h-screen min-h-[1300px] h-screen w-screen bg-slate-100 flex justify-center items-center"
      >
        
      </section>
    </>
  );
};

export default Home;
