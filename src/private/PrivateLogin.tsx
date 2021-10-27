import { Redirect, Route } from 'react-router-dom'

function PrivateLogin(props: any) {
    const isLogged = localStorage.getItem("accessToken")
    return isLogged ? <Redirect to="/home" /> : <Route {...props} />
}

export default PrivateLogin