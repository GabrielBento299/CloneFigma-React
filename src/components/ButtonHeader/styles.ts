import styled from "styled-components";

export const Button = styled.button`
    width: 130px;
    height: 42px;
    margin-left: 50px;
    font-family: 'Poppins', sans-serif;
 
    border: 1px solid #17A4D0;
    color: #17A4D0;
    background: transparent;
    outline: none;
    border-radius: 4px;

    cursor: pointer;
    
    transition: all 0.4s ease-in-out;

    &:hover {
        color: #FFF;
        background: #17A4D0;
        box-shadow: 0px 0px 17px -8px #000;
    }

`;