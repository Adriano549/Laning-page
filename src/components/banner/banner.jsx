import foto from "../../img/foto-perfil.jpg"
import { Player } from '@lottiefiles/react-lottie-player';
import { FaSquareGithub, FaLinkedin, FaDownload } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {
    Section,
    ContentWrapper,
    TextContent,
    TitleContainer,
    TypewriterText,
    SocialContainer,
    SocialLink,
    DownloadButton,
    AnimationContainer,
    ProfileContainer,
    ProfileImageWrapper,
    ProfileOverlay
} from "./banner-styled"

const Info = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Section>
            <ContentWrapper isVisible={isVisible}>
                <TextContent>
                    <TitleContainer>
                        <h1>{"<"}Adriano de Almeida{"/>"}</h1>
                        <TypewriterText>Desenvolvedor Full-stack Junior</TypewriterText>
                    </TitleContainer>
                    
                    <SocialContainer>
                        <SocialLink href="https://github.com/Adriano549" target="_blank" aria-label="GitHub">
                            <FaSquareGithub />
                        </SocialLink>
                        <SocialLink href="https://www.linkedin.com/in/adriano-almeida-510a0a309/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialLink>
                    </SocialContainer>

                    <DownloadButton href="/curriculo full-stack.pdf" download="Curriculo_Adriano_Almeida.pdf">
                        <FaDownload />
                        Baixar Currículo
                    </DownloadButton>

                    <AnimationContainer>
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/53d30353-6ad2-441d-baf4-e41d8da6e9de/VA1Evcp7gM.json"
                            style={{ height: '200px', width: '200px' }}
                        />
                    </AnimationContainer>
                </TextContent>

                <ProfileContainer>
                    <ProfileImageWrapper>
                        <img src={foto} alt="Foto de perfil do Adriano de Almeida" />
                        <ProfileOverlay>
                            <div className="glow"></div>
                        </ProfileOverlay>
                    </ProfileImageWrapper>
                </ProfileContainer>
            </ContentWrapper>
        </Section>
    )
}

export default Info;

