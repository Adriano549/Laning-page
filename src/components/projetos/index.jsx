import { Container } from "./styled";
import Projeto1Gif  from "../../img/projetos/projeto-funcionando.gif"
import { FaGithub } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";
import { GiMagicBroom } from "react-icons/gi";
import Projeto2Gif from "../../img/projetos/projeto-mae.gif";
import { FaTooth } from "react-icons/fa6";
const Projetos = () => {
    return (
        <Container>
            <h2>Projetos</h2>
            <ul>
                <li>
                <div style={{ backgroundImage: `url(${Projeto1Gif})` }}></div>
                    <h3>Projeto 1 - <GiMagicBroom /> Taverna Mágica<GiMagicBroom /></h3>
                    <p> Site de E-commerce com itens baseados em um mundo de fantasia (RPG)</p>
                    <a href="https://adriano549.github.io/taverna_magica__/" target="_blank" >Ver Projeto <FaSitemap /></a>
                    <a href="https://github.com/Adriano549/taverna_magica__" target="_blank" >GitHub <FaGithub /></a>
                </li>
                <li>
                <div style={{ backgroundImage: `url(${Projeto2Gif})` }}></div>
                    <h3>Projeto 2 - <FaTooth /> Sheilla Labor Orto <FaTooth /></h3>
                    <p>Site onde irá apresentar alguns trabalhos da protética e apresentá-la</p>
                    <a href="#" target="_blank" >Ver Projeto <FaSitemap /></a>
                    <a href="#" target="_blank">GitHub <FaGithub /></a>
                </li>
            </ul>
        </Container>
    );
}

export default Projetos;