import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
    background-color: var(--blue);
`

export const Top = styled.div`
    min-height: 30vh;
    background-color: var(--blue-light);

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        margin-top: 2rem;
        font-size: 3.6rem;
        color: #fff;

        span {
            font-weight: 700;
            color: #fff;
        }
    }

`

export const Bottom = styled.div`
    min-height: 60vh;

    text-align: center;
    
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;


    button {

        &.login {

            width: 80%;
            
            height: 3.8rem;

            font-size: 2rem;
            
            border: 0;
            border-radius: 0.3rem;

            a {
                color: #485FBE;
            }
            
            
        }

        &.register {
            background: none;
            border: 0;
            font-size: 1.6rem;
            font-weight: 600;
            
            a {
                color: #fff;
            }
            
            
        }

        & + button {
            margin-top: 2rem;
        }

    }

    
    
`