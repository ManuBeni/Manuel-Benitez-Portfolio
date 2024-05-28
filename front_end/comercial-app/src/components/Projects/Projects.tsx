import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="scroll-smooth  h-fit py-20 w-screen bg-slate-100 flex justify-center items-center xl:pt-24"
      >
        <div className="flex flex-initial">
          <div className="flex flex-col justify-items-center w-[100vw] ">
            <div className=" px-10 text-left self-center  sm:pl-0 xl:w-[67%] xl:pl-10 mb-5  xs:mb-10 xl:mb-0">
              <h2 className="text-blue-600 text-xl font-bold mb-3 xl:mb-0">
                Proyectos
              </h2>
              <h1 className="text-[#2d2e32] text-2xl ">
                Cada proyecto es una pieza de desarrollo &#x1F9E9;
              </h1>
            </div>

            <div className="flex bg-slate-50 shadow-xl flex-column flex-wrap xl:m-10 2xl:mx-[300px] rounded-2xl mt-10 m-0 mb-10 justify-center items-center ">
              <div className="my-5 bg-no-repeat shrink-0 bg-center bg-contain bg-[url('../../projects/Screenshot_2023-06-30_01-59-46.png')] xl:w-[37vw] sm:w-[90%] w-[100%] h-[42vh] hover:bg-[url('https://user-images.githubusercontent.com/85205823/192325244-1e46ba81-e6da-4f26-b3f0-ff3fd068a8eb.gif')] rounded-2xl" />

              <div className="md:px-10  xl:basis-1/3">
                <h2 className="text-[#2d2e32] text-center font-bold text-xl xs:mt-2 sm:mt-5 mt-0">
                  Athens - E-commerce &#x1F6D2;
                </h2>
                <p className="text-slate-600 text-center mt-5 px-10 sm:px-10 md:px-20 xl:px-0">
                  Sitio comercial deportivo desarrollado como proyecto final de
                  Bootcamp con otras 7 personas. Incluye formularios controlados
                  de login con autentificación, contacto y checkout, carrito de
                  compras, filtros combinados controlados, panel de
                  administrador y checkout con MercadoPago. Completamente diseñado en Figma.
                </p>
                <div className="flex flex-row justify-evenly mt-5 mb-5">
                  <a
                    href="http://athens-theta.vercel.app/"
                    className="text-[#2d2e32] flex flex-row text-md"
                    target="_blank"
                  >
                    Live Demo <BiLinkExternal size={25} />
                  </a>
                  <a
                    href="https://github.com/mas2986/PG_Front.git"
                    className="text-[#2d2e32] flex flex-row text-md"
                    target="_blank"
                  >
                    Github Repo <AiFillGithub size={25} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex xl:flex-row flex-column  flex-wrap xl:m-10 m-0 justify-center items-center 2xl:mx-[300px] shadow-xl bg-slate-50 rounded-2xl ">
              <div className="bg-no-repeat my-5 shrink-0 xl:order-2 bg-center bg-contain bg-[url('../../projects/Screenshot_2023-06-30_07-33-24.png')] xl:w-[37vw] sm:w-[90%] w-[100%] h-[42vh] hover:bg-[url('../../projects/simplescreenrecorder-2-6uyah0kx_OUzpg5UW.gif')] rounded-2xl" />

              <div className="md:px-10  xl:basis-1/3">
                <h2 className="text-[#2d2e32] text-center font-bold text-xl xs:mt-2 sm:mt-5 mt-0">
                  Buscador de Razas de Perros &#128021;
                </h2>
                <p className="text-slate-600 text-center mt-5 px-10 sm:px-10 md:px-20 xl:px-0">
                  Buscador de razas de perros, conectado con una base de datos.
                  Incluye landing page, tarjetas de items, filtros combinados
                  controlados, creación, eliminación y edición de items en base
                  de datos,
                </p>
                <div className="flex flex-row justify-evenly mt-5 mb-5">
                  <a
                    href="https://github.com/ManuBeni/PI-Dogs"
                    className="text-[#2d2e32] flex flex-row text-md"
                    target="_blank"
                  >
                    Github Repo <AiFillGithub size={25} />
                  </a>
                </div>
              </div>
            </div>


            <div className="flex bg-slate-50 shadow-xl flex-column flex-wrap xl:m-10 2xl:mx-[300px] rounded-2xl mt-10 m-0 mb-10 justify-center items-center ">
              <div className="my-5 bg-no-repeat shrink-0 bg-center bg-contain bg-[url('../../projects/ElenaBakeryPhoto.png')] xl:w-[37vw] sm:w-[90%] w-[100%] h-[42vh] hover:bg-[url('../../projects/ElenaBakeryGIF.gif')] rounded-2xl" />

              <div className="md:px-10  xl:basis-1/3">
                <h2 className="text-[#2d2e32] text-center font-bold text-xl xs:mt-2 sm:mt-5 mt-0">
                  Elena's Bakery 🧁
                </h2>
                <p className="text-slate-600 text-center mt-5 px-10 sm:px-10 md:px-20 xl:px-0">
                  Web app diseñada con enfoque de diseño mobile first, con creador de tortas a pedido para emprendimiento. 
                  Incluye diseño propio en base a los requerimientos del cliente, paleta de color adecuada al rubro gastronómico, landing page con información sobre el emprendimiento, y links de contacto. 
                </p>
                <div className="flex flex-row justify-evenly mt-5 mb-5">
                  <a
                    href="https://elena-bakery.web.app/"
                    className="text-[#2d2e32] flex flex-row text-md"
                    target="_blank"
                  >
                    Live Demo <BiLinkExternal size={25} />
                  </a>
                  <a
                    href="https://github.com/ManuBeni/Eleonora_Bakery"
                    className="text-[#2d2e32] flex flex-row text-md"
                    target="_blank"
                  >
                    Github Repo <AiFillGithub size={25} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
