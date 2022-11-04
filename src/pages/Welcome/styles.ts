import styled from 'styled-components'

export const Container = styled.div`
    
`

export const Header = styled.header`

    flex: 1;

    margin: 2rem 3rem 0 3rem;

    @media(min-width: 980px) {
        max-width: 700px;
        margin: 2rem auto;
    }
   

    .headline {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-size: 2.4rem;
            color: #fff;
        }
    }

    .subtitle {
        display: flex;
        justify-content: space-between;
        color: #fff;

        flex: 1;

        margin-top: 2rem;

        img {
            margin-right: 2rem;
        }

        p {
            font-size: 1.2rem;
        }

    }

`

export const Buttons = styled.main`
    display: flex;
    justify-content: center;

    margin-top: 5rem;

    gap: 3rem;

    @media(max-width: 720px) {
        gap: 1rem;
    }
`

export const ButtonRegister = styled.button`
    padding: 8rem 8rem 2rem 1rem;
    font-size: 1.8rem;

    border-radius: 5px;
    background: #29282D;

    color: #fff;

    :hover {
        background: #353439;
        transition: 0.2s;
    }

    position: relative;

    @media(max-width: 720px) {
        padding: 4rem 4rem 2rem 1rem;
    }

    img {
        position: absolute;
        right: 10px;
        top: 10px;
    }
`

export const ButtonLogin = styled.button`
    padding: 8rem 8rem 2rem 1rem;
    font-size: 1.8rem;
    position: relative;

    color: #212025;

    background: var(--orange-500);

    :hover {
        background: #FF9913;
        transition: 0.2s;
    }

    border-radius: 5px;

    font-size: 1.4rem;

    @media(max-width: 720px) {
        padding: 4rem 4rem 2rem 1rem;
    }

    img {
        position: absolute;
        right: 10px;
        top: 10px;
    }
`