import { createGlobalStyle } from "styled-components";

import Bkg1 from '../assets/background-1.png';
import Bkg2 from '../assets/background-2.png';

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
        font-family: 'Poppins', sans-serif;
        background: url(${Bkg2}) no-repeat 970px, url(${Bkg1}) no-repeat 920px;
        background-size: cover;
        background-color: #F8FDFF;
    }
`;