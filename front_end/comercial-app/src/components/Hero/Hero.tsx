import styles from "./Hero.module.css";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";


export default function Hero(){
    return (
        <div className="flex flex-col justify-center">
          <div className="flex xl:flex-row flex-col-reverse flex-wrap-reverse md:justify-between justify-center content-center">
            <div className="flex flex-col justify-center items-center content-center max-w-[600px] mr-0 xl:mr-20">
              <h2 className="hidden xl:text-5xl text-3xl sm:w-full w-[80%] xl:inline  justify-center  text-[#2d2e32] pb-4">
                Hola! &#128075;
              </h2>
              <h1 className=" hidden xl:inline xl:text-6xl text-4xl sm:w-full text-center xl:text-start w-[80%] font-bold text-[#2d2e32] pb-4 xl:mb-0 mb-3">
                Desarrollemos tu próxima página web.
              </h1>
              <h1 className=" xl:hidden text-4xl text-center  w-[80%] font-bold text-stone-700 pb-4 xl:mb-0 mb-3">
                Desarrollemos tu próxima página web! &#128075;
              </h1>

              <h2 className=" xl:text-xl text-xl sm:w-auto w-[80%] xl:inline flex xl:text-start text-center xl:px-0 px-11 text-slate-600 max-w-4xl  min-w-0 overflow-hidden">
                Soy Manuel Benitez, un programador web full-stack basado en
                Córdoba, Argentina. 📍
              </h2>
            </div>
            <div className={styles.img}></div>
          </div>
          <div className="flex flex-row xl:justify-start justify-center xl:-mt-3 mt-3 xl:mb-4 mb-7 ">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ManuBeni"
              className="text-slate-700 xl:px-0 xl:pr-3 px-3"
            >
              <AiFillGithub size={40} />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/manuel--benitez/"
              className="text-slate-700 xl:px-0 xl:pr-3 px-3"
            >
              <AiOutlineLinkedin size={40} />
            </a>
          </div>
          <div className="flex flex-row flex-wrap xl:justify-start justify-center xl:w-[100%] w-[99.9%] gap-x-6 mt-6">
            <p className="text-slate-700 md:pr-0 pb-6 xl:text-xl text-xl underline xl:no-underline underline-offset-8 xl:mt-1">
              Stack Tecnológico
            </p>
            <p className="text-black hidden xl:inline xl:mt-1 text-xl">|</p>
            <ul className="flex flex-row flex-wrap justify-center max-w-[80%] ">
              <li>
                <div
                  className="mx-5 xl:mt-0 mt-4  bg-slate-50 shadow-xl rounded-full "
                  title="HTML5"
                >
                  <img className=" w-12 p-2" src="icons/react.svg" />
                </div>
              </li>
              <li>
                <div
                  className="mx-5 xl:mt-0 mt-4 bg-slate-50 shadow-xl rounded-full "
                  title="CSS3"
                >
                  <img
                    className=" w-12 p-2"
                    src="icons/css3.9cecabbf6ce67609c48bc4f280a11002.svg"
                  />
                </div>
              </li>
              <li>
                <div
                  className="mx-5 xl:mt-0 mt-4 bg-slate-50  shadow-xl rounded-full "
                  title="JavaScript"
                >
                  <img
                    className=" w-12 p-2"
                    src="icons/javascript.de4c2594613e34b15666206bbede7327.svg"
                  />
                </div>
              </li>
              <li>
                <div
                  className="mx-5 xl:mt-0 mt-4 bg-slate-50  shadow-xl rounded-full "
                  title="React"
                >
                  <img
                    className=" w-12 p-2"
                    src="icons/react.afac9c43724070bf6674f2692b7356a9.svg"
                  />
                </div>
              </li>
              <li>
                <div
                  className="mx-5 xl:mt-0 mt-4 bg-slate-50  shadow-xl rounded-full "
                  title="Sass"
                >
                  <img
                    className=" w-12 p-2"
                    src="icons/scss.67cd0525916c4cdea4eb3abd8ae11137.svg"
                  />
                </div>
              </li>
              <li>
                <div
                  className="mx-5 xl:mt-0 mt-4 bg-slate-50  shadow-xl rounded-full pt-1.5  pb-1"
                  title="Tailwind"
                >
                  <img
                    className=" w-12 p-2"
                    src="icons/tailwind.79614a5f61617ba49a0891494521226b.svg"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
    )
}