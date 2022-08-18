import styled from 'styled-components'

export const Header = styled.header`
    background-color: var(--orange-500);

    @media(max-width: 500px) {
        display: none;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1200px;
    width: 90%;
    margin: 0 auto;

    height: 4.375rem;

    h2 a{
        color: #fff;
        text-decoration: none;
    }

    span {
        font-weight: 500;
    }
    
    nav {

        ul {
            display: flex;
            text-transform: none;
            gap: 1rem;

            li {
                list-style: none;
            }

            a {
                color: #f8f9f7;
                font-size: 1.1rem;
                padding: 0.6rem 0.6rem;
                

                &:hover {
                    background-color: rgba(0,0,0,0.10);
                    border-radius: 0.2rem;
                }

                &:active {
                    background-color: rgba(0,0,0,0.10);
                }
            }
        }

    }
`
