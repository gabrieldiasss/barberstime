import styled from 'styled-components'

export const Container = styled.div`
    padding: 2.4rem 2.8rem;

    @media(min-width: 600px) {
        margin: 0 auto;
        max-width: 550px;
        width: 90%;
    }

    @media(min-width: 800px) {
        max-width: 700px;
    }

    @media(min-width: 1024px) {
        max-width: 800px;
    }

    h1 {
        font-family: Poppins;
        color: #fff;
    }
`

export const InputFake = styled.div`
    margin-top: 1.8rem;
    display: flex;
    align-items: center;
    
    background: var(--gray-850);
    

    height: 3.8rem;
    padding: 0 2rem;
    border-radius: 0.3rem;

    box-shadow: 0 3px 15px rgba(0,0,0,0.25);

    .search-icon {
        font-size: 20px;
        color: var(--orange-500);
        margin-right: 1rem;
    }

    input {
        border: 0;
        outline: 0;
        background: none;

        font-size: 1.2rem;
        color: var(--gray-450);
    }

`

export const Loading = styled.div`

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

     @keyframes ldio-6mzwot4130t {

    0% {
        opacity: 1;
        backface-visibility: hidden;
        transform: translateZ(0) scale(1.5,1.5);
    } 100% {
        opacity: 0;
        backface-visibility: hidden;
        transform: translateZ(0) scale(1,1);
    }
    }
    .ldio-6mzwot4130t div > div {
        position: absolute;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background: #FE9102;
        animation: ldio-6mzwot4130t 1s linear infinite;
        }.ldio-6mzwot4130t div:nth-child(1) > div {
        left: 148px;
        top: 88px;
        animation-delay: -0.875s;
    }
    .ldio-6mzwot4130t > div:nth-child(1) {
        transform: rotate(0deg);
        transform-origin: 160px 100px;
    }


    .ldio-6mzwot4130t div:nth-child(2) > div {
        left: 130px;
        top: 130px;
        animation-delay: -0.75s;
    }

    .ldio-6mzwot4130t > div:nth-child(2) {
    transform: rotate(45deg);
    transform-origin: 142px 142px;
    }

    .ldio-6mzwot4130t div:nth-child(3) > div {
    left: 88px;
    top: 148px;
    animation-delay: -0.625s;
    }

    .ldio-6mzwot4130t > div:nth-child(3) {
    transform: rotate(90deg);
    transform-origin: 100px 160px;
    }

    .ldio-6mzwot4130t div:nth-child(4) > div {
    left: 46px;
    top: 130px;
    animation-delay: -0.5s;
    }
    .ldio-6mzwot4130t > div:nth-child(4) {
    transform: rotate(135deg);
    transform-origin: 58px 142px;
    }.ldio-6mzwot4130t div:nth-child(5) > div {
    left: 28px;
    top: 88px;
    animation-delay: -0.375s;
    }
    .ldio-6mzwot4130t > div:nth-child(5) {
    transform: rotate(180deg);
    transform-origin: 40px 100px;
    }.ldio-6mzwot4130t div:nth-child(6) > div {
    left: 46px;
    top: 46px;
    animation-delay: -0.25s;
    }
    .ldio-6mzwot4130t > div:nth-child(6) {
    transform: rotate(225deg);
    transform-origin: 58px 58px;
    }.ldio-6mzwot4130t div:nth-child(7) > div {
    left: 88px;
    top: 28px;
    animation-delay: -0.125s;
    }
    .ldio-6mzwot4130t > div:nth-child(7) {
    transform: rotate(270deg);
    transform-origin: 100px 40px;
    }.ldio-6mzwot4130t div:nth-child(8) > div {
        left: 130px;
        top: 46px;
        animation-delay: 0s;
    }
    .ldio-6mzwot4130t > div:nth-child(8) {
        transform: rotate(315deg);
        transform-origin: 142px 58px;
    }
    .loadingio-spinner-spin-q9009gkv1x {
        width: 200px;
        height: 200px;
        display: inline-block;
        overflow: hidden;
    }
    .ldio-6mzwot4130t {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
    }

    .ldio-6mzwot4130t div { box-sizing: content-box; }
`





