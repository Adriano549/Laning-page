import Projeto1Gif from "../../img/projetos/projeto-funcionando.gif"
import { FaGithub, FaShoppingCart, FaExternalLinkAlt } from "react-icons/fa";
import { GiMagicBroom, GiCardRandom } from "react-icons/gi";
import Projeto3Git from "../../img/projetos/projeto-yugioh.gif"
import Projeto4 from "../../img/projetos/E-commerc-vela.png"
import { useState } from "react";
import {
    Container,
    ActionButton,
    ActionButtons,
    CategoryBadge,
    ContentContainer,
    Header,
    IconWrapper,
    ImageContainer,
    ImageOverlay,
    ProjectCard,
    ProjectDescription,
    ProjectHeader,
    ProjectImage,
    ProjectTitle,
    ProjectsGrid,
    Subtitle,
    TechStack,
    TechTag,
    TitleContainer
} from "./styled"

const Projetos = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Taverna Mágica",
            icon: <GiMagicBroom />,
            description: "E-commerce completo com itens baseados em um mundo de fantasia (RPG). Uma experiência imersiva de compras online.",
            technologies: ["React.js", "JavaScript", "HTML", "CSS"],
            image: Projeto1Gif,
            liveUrl: "https://adriano549.github.io/taverna_magica__/",
            githubUrl: "https://github.com/Adriano549/taverna_magica__",
            category: "E-commerce"
        },
        {
            id: 2,
            title: "Yu-Gi-Oh API Explorer",
            icon: <GiCardRandom />,
            description: "Aplicação que consome a API do Yu-Gi-Oh para exibir cartas com filtros avançados e interface moderna.",
            technologies: ["React.js", "JavaScript", "TypeScript", "Vitest", "Material-UI", "CSS"],
            image: Projeto3Git,
            liveUrl: "https://adriano549.github.io/API-yu-gi-oh",
            githubUrl: "https://github.com/Adriano549/API-yu-gi-oh.git",
            category: "API Integration"
        },
        {
            id: 3,
            title: "E-commerce de Velas",
            icon: <FaShoppingCart />,
            description: "E-commerce completo com autenticação de usuários, carrinho de compras, área do cliente e painel de administração.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Zustand", "Prisma", "PostgreSQL", "NextAuth.js", "Jest"],
            image: Projeto4,
            liveUrl: "https://e-commerce-velas.vercel.app/",
            githubUrl: "https://github.com/Adriano549/e-commerce-velas",
            category: "Full-Stack"
        }
    ];

    return (
        <Container>
            <Header>
                <h2>{"<"}Meus Projetos{"/>"}</h2>
                <Subtitle>Explore alguns dos projetos que desenvolvi</Subtitle>
            </Header>
            
            <ProjectsGrid>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        isHovered={hoveredProject === project.id}
                    >
                        <ImageContainer>
                            <ProjectImage 
                                src={project.image} 
                                alt={`Projeto ${project.title}`}
                                loading="lazy"
                            />
                            <ImageOverlay isHovered={hoveredProject === project.id}>
                                <CategoryBadge>{project.category}</CategoryBadge>
                            </ImageOverlay>
                        </ImageContainer>

                        <ContentContainer>
                            <ProjectHeader>
                                <TitleContainer>
                                    <IconWrapper>{project.icon}</IconWrapper>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                </TitleContainer>
                            </ProjectHeader>

                            <ProjectDescription>{project.description}</ProjectDescription>

                            <TechStack>
                                {project.technologies.map((tech, index) => (
                                    <TechTag key={index}>{tech}</TechTag>
                                ))}
                            </TechStack>

                            <ActionButtons>
                                <ActionButton 
                                    href={project.liveUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    primary
                                >
                                    <FaExternalLinkAlt />
                                    Ver Projeto
                                </ActionButton>
                                <ActionButton 
                                    href={project.githubUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub />
                                    Código
                                </ActionButton>
                            </ActionButtons>
                        </ContentContainer>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
        </Container>
    );
}

export default Projetos;

