import { useState, useEffect } from "react"
import { HeAder, Menu } from "./navBar-styled"

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) { 
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80; 
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <HeAder scrolled={scrolled}>
            <div>
                <h2><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>AA</a></h2>
            </div>
            <nav>
                <Menu>
                    <li>
                        <a href="#skills" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('skills');
                        }}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projetos" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('projetos');
                        }}>
                            Projetos
                        </a>
                    </li>  
                    <li>
                        <a href="#certificacoes" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('certificacoes');
                        }}>
                            Certificados
                        </a>
                    </li>             
                </Menu>
            </nav>
        </HeAder>
    )
}

export default Header;

