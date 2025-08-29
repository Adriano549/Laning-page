import { Section, SkillsGrid, SkillItem } from "./hard-skills-styled.jsx"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"
import { FaReact, FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango, SiNextdotjs, SiNodedotjs, SiPostgresql, SiTypescript } from "react-icons/si";

const HardSkills = () => {
    const sectionRef = useRef();
    const skillsRef = useRef([]);

    useLayoutEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.fromTo(skillsRef.current, 
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "back.out(1.4)",
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

    return (
        <Section ref={sectionRef} id="skills">
            <h2>{"<"}Skills Técnicas{"/>"}</h2>
            <SkillsGrid>
                {skills.map((skill, index) => (
                    <SkillItem 
                        key={skill.name} 
                        color={skill.color}
                        ref={el => skillsRef.current[index] = el}
                    >
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
        </Section>
    )
}

export default HardSkills;