import styled from "styled-components";

export const Main = styled.div`

    display: flex;
    flex-direction: column;

    button {

        margin-top: 2rem;

        padding: 1.2rem 1.2rem;
        border-radius: 0.6rem;
        font-size: 1.4rem;
        color: #fff;

        & + button {
            margin-top: 2rem;
        }

        

        &.btn-cancel {
           
            background: #00c851;
        }
    }
`

export const ButtonNo = styled.button`
    background: #ff4444; 
`