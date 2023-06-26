import "@fontsource/poppins/700.css";
import { useState } from "react";

const navigation = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mi", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="flex m-0 p-2.5 px-10 w-full flex-row justify-between text-black bg-slate-50 shadow-md fixed left-0 right-0 top-0 z-[200]  ">
      <a
        className="px-4 text-2xl flex items-center font-bold hover:text-3xl duration-500"
        href="#home"
      >
        Manuel.dev
      </a>
     
      <ul className=" hidden xl:flex xl:flex-row flex-col">
        {navigation.map(function (item) {
          if (item.name === "Contacto")
            return (
              <a
                key={item.name}
                href={item.href}
                className="bg-blue-500 hover:bg-blue-600 duration-500 text-white rounded p-3 xl:mx-2 my-1 hover:p-3.5 hover:text-lg flex justify-center xl:max-w-[100%] max-w-[20%]"
              >
                {item.name}
              </a>
            );
          return (
            <a
              key={item.name}
              href={item.href}
              className="hover:bg-slate-200 duration-500 hover:rounded-full p-3 xl:mx-2 my-1 flex justify-center xl:max-w-[100%] max-w-[20%]"
            >
              {item.name}
            </a>
          );
        })}
      </ul>
      <button className="xl:hidden flex justify-center items-center" onClick={()=>setMobileMenuOpen(true)}>X</button>
    </nav>
  );
};

export default Header;
