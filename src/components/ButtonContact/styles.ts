import styled from "styled-components";

export const Button = styled.button`
    width: 200px;
    height: 60px;
    margin-top: 50px;
    border-radius: 100px;

    background: #17A4D0;
    border: 1px solid #17A4D0;
    color: #FFF;

    font-family: 'Poppins', sans-serif;
   

    cursor: pointer;

    transition: all 0.4s ease-in-out;


    &:hover {
        background: #F8FDFF;
        color: #17A4D0;
        box-shadow: 0px 0px 17px -8px #000;
    }

`;