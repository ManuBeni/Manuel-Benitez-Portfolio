import Header from "../Header/Header"
import styles from "./Home.module.css" 
import "@fontsource/poppins/700.css"
const Home = ()=>{

    return(
        <>
            <Header/>
            <section id="home" className=" h-screen w-screen  bg-slate-100 flex justify-center items-center">
                <div className=" flex flex-col-reverse lg:flex-row flex-wrap-reverse justify-between items-center sm:mt-7 gap-y-4">
                    <div className="flex flex-col justify-center items-center content-center  max-w-[600px] " >

                        <h1 className=" text-6xl self-start justify-self-start font-bold text-stone-700 p-5">
                            Desarrollemos tu próxima página web! &#128075;
                        </h1>
                        
                        <h2 className="flex text-xl text-slate-600 max-w-4xl min-w-full ml-3">
                            Hola! Soy Manuel Benitez, un programador web full-stack basado en Córdoba, Argentina &#128204;
                        </h2>

                    </div>
                    <div className={styles.img}></div>
                </div>
            </section>
            <section id="about" className="scroll-smooth transition-all duration-300 h-screen w-screen bg-slate-50 flex justify-center items-center">

            </section>
        </>
    )

}

export default Home