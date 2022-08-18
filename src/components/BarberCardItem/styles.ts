import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    background-color: var(--gray-850);
    border-radius: 0.3rem;

    display: flex;

    padding: 1rem 2rem;

    box-shadow: 0 7px 15px rgba(0,0,0,0.25);

    margin-top: 1.6rem;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.95);
    }

`
export const CardInfo = styled.div`

    display: flex;
    align-items: center;

    img {
        width: 4.75rem;
        height: 4.75rem;
        border-radius: 50%;

        margin-right: 1rem;
    }

    div {

        p {
            font-size: 1.3rem;
            font-family: Poppins;
            font-weight: 500;
            margin-bottom: 0.2rem;
            color: #fff;
        }
    }
`
