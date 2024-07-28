import{Section, Text } from "./skill-styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react"
import { FaReact , FaHtml5 , FaCss3, FaGithub  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
const Skills = () => {
    
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to("div", {
            y:0,
            opacity:1,
            scrollTrigger:{
                trigger:"#info",                
                start:"top 800px",
                end:"bottom 350px",
                scrub:true
                
            }
        })
    },[])
    
    return (
        <Section id="info">            
            <div>                 
                <h2>{"<"}Sobre{"/>"}</h2>
                <Text>
                <p>Sou um desenvolvedor front-end júnior com conhecimento em HTML, CSS, JavaScript, React e TypeScript. Antes de me dedicar ao desenvolvimento web, fui streamer, o que aprimorou minhas habilidades de comunicação. Desde março de 2024, venho estudando intensamente programação front-end e tenho descoberto uma paixão por codificar e criar soluções inovadoras. Estou empolgado para continuar aprendendo e contribuir com projetos desafiadores.

</p>
                </Text>
            </div>
            <div>
                <h2>{"<"}Skills{"/>"}</h2>
                <Text>
                <span><FaHtml5 /> HTML</span>
                <span><FaCss3 /> CSS</span>
                <span><IoLogoJavascript /> JavaScript</span>
                <span><FaReact /> React</span>
                <span><FaGithub /> GitHub</span>
                <span><SiTypescript /> TypeScript</span>
                </Text>
            </div>
            <div>
                <h2>{"<"}Bibliotecas React{"/>"}</h2>
                <Text>
                <p>Styled Components</p>
                <p>Axios</p>
                <p>React Router Dom</p>
                </Text>
            </div>
        </Section>
    )
}

export default Skills;




