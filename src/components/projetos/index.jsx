import { Container } from "./styled";
import Projeto1Gif from "../../img/projetos/projeto-funcionando.gif"
import { FaGithub } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa6";
import { GiMagicBroom, GiCardRandom } from "react-icons/gi";
import Projeto2Gif from "../../img/projetos/projeto-mae.gif";
import { FaTooth } from "react-icons/fa6";
import Projeto3Git from "../../img/projetos/projeto-yugioh.gif"

const Projetos = () => {
    return (
        <Container>
            <h2>Projetos</h2>
            <ul>
                <li>
                    <div>
                        <h3>Projeto 1 - <GiMagicBroom /> Taverna Mágica<GiMagicBroom /></h3>
                        <img src={Projeto1Gif} alt="" />
                    </div>
                    <div>
                        <p> Site de E-commerce com itens baseados em um mundo de fantasia (RPG)</p>
                        <p>Nesse projeto foi usado React.JS , JavaScript, HTML e CSS</p>
                        <a href="https://adriano549.github.io/taverna_magica__/" target="_blank" >Ver Projeto <FaSitemap /></a>
                        <a href="https://github.com/Adriano549/taverna_magica__" target="_blank" >GitHub <FaGithub /></a>
                        
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Projeto 2 - <FaTooth /> Sheilla Labor Orto <FaTooth /></h3>
                        <img src={Projeto2Gif} alt="" />
                    </div>
                    <div>
                        <p>Site onde irá apresentar alguns trabalhos da protética e apresentá-la</p>
                        <p>Nesse projeto foi usado React.js , JavaScript, TypeScript , Jest, HTML  e CSS</p>
                        <a href="https://adriano549.github.io/Laning-page-mae/" target="_blank" >Ver Projeto <FaSitemap /></a>
                        <a href="https://github.com/Adriano549/Laning-page-mae" target="_blank">GitHub <FaGithub /></a>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Projeto 3 - <GiCardRandom /> Site usando a API do Yu-gi-oh <GiCardRandom /></h3>
                        <img src={Projeto3Git} alt="" />
                    </div>
                    <div>
                        <p>Siste usando a API do yu-gi-oh para praticar um pouco sobre API e usando o Material-ui para o estilo</p>
                        <p>Nesse projeto foi usado React.js , JavaScript,Vitest, TypeScript,  HTML e Material-UI, CSS.</p>
                        <a href="https://adriano549.github.io/API-yu-gi-oh" target="_blank" >Ver Projeto <FaSitemap /></a>
                        <a href="https://github.com/Adriano549/API-yu-gi-oh.git" target="_blank">GitHub <FaGithub /></a>
                    </div>
                </li>
            </ul>
        </Container>
    );
}

export default Projetos;