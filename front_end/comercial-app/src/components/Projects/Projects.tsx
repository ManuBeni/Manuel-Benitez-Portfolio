import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export default function Projectsa() {
  return (
    <>
      <div className="flex flex-initial">
        <div className="flex flex-col justify-items-center w-[100vw]">
          <div className=" items-start text-left self-center">
            <h2 className="text-blue-600 text-xl font-bold ">Proyectos</h2>
            <h1 className="text-black text-2xl ] ">
              Cada proyecto es una pieza de desarrollo &#x1F9E9;
            </h1>
          </div>

          <div className="flex xl:flex-row flex-column flex-wrap m-10 justify-center ">
            <div className="bg-no-repeat  bg-contain bg-[url('src/assets/projects/Screenshot_2023-06-30_01-59-46.png')] xl:w-[37vw] w-[100%] h-[42vh] hover:bg-[url('https://user-images.githubusercontent.com/85205823/192325244-1e46ba81-e6da-4f26-b3f0-ff3fd068a8eb.gif')] rounded-2xl" />

            <div className="md:px-10  px-0 basis-1/3">
              <h2 className="text-black text-center font-bold text-xl mt-5">
                Athens - E-commerce &#x1F6D2;
              </h2>
              <p className="text-slate-600 text-center mt-5">
                Sitio comercial deportivo desarrollado como proyecto final de
                Bootcamp con otras 7 personas. Incluye formularios controlados
                de login con autentificación, contacto y checkout, carrito de
                compras, filtros combinados controlados, panel de administrador
                y plataforma de pago linkeada con MercadoPago{" "}
              </p>
              <div className="flex flex-row justify-evenly mt-5">
                <a
                  href="http://athens-theta.vercel.app/"
                  className="text-black flex flex-row text-md"
                >
                  Live Demo <BiLinkExternal size={25} />
                </a>
                <a
                  href="https://github.com/mas2986/PG_Front.git"
                  className="text-black flex flex-row text-md"
                >
                  Github Repo <AiFillGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
