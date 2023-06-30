export default function About() {
  return (
    <div className="flex flex-col justify-center xl:flex-row w-screen h-screen max-h-[1000px]">
      <div className="flex justify-center self-center relative h-[300px]">
        <img
          className="h-[300px] max-w-[90%] rounded-xl  self-center mx-10"
          src="src/assets/about-img.62b47e7f183d4b4e9feb.webp"
          alt="loading..."
        />
        <img
          src="src/assets/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
          className="absolute xl:inline-flex w-[200px] bg-slate-50 rounded-full left-[0] top-[150px] animate-[spin_8s_linear_infinite] hidden"
          loading="lazy"
        ></img>
        <img
          src="src/assets/working-emoji.c5325f52b5be329995a5.png"
          className="absolute xl:inline-flex w-[100px] bg-slate-50 rounded-xl left-[50px] top-[195px] hidden"
        ></img>
      </div>
      <div
        id="text-side"
        className="xl:max-w-[40%] max-w-[100%] xl:text-start text-center self-center px-10 xl:mt-0 mt-10 gap-x-20"
      >
        <h2 className="text-blue-600 text-xl font-bold lg:pb-0 pb-5">
          Sobre mi
        </h2>
        <h1 className="text-black text-2xl max-w-[100%] font-bold pb-3 justify-center self-center">
          Un programador dedicado con base en Argentina. 📍
        </h1>
        <p className="text-slate-500 text-md xl:pr-3 xl:pl-0 sm:px-10 overflow-hidden">
          Como Programador Web Junior, tengo un amplio arsenal de conocimientos
          en HTML, CSS, Javascript, React, Node, PostgresSQL, Express, Redux,
          MaterialUI, ChakraUI, Tailwind y Figma. Siendo un apasionado de la
          computación, también tengo conocimientos en seguridad y SEO.<br></br>
          Me destaco en diseñar y mantener páginas web con diseños adaptables
          que brindan una experiencia de usuario placentera a través de código
          optimizado y limpio, utilizazndo las últimas tecnologias de
          desarrollo. También me apasiona tomar proyectos en grupo brindando
          dinamismo y colaboración para desarrollar aplicaciónes web
          sobresalientes.
        </p>
      </div>
    </div>
  );
}
