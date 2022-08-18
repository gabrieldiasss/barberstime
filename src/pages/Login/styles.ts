import styled from 'styled-components'

export const Top = styled.div`

    background: var(--gray-800);

    header {

        height: 20vh;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        h1 {

            margin-top: 3rem;
            color: #fff;
            font-size: 3.4rem;

            @media(max-width: 346px) {
                font-size: 3rem;
            }

            @media(min-width: 500px) {
                margin-top: 0;
            }

            span {
                font-weight: 700;
            }
        }
    }

`

export const Svg = styled.div`

    @media(min-width: 500px) {
        display: none;
    }

`

export const Main = styled.main`

    padding: 2rem 2.6rem;

    @media(min-width: 500px) {
        margin: 0 auto;
        max-width: 500px;
    }

    @media(min-width: 1440px) {
        margin: 3rem auto;
        max-width: 600px;
    }

    height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 375px) {
        padding: 2rem 2rem;
    }

    @media(max-width: 330px) {
        padding: 2rem 1.8rem;
    }

    h2 {
        font-size: 1.7rem;
        color: #fff;
    }

    form {

        margin-top: 2rem;

        display: flex;
        flex-direction: column;

        input {
            width: 100%;
            height: 3.8rem;

            padding: 0 2rem;

            box-shadow: 0 3px 15px rgba(0,0,0,0.25);

            border: 0;
            outline: 0;

            color: var(--gray-500);
            background: var(--gray-850);

            border-radius: 0.3rem;

            & + input {
                margin-top: 1.8rem;
            }

        }

    }

    button {
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        margin-top: 1.8rem;

        height: 3.6rem;

        box-shadow: 0 3px 10px rgba(0,0,0,0.25);

        font-size: 1.8rem;

        background: var(--orange-500);

        color: #fff;

        border-radius: 0.3rem;
        border: 0;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.95);
        }

        @keyframes ldio-zbpv5ybpu8e {
            0% { transform: translate(-50%,-50%) rotate(0deg); }
            100% { transform: translate(-50%,-50%) rotate(360deg); }
        }

        .ldio-zbpv5ybpu8e div {
            position: absolute;
            width: 44px;
            height: 44px;
            border: 4px solid #ffffff;
            border-top-color: transparent;
            border-radius: 50%;
        }

        .ldio-zbpv5ybpu8e div {
            animation: ldio-zbpv5ybpu8e 1.3513513513513513s linear infinite;
            top: 50px;
            left: 50px
        }

        .loadingio-spinner-rolling-yi8phtw2ml {
            width: 51px;
            height: 51px;
            display: inline-block;
            overflow: hidden;
            background: rgba(NaN, NaN, NaN, 0);
        }
        .ldio-zbpv5ybpu8e {
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(0.51);
            backface-visibility: hidden;
            transform-origin: 0 0; /* see note above */
        }
        .ldio-zbpv5ybpu8e div { box-sizing: content-box; }
                
        }

    p {
        display: flex;
        justify-content: center;

        margin-top: 1.8rem;

        font-size: 1.1rem;

        color: var(--text-body);

        a {
            margin-left: 0.5rem;

            color: var(--orange-500);
            font-weight: 600;
        }
    }

    
    @media(max-width: 346px) {

        h2 {
            font-size: 1.5rem;
        }

        form {
            input {
                height: 3.6rem;
            }
        }

        button {
            height: 3.3rem;
        }
    }

`
