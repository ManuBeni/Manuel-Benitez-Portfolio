import "@fontsource/poppins/700.css"

const navigation = [
    {name:"Inicio", href:"#home"},
    {name:"Sobre mi",href:"#about"},
    {name:"Proyectos",href:"#projects"},
    {name:"Contacto",href:"#contact"}
]
const Header = ()=>{
    return (
        <nav className=" m-0 p-2.5 px-10 w-full flex flex-row justify-between text-black bg-slate-50 shadow-md fixed left-0 right-0 top-0 z-[200] ">
            <a className="px-4 text-2xl flex items-center font-bold" href="#home">Manuel.dev</a>
            <ul className="flex flex-row">
                {navigation.map((item)=>(
                    <a key={item.name} href={item.href} className="hover:bg-slate-200 hover:rounded-full p-3 mx-2 ">{item.name}</a>
                ))}
                
        </ul>
        </nav>
        
    )
}

export default Header