import styled from "styled-components";

export const Container = styled.div`

    h1 {
        color: #fff;
    }

    padding: 2rem 2rem;

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
`

export const CardProfile = styled.div`

    margin-top: 1.6rem;

    color: #fff;

    padding: 1rem 2rem;
    background-color: var(--gray-800);
    border-radius: 0.4rem;

    box-shadow: 5px 5px 10px rgba(0,0,0,0.25);

    display: flex;
    align-items: center;
    gap: 1.6rem;

    > img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
    }

    button {
        margin-top: 0.6rem;
        display: flex;
        align-items: center;
        background: none;
        font-size: 1.2rem;
        color: #fff;

        .logout { 
            margin-right: 0.6rem;
            height: 20px;
            width: 20px;
        }
    }


`