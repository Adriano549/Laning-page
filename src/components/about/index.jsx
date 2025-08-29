import { Section, Card } from "./about-styled"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

const About = () => {
    const sectionRef = useRef();
    const cardRef = useRef();

    useLayoutEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.fromTo(cardRef.current, 
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
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

    return (
        <Section ref={sectionRef} id="sobre">
            <Card ref={cardRef}>
                <h2>{"<"}Sobre mim{"/>"}</h2>
                <div className="content">
                    <p>
                        Sou um desenvolvedor full-stack apaixonado por tecnologia, cursando Análise e Desenvolvimento 
                        de Sistemas na Anhanguera. Minha jornada no desenvolvimento começou com curiosidade e evoluiu 
                        para uma verdadeira paixão por criar soluções digitais inovadoras.
                    </p>
                    <p>
                        Minha experiência anterior como streamer desenvolveu habilidades valiosas de comunicação, 
                        adaptabilidade e trabalho sob pressão, que hoje aplico no universo do desenvolvimento. 
                        Essa vivência me ensinou a importância de se conectar com o público e explicar conceitos 
                        complexos de forma clara.
                    </p>
                    <p>
                        Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente, 
                        contribuindo com projetos que façam a diferença. Acredito que a tecnologia tem o poder 
                        de transformar vidas e estou empolgado para fazer parte dessa transformação.
                    </p>
                </div>
            </Card>
        </Section>
    )
}

export default About;