import styled from "styled-components"


const Header =() => {
    return (
        <HeAder>
            <div>
                <h2>AA</h2>
            </div>
            <nav>
            <Menu>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projetos">Projetos</a></li>               
            </Menu>
            </nav>
        </HeAder>
    )
}

export default Header;

const HeAder = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    border-bottom: solid 2px #27002cdd;
    h2{
        font-size: 20px;
        padding: 10px;
        margin-left: 30px;
        color: #e10dfddd;
        border: #ffffff solid 2px;
        border-radius: 70%;
        font-weight: 500;
    }
`

const Menu = styled.ul`
    display: flex;
    li{
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
        margin-right: 60px;        
    }
        li:hover{
            background-color: #af0d5e;
            border-radius: 10px;
            transition: 0.3s ;            
        }
`