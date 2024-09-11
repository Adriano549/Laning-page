import styled from "styled-components";

export const Container = styled.section`
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    ul { 
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: minmax(250px, auto); 
        gap: 20px; 
    }
    li {
        background-color: #d473ecc0;
        padding: 20px;
        text-align: center;
        border: 2px solid #ddd;
        border-radius: 8px;
        display: flex;
        color: black; 
        align-items: center;
    }
    div {
        width: 100%;  
        border-radius: 8px;
        margin-bottom: 10px; 

    }
    h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        margin-bottom: 10px;
    }
    a {
        color: aliceblue;
        display: block; 
        margin-top: 5px; 
    }
    a:hover {
        text-decoration: underline;
    }
`