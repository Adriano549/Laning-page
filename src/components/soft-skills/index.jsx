import { Section, SoftSkillsGrid, SoftSkillItem } from "./soft-skills-styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"
import { 
    FaComments, 
    FaLightbulb, 
    FaClock, 
    FaUsers, 
    FaPuzzlePiece, 
    FaRocket,
    FaEye,
    FaHeart 
} from "react-icons/fa";

const SoftSkills = () => {
    const sectionRef = useRef();
    const skillsRef = useRef([]);

    useLayoutEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.fromTo(skillsRef.current, 
                {
                    y: 60,
                    opacity: 0,
                    rotateY: 30
                },
                {
                    y: 0,
                    opacity: 1,
                    rotateY: 0,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
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

    const softSkills = [
        { 
            icon: <FaComments />, 
            name: "Comunicação", 
            description: "Habilidade desenvolvida através da experiência como streamer",
            color: "#4FC3F7"
        },
        { 
            icon: <FaLightbulb />, 
            name: "Criatividade", 
            description: "Capacidade de encontrar soluções inovadoras para problemas complexos",
            color: "#FFB74D"
        },
        { 
            icon: <FaClock />, 
            name: "Gestão de Tempo", 
            description: "Organização eficiente de tarefas e cumprimento de prazos",
            color: "#81C784"
        },
        { 
            icon: <FaUsers />, 
            name: "Trabalho em Equipe", 
            description: "Colaboração efetiva e harmoniosa com diferentes perfis",
            color: "#F06292"
        },
        { 
            icon: <FaPuzzlePiece />, 
            name: "Resolução de Problemas", 
            description: "Análise crítica e desenvolvimento de soluções eficazes",
            color: "#9575CD"
        },
        { 
            icon: <FaRocket />, 
            name: "Proatividade", 
            description: "Iniciativa para buscar melhorias e assumir responsabilidades",
            color: "#FF8A65"
        },
        { 
            icon: <FaEye />, 
            name: "Atenção aos Detalhes", 
            description: "Precisão e cuidado na execução de tarefas e projetos",
            color: "#4DB6AC"
        },
        { 
            icon: <FaHeart />, 
            name: "Empatia", 
            description: "Compreensão das necessidades do usuário e da equipe",
            color: "#E57373"
        }
    ];

    return (
        <Section ref={sectionRef} id="soft-skills">
            <h2>{"<"}Soft Skills{"/>"}</h2>
            <SoftSkillsGrid>
                {softSkills.map((skill, index) => (
                    <SoftSkillItem 
                        key={skill.name} 
                        color={skill.color}
                        ref={el => skillsRef.current[index] = el}
                    >
                        <div className="icon-container">
                            <span className="icon">{skill.icon}</span>
                        </div>
                        <div className="content">
                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-description">{skill.description}</p>
                        </div>
                    </SoftSkillItem>
                ))}
            </SoftSkillsGrid>
        </Section>
    )
}

export default SoftSkills;