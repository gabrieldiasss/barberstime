import { Link } from 'react-router-dom'
import { BottomMenuSection, HomeIcon, ScheduleIcon, ProfileIcon } from './styles'

export function BottomMenu() {

    return (
        <BottomMenuSection>
                <Link to="/">
                    <HomeIcon />
                </Link>
                
                <Link to="/myappointments" >
                    <ScheduleIcon />
                </Link>
                
                <Link to="/profile">
                    <ProfileIcon  />
                </Link>
                
        </BottomMenuSection>
    )
}