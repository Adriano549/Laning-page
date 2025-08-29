import { Container, CategorySection, CourseCard, StatsContainer, StatItem, CourseGrid, CategoryHeader } from "./certifications-style";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import { 
    FaJs, 
    FaReact, 
    FaNodeJs, 
    FaDocker, 
    FaBrain,
    FaCertificate,
    FaClock,
    FaTrophy,
    FaGraduationCap
} from "react-icons/fa";
import { SiDjango, SiPostgresql } from "react-icons/si";

const Certificacoes = () => {
    const sectionRef = useRef();
    const cardsRef = useRef([]);
    const [activeCategory, setActiveCategory] = useState(null);

    useLayoutEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobile) {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.fromTo(cardsRef.current, 
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

    const certifications = [
        {
            category: "JavaScript & Node.js",
            icon: <FaJs />,
            color: "#F7DF1E",
            totalHours: 44,
            courses: [
                "JavaScript: utilizando tipos, variáveis e funções (8h)",
                "JavaScript: conhecendo arrays (8h)",
                "JavaScript: conhecendo objetos (8h)",
                "JavaScript com Node.js: criando sua primeira biblioteca (10h)",
                "JavaScript: programação Orientada a Objetos (8h)"
            ]
        },
        {
            category: "Django & Python",
            icon: <SiDjango />,
            color: "#092E20",
            totalHours: 70,
            courses: [
                "Django: templates e boas práticas (8h)",
                "Django: persistência de dados e Admin (10h)",
                "Django: autenticação de formulários e alerta (10h)",
                "Django: autenticação com OAuth2.0 (8h)",
                "Django: CRUD e persistência no S3 (8h)",
                "Python: crie a sua primeira aplicação (8h)",
                "Python: aplicando a Orientação a Objetos (6h)",
                "Python: avance na OO e consuma API (8h)",
                "Django REST Framework: construindo APIs RESTful (8h)",
                "Django REST Framework: validações e filtros (6h)"
            ]
        },
        {
            category: "React & Next.js",
            icon: <FaReact />,
            color: "#61DAFB",
            totalHours: 70,
            courses: [
                "React: comece seu projeto full stack (12h)",
                "React e Node.js: consumindo APIs no React (8h)",
                "React JS: testes com Jest e Testing Library (8h)",
                "React com TypeScript: área administrativa (8h)",
                "React com TypeScript: cadastro e autenticação (8h)",
                "Next.js: conheça o framework React (8h)",
                "Next.js: construa aplicações com Postgres e Prisma (8h)",
                "Next.js: construindo com Server Actions (8h)",
                "Next.js: gerando site estático com SSG (8h)",
                "Next.js: implementando autenticação com Auth.js (8h)"
            ]
        },
        {
            category: "Node.js Avançado & APIs",
            icon: <FaNodeJs />,
            color: "#339933",
            totalHours: 100,
            courses: [
                "Node.js: continue projeto full stack criando API Express (8h)",
                "Node.js: testes unitários e de integração (12h)",
                "Node.js: implementando testes em uma API Rest (6h)",
                "Node.js: criptografia e tokens JWT (10h)",
                "Node.js: API Rest com autenticação e permissões (10h)",
                "Node.js: Autenticação, Passport e OAuth 2.0 (8h)",
                "Node.js: melhorando fluxo de desenvolvimento (12h)",
                "Node.js: lidando com buscas, filtros e paginação (10h)",
                "Node.js: criando API Rest com Express e MongoDB (10h)",
                "ORM com Node.js: Sequelize e SQLite (10h)",
                "ORM com Node.js: avançando no Sequelize (10h)",
                "TypeScript: construção de API com tipagem segura (8h)",
                "TypeScript: desenvolvendo validações e erros (8h)",
                "SOLID com TypeScript: boas práticas em OO (6h)",
                "Padrões de projeto com TypeScript (8h)",
                "Testes com TypeScript: refatoração e TDD (8h)",
                "Nest.js: criando uma API Restful (10h)",
                "Nest.js: Persistindo dados com TypeORM (10h)",
                "Nest.js: lidando com migrações e relacionamentos (10h)"
            ]
        },
        {
            category: "Banco de Dados",
            icon: <SiPostgresql />,
            color: "#336791",
            totalHours: 46,
            courses: [
                "PostgreSQL (8h)",
                "PostgreSQL: Views, Sub-Consultas e Funções (6h)",
                "PostgreSQL: comandos DML e DDL (8h)",
                "PostgreSQL: desenvolva com PL/pgSQL (8h)",
                "PostgreSQL: Triggers, transações, erros e cursores (8h)",
                "Modelagem de dados: identificando entidades e relacionamentos (8h)"
            ]
        },
        {
            category: "DevOps & Cloud",
            icon: <FaDocker />,
            color: "#2496ED",
            totalHours: 18,
            courses: [
                "Docker: criando e gerenciando containers (10h)",
                "Começando em Cloud: usando a AWS (8h)"
            ]
        },
        {
            category: "Fundamentos",
            icon: <FaGraduationCap />,
            color: "#8E44AD",
            totalHours: 48,
            courses: [
                "Lógica de programação: mergulhe em programação com JavaScript (6h)",
                "Lógica de programação: explore funções e listas (6h)",
                "Git e GitHub: compartilhando e colaborando em projetos (8h)",
                "Lógica de programação: praticando com desafios (8h)",
                "HTTP: entendendo a web por baixo dos panos (10h)",
                "Desenvolvimento de carreira: demanda do mercado (10h)"
            ]
        },
        {
            category: "Tecnologias Emergentes",
            icon: <FaBrain />,
            color: "#E91E63",
            totalHours: 8,
            courses: [
                "Framer: usando IA para criar um site (8h)"
            ]
        }
    ];

    const totalHours = certifications.reduce((sum, cat) => sum + cat.totalHours, 0);
    const totalCourses = certifications.reduce((sum, cat) => sum + cat.courses.length, 0);

    return (
        <Container ref={sectionRef} id="certificacoes">
            <div className="header">
                <h2>{"<"}Certificações & Formações{"/>"}</h2>
                <p>Minha jornada de aprendizado contínuo na Alura</p>
                
                <StatsContainer>
                    <StatItem>
                        <FaClock />
                        <span className="number">{totalHours}h</span>
                        <span className="label">Total de Estudos</span>
                    </StatItem>
                    <StatItem>
                        <FaCertificate />
                        <span className="number">{totalCourses}</span>
                        <span className="label">Cursos Concluídos</span>
                    </StatItem>
                    <StatItem>
                        <FaTrophy />
                        <span className="number">{certifications.length}</span>
                        <span className="label">Formações</span>
                    </StatItem>
                </StatsContainer>
            </div>

            <CourseGrid>
                {certifications.map((cert, index) => (
                    <CategorySection 
                        key={cert.category}
                        ref={el => cardsRef.current[index] = el}
                        onMouseEnter={() => setActiveCategory(cert.category)}
                        onMouseLeave={() => setActiveCategory(null)}
                        isActive={activeCategory === cert.category}
                        color={cert.color}
                    >
                        <CategoryHeader color={cert.color}>
                            <div className="category-info">
                                <span className="icon">{cert.icon}</span>
                                <div>
                                    <h3>{cert.category}</h3>
                                    <span className="hours">{cert.totalHours} horas</span>
                                </div>
                            </div>
                            <div className="course-count">
                                {cert.courses.length} cursos
                            </div>
                        </CategoryHeader>

                        <div className="courses-list">
                            {cert.courses.map((course, courseIndex) => (
                                <CourseCard key={courseIndex} color={cert.color}>
                                    <span className="course-name">{course}</span>
                                </CourseCard>
                            ))}
                        </div>
                    </CategorySection>
                ))}
            </CourseGrid>
        </Container>
    );
};

export default Certificacoes;