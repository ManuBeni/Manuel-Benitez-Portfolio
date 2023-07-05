import "@fontsource/poppins/700.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const navigation = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mi", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex m-0 p-2.5 z-1 px-10 w-full flex-row justify-between text-[#2d2e32] bg-slate-50 shadow-md fixed left-0 right-0 top-0 z-[40]  ">
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

      <button
        className="xl:hidden flex justify-center items-center"
        onClick={() => setMobileMenuOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>

      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>

            <button
              className="xl:hidden flex justify-center items-center relative text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-7 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-3 py-6">
                {navigation.map((item) =>
                  item.name === "Contacto" ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 flex justify-center bg-blue-500 hover:bg-blue-600 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-xl duration-500"
                      onClick={()=>{setMobileMenuOpen(false)}}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200 "
                      onClick={()=>{setMobileMenuOpen(false)}}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/*  */}
    </nav>
  );
};

export default Header;
