import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
export default function Contact() {
  return (
    <>
      <div className="contact sm:h-[400px] h-[600px] bg-slate-50 flex   justify-center py-[5rem] ">
        <div id="container" className="  w-[60%] h-[60%] ">
          <h2 className="text-blue-600 text-xl font-bold mb-3 xl:mb-0">
            Contacto
          </h2>
          <h1 className="text-[#2d2e32] text-2xl ">
            Contactame por cualquier consulta! 👇
          </h1>

          <div
            id="contact-icons"
            className="xl:mt-16 mt-5 flex flex-row items-center md:justify-between justify-center flex-wrap"
          >
            <div className="flex sm:flex-row pt-7 flex-col justify-center items-center content-center text-center  flex-wrap">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3992803,-64.2766136,12z/data=!3m1!4b1!4m6!3m5!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761!16zL20vMDFrMDNy?entry=ttu"
                className="bg-white pt-2 w-[60px] h-[60px] rounded-full flex justify-center shadow-2xl text-blue-600"
              >
                <FaMapLocationDot size={40} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3992803,-64.2766136,12z/data=!3m1!4b1!4m6!3m5!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761!16zL20vMDFrMDNy?entry=ttu"
                className="text-[#2d2e32] xl:pt-0 sm:pt-5 sm:pl-5 pt-2 text-xl hover:text-blue-600 transition-all duration-500"
              >
                Córdoba, Argentina
              </a>
            </div>
            <div className="flex sm:flex-row flex-col pt-7 items-center justify-center content-center text-center ">
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:manubeni0498@gmail.com"
                className="bg-white pt-2.5 w-[60px] h-[60px] rounded-full flex justify-center shadow-2xl text-blue-600"
              >
                <IoIosMailUnread size={40} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:manubeni0498@gmail.com"
                className="text-[#2d2e32] xl:pt-0 sm:pt-4 sm:pl-5 pt-2 sm:text-xl text-sm flex flex-row  hover:text-blue-600 transition-all duration-500"
              >
                manubeni0498@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
