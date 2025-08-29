import { Section, Card, SkillsGrid, SkillItem, LibraryItem } from "./skill-styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"
import { FaReact, FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango, SiNextdotjs, SiNodedotjs, SiPostgresql, SiTypescript, SiStyledcomponents, SiAxios, SiReactrouter, SiJest, SiVitest, SiMui } from "react-icons/si";

const Skills = () => {
    const sectionRef = useRef();
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) {
            gsap.registerPlugin(ScrollTrigger);
            
            // Animação para os cards
            gsap.fromTo(cardsRef.current, 
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.8
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        end: "bottom 30%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, []);

    const skills = [
        { icon: <FaHtml5 />, name: "HTML", level: 90, color: "#E34F26" },
        { icon: <FaCss3 />, name: "CSS", level: 85, color: "#1572B6" },
        { icon: <IoLogoJavascript />, name: "JavaScript", level: 80, color: "#F7DF1E" },
        { icon: <FaReact />, name: "React", level: 85, color: "#61DAFB" },
        { icon: <SiTypescript />, name: "TypeScript", level: 75, color: "#3178C6" },
        { icon: <SiNodedotjs />, name: "Node.js", level: 70, color: "#339933" },
        { icon: <SiNextdotjs />, name: "Next.js", level: 80, color: "#000000" },
        { icon: <SiDjango />, name: "Django", level: 65, color: "#092E20" },
        { icon: <SiPostgresql />, name: "PostgreSQL", level: 70, color: "#336791" },
        { icon: <FaGithub />, name: "GitHub", level: 85, color: "#181717" }
    ];

    const libraries = [
        { icon: <SiStyledcomponents />, name: "Styled Components" },
        { icon: <SiAxios />, name: "Axios" },
        { icon: <SiReactrouter />, name: "React Router Dom" },
        { icon: <SiJest />, name: "Jest" },
        { icon: <SiVitest />, name: "Vitest" },
        { icon: <SiMui />, name: "Material-UI" }
    ];

    return (
        <Section ref={sectionRef} id="skills">
            <Card ref={el => cardsRef.current[0] = el}>
                <h2>{"<"}Sobre{"/>"}</h2>
                <div className="content">
                    <p>
                        Sou um desenvolvedor full-stack, cursando Análise e Desenvolvimento de Sistemas na Anhanguera. 
                        Minha experiência anterior como streamer aprimorou minhas habilidades de comunicação, 
                        que hoje aplico no universo do desenvolvimento. Tenho uma paixão por codificar, 
                        criar soluções inovadoras e estou sempre em busca de novos conhecimentos para contribuir 
                        em projetos desafiadores.
                    </p>
                </div>
            </Card>

            <Card ref={el => cardsRef.current[1] = el}>
                <h2>{"<"}Skills{"/>"}</h2>
                <SkillsGrid>
                    {skills.map((skill, index) => (
                        <SkillItem key={index} color={skill.color}>
                            <div className="skill-header">
                                <span className="icon">{skill.icon}</span>
                                <span className="name">{skill.name}</span>
                            </div>
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill" 
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <span className="level">{skill.level}%</span>
                        </SkillItem>
                    ))}
                </SkillsGrid>
            </Card>

            <Card ref={el => cardsRef.current[2] = el}>
                <h2>{"<"}Bibliotecas & Ferramentas{"/>"}</h2>
                <div className="libraries-grid">
                    {libraries.map((library, index) => (
                        <LibraryItem key={index}>
                            <span className="icon">{library.icon}</span>
                            <span className="name">{library.name}</span>
                        </LibraryItem>
                    ))}
                </div>
            </Card>
        </Section>
    )
}

export default Skills;


