import { createGlobalStyle } from "styled-components";
import {BREAK_POINTS} from "./breakPoints.js"

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;

        @media(max-width: ${BREAK_POINTS.MD}) {
            font-size: 12px;
        }
    }

    body {
        background-color: ${({theme}) => theme.COLORS.Dark[100]};
        font-family: "Poppins", serif;

        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    input, textarea {
        font-family: "Roboto", sans-serif;
        font-weight: 100;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    } 

    button {
        font-family: "Poppins", sans-serif;
        font-weight: 100;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg,rgb(150, 124, 36), #b8860b); 
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color:transparent;
      border-radius: 10px;
    }

`