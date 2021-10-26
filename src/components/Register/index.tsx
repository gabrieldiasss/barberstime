import { Main, Authenticates, Top } from './styles'
import { IconContext } from 'react-icons'

import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { BsArrow90DegLeft } from "react-icons/bs"
import { Link } from 'react-router-dom';

export function Register() {

    return (
        <>
        
                <Top>
                    
                        <IconContext.Provider value={{ className: "react-icons" }} >
                            <Link to="/" >
                                <BsArrow90DegLeft />
                            </Link>
                        </IconContext.Provider>
                    
                    <header>
                        <h1><span>time</span>forbarber</h1>
                    </header>
                </Top>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
                    <path fill="#3B63FE" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,144C480,128,600,128,720,160C840,192,960,256,1080,277.3C1200,299,1320,277,1380,266.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg> 
            
                {/* 3B63FE */}

                <Main>

                    <div>

                        <h2>Crie sua conta</h2>

                        <form>
                            <input type="text" placeholder="Nome" />

                            <input type="email" placeholder="Email" />

                            <input type="password" placeholder="Senha" />

                            <button type="submit">
                                Cadastre-se
                            </button>
                        </form>

                        <p>Esqueceu a senha?</p>
                    </div>

                    <Authenticates>

                        <span>ou</span>
                        
                        <div>
                            <IconContext.Provider value={{size: "1.8rem"}}>
                                <GrFacebookOption color="#385C8E" />
                                <FcGoogle  />
                                <FaTwitter color='#03A9F4' />
                            </IconContext.Provider>
                        </div>

                    </Authenticates>
                
                </Main>

        </>
    )
}