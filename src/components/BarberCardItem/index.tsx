
import { BarbersHome } from '../../Interfaces'
import { StarsComponent } from '../Stars'

import { Card, CardInfo} from './styles'

import { Link } from 'react-router-dom'

interface BarberProps {
    barber: BarbersHome,
}

export function BarberCardItem({barber}: BarberProps) {

    return (
        <>
            <Link to={{pathname: `/services/${barber?.id}`}}>
                <Card>
                    <CardInfo>
                        <img src={barber?.avatar_url} alt={barber?.name}  />

                        <div>
                            <p>{barber?.name}</p>
                            
                            <StarsComponent stars={barber?.stars} />
                        </div>
                    </CardInfo>
                </Card>
            </Link>
        </>
    )
}




