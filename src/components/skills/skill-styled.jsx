import styled from "styled-components"

export const Section = styled.section `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    text-align: center;
    background: linear-gradient(#480661, #783a91) ;
    margin-bottom: 50px;
    h2 {
        font-weight: 500;
        font-size: 20px;
        margin: 20px;
    }
    div {
        padding: 40px;
    }
`
export const Text = styled.div `
    min-height: 300px;
    background: linear-gradient(#3d0452, #241924 );
    display: flex;
    flex-direction: column;
    border: thick double #5a0c72 ;
    align-items: center;
    transform: translateY(800px);
    opacity: 0;
    @media (max-width: 768px) { 
        transform: translateY(0px);
        opacity: 1;
    }
    p {
        font-size: 16px;
        font-weight: 400;
        padding: 10px;
    }
    span {
        font-size: 16px;
        font-weight: 400;
        padding: 10px;
        border-bottom: solid 1px #9b38b9 ;
    }
`