import { useForm, SubmitHandler } from 'react-hook-form'

import axios from 'axios'

import { Main, Authenticates, Top } from './styles'
import { IconContext } from 'react-icons'

import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { BsArrow90DegLeft } from "react-icons/bs"
import { Link, useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

type RegisterUsers = {
    name: string;
    email: string;
    password: string;
}

export function Register() {

    let history = useHistory()

    const [loading, setLoading] = useState(false)

    const { register, handleSubmit} = useForm<RegisterUsers>()

    const onSubmit: SubmitHandler<RegisterUsers> = (data) => axios.post("https://login-api-gabriel.herokuapp.com/auth/register", data) 
    
    .then((response) => {
        const { data: { token } } = response


        if(response.data) {
            localStorage.setItem("accessToken", token )
            history.push("/home")
        }

        setLoading(false)

    })

    .catch((err) => {
        toast.error(err?.response?.data?.error)
        toast.error(err?.response?.data?.errInvalid?.message)
        setLoading(false)
    })

    function handleLoading() {
        setLoading(true)
    }

    return (
        <>
                <Top>

                <ToastContainer
                    autoClose={3000}
                />
                    
                        <IconContext.Provider value={{ className: "react-icons" }} >
                            <Link to="/" >
                                <BsArrow90DegLeft />
                            </Link>
                        </IconContext.Provider>
                    
                    <header>
                        <h1><span>barbers</span>time</h1>
                    </header>
                </Top>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
                    <path fill="#3B63FE" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,144C480,128,600,128,720,160C840,192,960,256,1080,277.3C1200,299,1320,277,1380,266.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg> 
            
                {/* 3B63FE */}

                <Main>

                    <div>

                        <h2>Crie sua conta</h2>

                        <form onSubmit={handleSubmit(onSubmit)} >
                            <input type="text" placeholder="Nome" {...register("name")} />

                            <input type="email" placeholder="Email" {...register("email")} />

                            <input type="password" placeholder="Senha" {...register("password")} />

                            <button type="submit" onClick={handleLoading}>
                                { loading && <div className="loadingio-spinner-rolling-yi8phtw2ml"><div className="ldio-zbpv5ybpu8e">
                                <div></div>
                                </div></div>}

                                {!loading && <>Cadastrar</> }
                            </button>
                        </form>

                        <p>Já tem uma conta? 
                            <Link to="/login">
                                Entrar
                            </Link>
                        </p>
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