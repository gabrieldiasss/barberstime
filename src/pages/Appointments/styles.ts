import styled from "styled-components";

export const Container = styled.div`
    padding: 2.6rem 2.2rem;

`

export const CardAppointment = styled.div`

    margin-top: 2rem;

    background-color: #fff;
    border-radius: 0.8rem;

    padding: 1rem 2rem;

    header {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }
    }
`
export const CardService = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;
`
export const CardSchedules = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        padding: 0.6rem;
        background-color: var(--blue);
        color: #fff;
        border-radius: 0.4rem;

        font-family: Poppins;
        font-weight: 400;
    }
`