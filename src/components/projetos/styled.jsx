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
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: minmax(250px, auto); 
        gap: 20px; 
    }
    li {
        background-color: #d473ecc0;
        padding: 20px;
        text-align: center;
        border: 2px solid #ddd;
        border-radius: 8px;
        
        color: black; 
    }
    div {
        width: 100%;
        height: 200px; 
        background-size: cover; 
        background-position: center;
        background-repeat: no-repeat; 
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
`;