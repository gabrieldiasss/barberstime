import styled from 'styled-components'

export const Top = styled.div`

    background: var(--blue-light);

    .react-icons {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 25px;
        color: #fff;
    }

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

            span {
                font-weight: 700;
            }
        }
    }

`

export const Main = styled.main`

    padding: 2rem 2.6rem;

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

            border-radius: 0.3rem;

            & + input {
                margin-top: 1.8rem;
            }

        }
        
    }

    button {
        margin-top: 1.8rem;
        height: 3.6rem;

        box-shadow: 0 3px 10px rgba(0,0,0,0.25);

        font-size: 1.8rem;

        background: #3B63FE;

        color: #fff;

        border-radius: 0.3rem;
        border: 0;
        
    }

    p {
        display: flex;
        justify-content: center;

        margin-top: 1.8rem;

        font-size: 1.1rem;

        color: var(--text-body);

        a {
            margin-left: 0.5rem;

            color: var(--blue-light);
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

export const Authenticates = styled.div`

    display: flex;
    flex-direction: column;
    text-align: center;

    padding-top: 3rem;

    span {
        margin-bottom: 1rem;
        position: relative;
        color: #d5d5d5;

        &::before, &::after {
            content: '';

            position: absolute;
            height: 1px;

            width: 70px;
            bottom: 50%;

            right: 50px;

            background: var(--line);

            @media(max-width: 355px) {
                right: 30px;
            }
        }

        &::after {
            left: 50px;

            @media(max-width: 355px) {
                left: 30px;
            }
        }

    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        margin: 1rem 0;
    }
`