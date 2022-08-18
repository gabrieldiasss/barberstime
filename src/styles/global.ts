import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #F5F5F5;
        --blue: #3B4CE6;
        --blue-light: #3B63FE;
        --gray: #bebebe;

        --text-title: #000000;
        --text-body: #9E9E9E;

        --line: #d5d5d5;

        --shape: #FFFFFF;

        --orange-500: #FE9102;

        --gray-900: #212025;
        --gray-850: #2B2A2F;
        --gray-800: #29282D;
        
        --gray-500: rgba(255, 255, 255, 0.3);
        --gray-450: rgba(255, 255, 255, 0.6);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size 16px (Desktop)

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }

        @media(max-width: 400px) {
            font-size: 81.125%;
        }

        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;

        background: #212025;

        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        
    }

    body, input, textarea, button {
        font-family: "Raleway", sans-serif;
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
        font-family: Poppins;
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

        @media(min-width: 500px) {
            align-items: center;
        }

    }

    .react-modal-content {
        width: 100%;

        @media(min-width: 500px) {
            margin: 0 auto;
            max-width: 700px;
            width: 90%;
            align-items: center;

            border-radius: 2rem;
        }

        background: var(--gray-900);
        padding: 2rem 2rem;
        border-radius: 3rem 3rem 0 0;

        @media(max-width: 375px) {
            padding: 3rem 1.4rem;
        }
    }

    .react-modal-cancel-overlay {
        background: rgba(0,0,0,0.5);

        position: fixed;
        z-index: 3;

        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
    }

    .react-modal-cancel-content {

        color: #fff;
        
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        max-width: 600px;

        margin: 0 auto;

        h2 {
            text-align: center;
        }
    
        background: var(--gray-800);
        padding: 3rem 2rem;
        border-radius: 2rem;

        @media(max-width: 500px) {
            width: 90%;
        }
    }
    
`

// FONTES

// Raleway - 500 - 600
// Poppins - 500 - 600