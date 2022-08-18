import styled from 'styled-components'

export const Main = styled.main`

    color: #fff;

    button {
        width: 100%;
        height: 4rem;
        background-color: var(--orange-500);

        color: #fff;
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);

        border-radius: 0.8rem;

        font-size: 1.3rem;

        font-family: Poppins;

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }

    }
   
`
export const CardBarber = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 1.4rem;

    background-color: var(--gray-800);
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

    background-color: var(--gray-800);
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

export const CardDays = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1.4rem;

    background-color: var(--gray-800);
    border-radius: 0.6rem;

    box-shadow: 0 5px 15px rgba(0,0,0,0.25);

    padding: 0.6rem 1.4rem;

    display: block;
    overflow-x: scroll;
    
    &::-webkit-scrollbar {
        width: 10px;
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #bab8b5;
        border-radius: 40px;
    }

`

export const Month = styled.div`

    display: flex;
    align-items: center;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    gap: 0.1rem;

    h2 {
        font-size: 1.3rem;

        @media(max-width: 401px) {
            font-size: 1.2rem;
        }

        @media(max-width: 373px) {
            font-size: 1.1rem;
        }

    }

    .arrow {
        font-size: 2rem;
        cursor: pointer;
    }

`

export const Days = styled.div`

    display: flex;
    align-items: center;
    gap: 1.1rem;
    margin-top: 2.8rem;
    
    div {
        padding: 0.3rem;
        border-radius: 0.2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        /* h2, h3 {
            background-color: ;
        } */
    }
`

export const CardHours = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.4rem;

    background-color: var(--gray-800);
    border-radius: 0.6rem;

    box-shadow: 0 5px 15px rgba(0,0,0,0.25);

    padding: 0.6rem 2rem 0;

    overflow-x: scroll;

    div {
        
        padding: 0.3rem 0.6rem;
        border-radius: 0.4rem;

        h2 {
            font-family: Poppins;
            font-weight: 500;
            cursor: pointer;
        }
    }

    &::-webkit-scrollbar {
        width: 10px;
        height: 8px; 
    }

    &::-webkit-scrollbar-thumb {
        background-color: #bab8b5;
        border-radius: 40px;
    }
`


