import styled from 'styled-components'

export const Main = styled.main`

    button {
        width: 100%;
        height: 4rem;
        background-color: var(--blue);

        color: #fff;
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);

        border-radius: 0.8rem;

        font-size: 1.3rem;

        font-family: Poppins;

    }
   
`
export const CardBarber = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 1.4rem;

    background-color: #fff;
    border-radius: 0.6rem;

    box-shadow: 0 5px 15px rgba(0,0,0,0.25);

    padding: 0.8rem 1.8rem;

    gap: 1.4rem;

    img {
        width: 50px;
        height: 50px;
       
        border-radius: 50%;
    }
`
export const CardServiceSelected = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.4rem;

    background-color: #fff;
    border-radius: 0.8rem;

    box-shadow: 0 5px 15px rgba(0,0,0,0.25);

    padding: 1.2rem 1.8rem;

    gap: 1.4rem;

    h2 {
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
    }

`