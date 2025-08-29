import styled from "styled-components"

export const HeAder = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: ${props => props.scrolled ? '70px' : '80px'};
    border-bottom: solid 2px #27002cdd;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${props => props.scrolled ? '#0d0014ee' : '#0d0014'}; 
    backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
    z-index: 1000;
    transition: all 0.3s ease-in-out;
    box-shadow: ${props => props.scrolled ? '0 2px 20px rgba(225, 13, 253, 0.3)' : 'none'};

    h2 {
        font-size: ${props => props.scrolled ? '18px' : '20px'};
        padding: ${props => props.scrolled ? '8px' : '10px'};
        margin-left: 30px;
        color: #e10dfddd;
        border: #ffffff solid 2px;
        border-radius: 70%;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        
        &:hover {
            transform: scale(1.05);
            border-color: #e10dfddd;
            box-shadow: 0 0 15px rgba(225, 13, 253, 0.5);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        min-height: auto;
        padding: 10px 0;
        
        h2 {
            margin-left: 0;
            margin-bottom: 10px;
        }
    }
`

export const Menu = styled.ul`
    display: flex;
    
    li {
        padding: ${props => props.scrolled ? '8px' : '10px'};
        font-size: ${props => props.scrolled ? '18px' : '20px'};
        font-weight: bold;
        margin-right: 60px;
        transition: all 0.3s ease-in-out;
        border-radius: 10px;
        
        a {
            cursor: pointer;
            position: relative;
            padding: 5px 10px;
            border-radius: 8px;
            transition: all 0.3s ease;
            
            &::after {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                bottom: -3px;
                left: 50%;
                background-color: #e10dfddd;
                transition: all 0.3s ease;
                transform: translateX(-50%);
            }
            
            &:hover::after {
                width: 100%;
            }
        }
        
        &:hover {
            background-color: #af0d5e;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(175, 13, 94, 0.4);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        
        li {
            margin: 5px 0;
            margin-right: 0;
        }
    }
`