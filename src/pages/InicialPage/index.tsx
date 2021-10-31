import { Link } from 'react-router-dom'
import { Container, Top, Bottom } from './styles'

export function InicialPage() {

    return (
        <Container>

            <Top>
                <h1><span>barbers</span>time</h1>
            </Top>

                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
                    <path fill="#3B63FE" fillOpacity="1" d="M0,224L60,208C120,192,240,160,360,144C480,128,600,128,720,160C840,192,960,256,1080,277.3C1200,299,1320,277,1380,266.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg> 
                
                {/* 3B63FE */}

            <Bottom>

                    <button className="login">
                        <Link to="/login">
                            Login
                        </Link>
                    </button>
                
                <button className="register">
                    <Link to="/register">
                        Cadastre-se
                    </Link>
                </button>
            </Bottom>
            
        </Container>
    )
}