import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"about me."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
                        <AnimatedBody text={<>
                            Persuing <span className="font-bold text-yellow-400">B.Tech - Information Technology</span> at <span className="font-bold">Maharaja Agrasen Institute of Technology, GGSIPU</span>. Passionate <span className="font-bold underline decoration-blue-400 underline-offset-2">Full Stack Developer</span> with expertise in <span className="font-bold">React.js</span>, <span className="font-bold">Node.js</span>, and <span className="font-bold">MongoDB</span> alongside exploring <span className="font-bold">AI/ML</span> technologies like <span className="font-bold">Generative AI</span>, <span className="font-bold">RAG</span> and <span className="font-bold">NLP</span>.
                        </>} />
                        
                        <AnimatedBody
                            delay={0.1}
                            text={<>
                                I thrive in collaborative environments as the <span className="font-bold text-green-400">Technical Head at Mindflare</span>, MAIT's official I.T. society. My passion for innovation has led to multiple <span className="font-bold underline decoration-purple-400 underline-offset-2">hackathon victories</span>, including <span className="font-bold">1st place at Hackaccino 3.0 - AIML</span> competing against 250+ teams. I've solved <span className="font-bold">400+ DSA problems</span> and am constantly seeking opportunities to expand my technical horizons.
                            </>}
                        />
                        
                        <AnimatedBody
                            delay={0.2}
                            text={<>
                                Currently <span className="font-bold text-red-400">seeking Summer 2025 internship opportunities</span> in software development. Previously, I interned at <span className="font-bold">Drizzy</span> as a Frontend Developer Intern, where I worked closely with the founder to implement interactive frontend and 3D models using React Fiber and Three.js. <span className="font-bold">Let's connect and build something amazing together!</span>. 
                            </>}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;