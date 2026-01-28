
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative" 
        >
          <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent loading-right">
                    Hi, I'am Kabir 
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-justify" >
                    I'm a web developer who loves crafting clean, scalable web applications. 
                    I enjoy taking on new tasks and learning about the complexities of software development. 

                    {/* Hi, I’m Raihan Kabir, a freelance software engineer specializing in Django and FastAPI development. I build secure, scalable, and maintainable web applications and RESTful APIs using Python, with experience across backend architecture, authentication systems, database design, and performance optimization. 
                    I’ve worked on full-stack and backend-focused projects, collaborating in Agile environments and delivering clean, reliable solutions. As a freelancer, I enjoy working closely with clients to turn ideas into functional products, prioritizing clear communication, quality code, and continuous learning.
                      */}
                </p>
                <div className="flex justify-center space-x-4" >
                    <a 
                        href="#projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                        hover:shadow-[0_015x_rgba(59, 130, 246, 0.4)]"
                    
                    >
                        View Projects
                    </a>

                    <a 
                        href="#contact"
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_015x_rgba(59, 130, 246, 0.2)] hover: bg-blue-500/10 "
                    
                    >
                        Contact Me
                    </a>

                </div>


            </div>
         </RevealOnScroll>
        </section>
    );
};