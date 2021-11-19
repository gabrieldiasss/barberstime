import { useHistory } from 'react-router-dom'

import { Container, CardProfile } from './styles'
import { BottomMenu } from '../../components/BottomMenu'

import Logout from '../../assets/logout.svg'

import { useAppointment } from '../../Contexts/useAppointments'
import { Navbar } from '../../components/Navbar'

export function Profile() {

    let history = useHistory()

    const { setAppointments } = useAppointment()

    let nameUser = localStorage.getItem("infoUserName")

    function handleLogout() {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("infoUserName")
        localStorage.removeItem("infoUserId")

        setAppointments([])

        history.push("/login")
    }

    return (
        <>
             <Navbar />
            <Container>
                <h1>Meu perfil</h1>

                <CardProfile>
                    <img src="https://www.kindpng.com/picc/m/165-1652289_barber-shop-model-png-transparent-png.png" alt="" />
                    <div>
                        <h2>{nameUser}</h2>
                        <button onClick={handleLogout}>
                                <img className="logout" src={Logout} alt="" />
                            Sair
                        </button>
                    </div>

                    
                    
                </CardProfile>
                
                
                <BottomMenu />
            </Container>
        </>
       
    )
}