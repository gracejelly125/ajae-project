import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
    max-width: 1200px;
    min-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: auto;
    }
`;

export default GlobalStyle;
