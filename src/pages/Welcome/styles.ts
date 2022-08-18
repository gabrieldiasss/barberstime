import styled from 'styled-components'

export const Container = styled.div`
    
`

export const Header = styled.header`

    flex: 1;

    margin: 2rem 3rem 0 3rem;

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

    margin-top: 2rem;

    gap: 1rem;
`

export const ButtonRegister = styled.button`
    padding: 4rem 4rem 2rem 1rem;
    font-size: 1.4rem;

    border-radius: 5px;
`

export const ButtonLogin = styled.button`
    padding: 4rem 4rem 2rem 1rem;
    font-size: 1.4rem;

    position: relative;

    background: var(--orange-500);

    border-radius: 5px;

    img {
        position: absolute;
        right: 5px;
        top: 5px;
    }
`