import styled from "styled-components"
import foto from "../../img/foto-perfil.jpg"
import { Player} from '@lottiefiles/react-lottie-player';
import { FaSquareGithub,FaSquareInstagram ,FaLinkedin  } from "react-icons/fa6";



const Info = () => {

    return (
        <Section>
            <div>
                <h1>{"<"}Adriano de Almeida{"/>"}</h1>
                <h2>Desenvolvedor Front-End Junior</h2>
                <span>
                    <a href="https://github.com/Adriano549" target="_blank"><FaSquareGithub /></a>
                    <a href="https://www.instagram.com/adri_san549/"><FaSquareInstagram /></a>
                    <a href="https://www.linkedin.com/in/adriano-almeida-510a0a309/"><FaLinkedin /></a>
                </span>
                <DownloadButton href="/curriculo.pdf" download="Curriculo_Adriano_Almeida.pdf">
                    Baixar Currículo
                </DownloadButton>
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/53d30353-6ad2-441d-baf4-e41d8da6e9de/VA1Evcp7gM.json"
                >
                </Player>

            </div>
            <Perfil>
                <img src={foto} alt="" />
            </Perfil>
        </Section>
    )
}

export default Info;

const Section = styled.section`
    display: flex;
	min-height: calc(100vh - 125px);
	align-items: center;
	gap: 50px;
	justify-content: space-between;
    border-bottom: solid 2px #27002cdd;
    div {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            width: 200px;
            font-size: 30px;
            font-weight: 700;
        }    
        h2 {
            font-size: 20px;
            font-weight: 400;
        }
        span {
            padding: 10px;
            
        }
        a{
            margin: 5px;
            font-size: 30px;
        }
    }
`
const Perfil = styled.div`
    display: flex;
    justify-content: center;
    img {
        border-radius: 50%;
        width: 200px;
        box-shadow: black 20px 10px 40px;
    }
`
const DownloadButton = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #e10dfd7a;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
        background-color: #af0d5e;
    }
`;




