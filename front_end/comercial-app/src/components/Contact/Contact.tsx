import { FaMapLocationDot } from "react-icons/fa6"
import { IoIosMailUnread,IoLogoWhatsapp } from "react-icons/io"

export default function Contact() {
  return (
    <>
      <div className="contact sm:h-[500px] xl:h-[400px] h-[700px] bg-slate-50 flex   justify-center py-[5rem] ">
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
            <div className="flex md:flex-row pt-7 flex-col justify-center items-center content-center text-center  flex-wrap">
              <a
              title="Ver en Maps"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3992803,-64.2766136,12z/data=!3m1!4b1!4m6!3m5!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761!16zL20vMDFrMDNy?entry=ttu"
                className="bg-white pt-2 w-[60px] h-[60px] rounded-full flex justify-center shadow-2xl text-blue-600"
              >
                <FaMapLocationDot size={40} />
              </a>
              <a
              title="Ver en Maps"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3992803,-64.2766136,12z/data=!3m1!4b1!4m6!3m5!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761!16zL20vMDFrMDNy?entry=ttu"
                className="text-[#2d2e32] xl:pt-0 sm:pt-5 sm:pl-3 pt-2 text-xl hover:text-blue-600 transition-all duration-500"
              >
                Córdoba, Argentina
              </a>
            </div>
            <div className="flex md:flex-row pt-7 flex-col justify-center items-center content-center text-center  flex-wrap">
              <a
              title="Enviar un WhatsApp"
                target="_blank"
                rel="noreferrer"
                href="http://wa.me/5493644126137?text=Hola,%20Quiero%20consultar%20por%20un%20dise%C3%B1o%20web!%20"
                className="bg-white pt-2 w-[60px] h-[60px] rounded-full flex justify-center shadow-2xl text-blue-600"
              >
                <IoLogoWhatsapp size={40} />
              </a>
              <a
              title="Enviar un WhatsApp"
                target="_blank"
                rel="noreferrer"
                href="http://wa.me/5493644126137?text=Hola,%20Quiero%20consultar%20por%20un%20dise%C3%B1o%20web!%20"
                className="text-[#2d2e32] xl:pt-0 sm:pt-3 sm:pl-3 pt-2 text-lg hover:text-blue-600 transition-all duration-500"
              >
                +54 9 3644-126137
              </a>
            </div>
            <div className="flex md:flex-row flex-col pt-7 items-center justify-center content-center text-center ">
              <a
              title="Enviar un mail"
                target="_blank"
                rel="noreferrer"
                href="mailto:manubeni0498@gmail.com"
                className="bg-white pt-2.5 w-[60px] h-[60px] rounded-full flex justify-center shadow-2xl text-blue-600"
              >
                <IoIosMailUnread size={40} />
              </a>
              <a
              title="Enviar un mail"
                target="_blank"
                rel="noreferrer"
                href="mailto:manubeni0498@gmail.com"
                className="text-[#2d2e32] xl:pt-0 sm:pt-4 sm:pl-3 pt-2 sm:text-xl text-sm flex flex-row  hover:text-blue-600 transition-all duration-500"
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
