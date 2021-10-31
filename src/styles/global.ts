import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #F5F5F5;
        --blue: #3B4CE6;

        --blue-light: #3B63FE;

        --text-title: #000000;
        --text-body: #9E9E9E;

        --line: #d5d5d5;

        --shape: #FFFFFF
    }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size 16px (Desktop)

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        -webkit-font-smoothing: antialiased;

        background: #F5F5F5;

        height: 100vh;
        width: 100vw;
    }

    body, input, textarea, button {
        font-family: "Raleway", sans-serif;
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        text-transform: none;
    }

    button {
        cursor: pointer;

        border: 0;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);


        position: fixed;

        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: flex-end;
    }

    .react-modal-content {
        width: 100%;
        min-height: 525px;
        max-width: 576px;
    
        background: #f9f9f9;
        padding: 3rem 2rem;
        border-radius: 3rem 3rem 0 0;
    }
`

// FONTES

// Raleway - 500 - 600
// Poppins - 500 - 600