import axios from "axios"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useHistory } from "react-router"
import { toast } from "react-toastify"

type LoginUser = {
    email: string;
    password: string;
}

type Dispatch<A> = (value: A) => void

interface UserContextData {
    loading: boolean;
    setLoading: Dispatch<boolean>;
    register: any;
    handleSubmit: any;
    onSubmit: any;
    userState: User;
}

interface UserProviderProps {
    children: ReactNode
}

interface User {
    _id: string,
    name: string
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider({children}: UserProviderProps) {

    let history = useHistory()

    const [loading, setLoading] = useState(false) 

    const [userState, setUser] = useState<User>({} as User)

    const { register, handleSubmit} = useForm<LoginUser>()

    const onSubmit: SubmitHandler<LoginUser> = (data) => axios.post("https://login-api-gabriel.herokuapp.com/auth/authenticate", data) 
    .then((response) => {

        /* console.log({ response }) */

        setUser(response.data.user)

        const { data: { token } } = response

        if(response.data) {
            localStorage.setItem("accessToken", token )
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        history.push("/home")
        
        setLoading(false)
    })
    .catch((err) => {
        toast.error(err?.response?.data?.error)
        toast.error(err?.response?.data?.errInvalid?.message)
        setLoading(false)
    })

    return (
        <UserContext.Provider value={{ loading, setLoading, register, handleSubmit, onSubmit, userState }} >
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)

    return context
} 