import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 0.3rem;

    display: flex;

    padding: 1rem 2rem;

    box-shadow: 0 7px 15px rgba(0,0,0,0.25);

    margin-top: 1.6rem;

`
export const CardInfo = styled.div`

    display: flex;
    align-items: center;

    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;

        margin-right: 1rem;
    }

    div {

        p {
            font-size: 1.3rem;
            font-family: Poppins;
            font-weight: 500;
            margin-bottom: 0.2rem;
            color: #000;
        }
    }
`
