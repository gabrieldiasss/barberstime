import { Link } from 'react-router-dom'
import { Header, Container } from './styles'

export function Navbar() {

    return (
        <Header>
            <Container>
                <div>
                    <h2><Link to="/" >barbers<span>time</span></Link></h2>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/" >HOME</Link></li>
                        <li><Link to="/myappointments" >AGENDAMENTOS</Link></li>
                        <li><Link to="/profile" >PERFIL</Link></li>
                    </ul>
                </nav>
            </Container>
        </Header>
    )
}