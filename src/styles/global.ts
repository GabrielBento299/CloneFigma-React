import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body , #root{
        height: 100%;
        -webkit-font-smoothing: antialiased;
    }

    body {
        background: #F8FDFF;
        font-family: 'Poppins', sans-serif;
    }
`;