import { Main, Top, Svg } from './styles'

import { Link, useHistory } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

type LoginUser = {
    email: string;
    password: string;
}

export function Login() {

    let history = useHistory()

    const [loading, setLoading] = useState(false) 

    const { register, handleSubmit} = useForm<LoginUser>()

    const onSubmit: SubmitHandler<LoginUser> = (data) => axios.post("https://api-braga.herokuapp.com/api/login", data)
       
    .then((response) => {

        const { data: { token, user } } = response

        if(response.data) {
            localStorage.setItem("accessToken", token)
            localStorage.setItem("infoUserName", user.name)
            localStorage.setItem("infoUserId", user.id)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        history.push("/")
        
        setLoading(false)
    })
    .catch((err) => {
        toast.error(err?.response?.data?.error)
        toast.error(err?.response?.data?.message)
        setLoading(false)
    })



    function handleLoading() {
        setLoading(true)
        console.log(loading)

    }

    return (
        <>
    
                <Top>

                    <ToastContainer
                        autoClose={3000}
                    />
                    
                    <header>
                        <h1><span>barbers</span>time</h1>
                    </header>
                </Top>


                <Svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
                        <path fill="#29282D" fillOpacity="1" d="M0,224L60,208C120,192,240,160,360,144C480,128,600,128,720,160C840,192,960,256,1080,277.3C1200,299,1320,277,1380,266.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg> 
                </Svg>
    
                <Main>

                    <div>

                        <h2>Faça login com a sua conta</h2>

                        <form onSubmit={handleSubmit(onSubmit)} >
                            <input type="text" placeholder="Email" autoComplete="off" {...register("email")} />

                            <input type="password" placeholder="Senha" autoComplete="off" {...register("password")} />

                            <button type="submit" onClick={handleLoading}>
                                { loading && <div className="loadingio-spinner-rolling-yi8phtw2ml"><div className="ldio-zbpv5ybpu8e">
                                <div></div>
                                </div></div>}

                                { !loading && <>Logar</> }
                                
                            </button>
                        </form>

                        <p>
                            Não tem uma conta?
                            <Link to="/register" >
                                Cadastre-se
                            </Link>
                        </p>
                    </div>

                </Main>

                

        </>
        
    )
}