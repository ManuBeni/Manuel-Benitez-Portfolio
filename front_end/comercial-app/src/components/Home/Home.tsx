import Header from "../Header/Header"
import styles from "./Home.module.css" 
import "@fontsource/poppins/700.css"




const Home = ()=>{

    const images = import.meta.glob("../assets/icons/*")
    console.log(images)

    return(
        <>
            <Header/>
            <section id="home" className=" h-screen w-screen  bg-slate-100 flex justify-center items-center">
                <div className="flex flex-col">
                    <div className="flex lg:flex-row flex-col-reverse  flex-wrap-reverse justify-between items-center">
                        <div className="flex flex-col justify-center items-center content-center max-w-[600px] mr-5 " >
                            <h2 className=" lg:text-5xl text-3xl sm:w-full w-[80%]   text-stone-700 pb-4 ">
                                Hola! &#128075;
                            </h2>
                            <h1 className=" lg:text-6xl text-4xl sm:w-full w-[80%]  font-bold text-stone-700 pb-4 ">
                                Desarrollemos tu próxima página web.
                            </h1>
                            
                            <h2 className="flex text-xl sm:w-auto w-[80%]  text-slate-600 max-w-4xl  min-w-0 overflow-hidden">
                                Soy Manuel Benitez, un programador web full-stack basado en Córdoba, Argentina &#128204;
                            </h2>
                        </div>
                        <div className={styles.img}></div>
                    </div>
                    <div className="flex flex-row flex-wrap sm:justify-start justify-center content-center  sm:w-full w-[80%] gap-x-6 mt-6">
                        <p className="text-slate-700 self-center md:pr-4">Stack Tecnológico | </p>
                        <div className="bg-slate-50 shadow-xl rounded-full " title="HTML5">
                        <img className=" w-12 p-2" src="src/assets/icons/react.svg"/>
                        </div>
                        <div className="bg-slate-50 shadow-xl rounded-full " title="CSS3">
                        <img className=" w-12 p-2" src="src/assets/icons/css3.9cecabbf6ce67609c48bc4f280a11002.svg"/>
                        </div>
                        <div className="bg-slate-50  shadow-xl rounded-full " title="JavaScript">
                        <img className=" w-12 p-2" src="src/assets/icons/javascript.de4c2594613e34b15666206bbede7327.svg"/>
                        </div>
                        <div className="bg-slate-50  shadow-xl rounded-full " title="React">
                        <img className=" w-12 p-2" src="src/assets/icons/react.afac9c43724070bf6674f2692b7356a9.svg"/>
                        </div>
                        
                        <div className="bg-slate-50  shadow-xl rounded-full " title="Sass">
                        <img className=" w-12 p-2" src="src/assets/icons/scss.67cd0525916c4cdea4eb3abd8ae11137.svg"/>
                        </div>
                        <div className="bg-slate-50  shadow-xl rounded-full pt-1.5 " title="Tailwind">
                        <img className=" w-12 p-2" src="src/assets/icons/tailwind.79614a5f61617ba49a0891494521226b.svg"/>
                        </div>
                        
                    </div>
                </div>
                
            </section>
            <section id="about" className="scroll-smooth transition-all duration-50 h-screen w-screen bg-slate-50 flex justify-center items-center">

            </section>
        </>
    )

}

export default Home