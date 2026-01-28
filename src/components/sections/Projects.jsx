import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
    <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20" 
    >  
        <RevealOnScroll>
         <div className="max-w-5xl mx-auto px-4" >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                {" "}
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.2]] transition">
                    <h3 className="text-xl font-bold mb-2" >Renew Tech</h3>
                    <p className="text-gray-400 mb-4" >
                        Sclable management and automated scaling
                        Restore old devices using refurbished parts to save money and reduce waste.
                    </p>
                    <div>
                        {["DRF", "Python", "Docker"].map((tech, key) => (

                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.1]] transition-all"
                        >
                            {tech}
                        </span>                       
                        ))}
                        <div>
                            <div className="flex justify-between items-center" >
                                <a href="https://github.com/kabirhiking/ReTech-Cycle" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 " 
                                >
                                    {" "}
                                    View Project ￫{" "}
                                </a>
                            </div>
                        </div>

                    </div>

                </div> */}

                 <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.2]] transition">
                    <h3 className="text-xl font-bold mb-2" > Sora </h3>
                    <p className="text-gray-400 mb-4" >
                        Bus Ticket Reservation System — A full-stack bus reservation system built with Django following Clean Architecture and a React front end. 
                        The project models real Bangladesh routes with dynamic boarding points and a smart trip-search feature, and includes an interactive seat-selection UI plus a complete booking workflow from selection through confirmation.
                    </p>
                    <div className="">
                        {["Django", "Python", "Using MVT"].map((tech, key) => (

                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.1]] transition-all"
                        >
                            {tech}
                        </span>                       
                        ))}
                        <div>
                            <div className="flex justify-between items-center" >
                                <a href="https://sitesoraride.netlify.app/" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 " 
                                >
                                    {" "}
                                    View Project ￫{" "}
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.2]] transition">
                    <h3 className="text-xl font-bold mb-2" > E-Shop </h3>
                    <p className="text-gray-400 mb-4" >
                        Built a modular RESTful API with FastAPI to manage users, products, carts, and orders using JWT
                        authentication.
                    </p>
                    <div className="">
                        {["FastAPI", "Python", "SQLAlchemy", "JWT authentication"].map((tech, key) => (

                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.1]] transition-all"
                        >
                            {tech}
                        </span>                       
                        ))}
                        <div>
                            <div className="flex justify-between items-center" >
                                <a href="https://ecommerce-api-seven-zeta.vercel.app/" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 " 
                                >
                                    {" "}
                                    View Project ￫{" "}
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

                
                {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.2]] transition">
                    <h3 className="text-xl font-bold mb-2" >AI Chat Log Summarizer </h3>
                    <p className="text-gray-400 mb-4" >
                        Implemented functionality to count total messages per speaker, extract top 5 keywords using frequency and
                        F-IDF, and generate summaries of single or multiple chat files.
                    </p>
                    <div className="">
                        {[ "Python", "AI", "CLI", "Panda"].map((tech, key) => (

                        <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba[59, 130, 246, 0.1]] transition-all"
                        >
                            {tech}
                        </span>                       
                        ))}
                        <div className="flex flex-wrap gap-2 mb-4" >
                            <div className="flex justify-between items-center" >
                                <a href="https://github.com/kabirhiking/chat_summarizer" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 " 
                                >
                                    {" "}
                                    View Project ￫{" "}
                                </a>
                            </div>
                        </div>

                    </div>

                </div> */}

               

            </div>

          </div> 
        </RevealOnScroll>
    </section>
  );
};