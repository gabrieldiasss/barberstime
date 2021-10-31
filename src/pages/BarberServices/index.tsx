
import { useEffect, useState } from "react"
import { IconContext } from "react-icons"

import { Link, useParams } from "react-router-dom"
import { StarsComponent } from "../../components/Stars"
import { api } from "../../services/api"

import { BsArrow90DegLeft } from "react-icons/bs"

import { Container, Top, Main, HeaderInfo, ServicesInfo, Loading } from './styles'

interface Barber {
    id: number;
    name: string,
    avatar_url: string,
    stars: number
}

interface Services {
    name: string,
    price: number
}

export function BarberServices() {

    const [barber, setBarber] = useState({} as Barber)
    const [services, setServices] = useState<Services[]>([])
    const [loading, setLoading] = useState(false)

    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        api.get(`/barbers/${id}`)
        .then(response => {
            setBarber(response.data)
            setServices(response.data.services)
            setLoading(true)
        })
        .catch(err => {
            console.log(err)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(!loading) {
        return (
            <Loading>
                <div className="loadingio-spinner-spin-q9009gkv1x"><div className="ldio-6mzwot4130t">
                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                </div></div>
            </Loading>
        )
    }

    return (
        <Container>

            <Top>
                <IconContext.Provider value={{ className: "react-icons" }} >
                            <Link to="/home" >
                                <BsArrow90DegLeft />
                            </Link>
                        </IconContext.Provider>
                </Top>

            <Main>
                <header>
                    <img src={barber.avatar_url} alt="" />

                    <HeaderInfo>
                        <h2>{barber.name}</h2>
                        <StarsComponent stars={barber.stars} />
                    </HeaderInfo>
                    
                </header>
                
                
                <ServicesInfo>
                    <h2>Escolher serviço</h2>

                    {services.map((service, key ) => (
                        <div className="servicesItem" key={key}>
                            <div >
                                <p>{service.name}</p>
                                <span>
                                    { new Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(service.price)}
                                </span>  
                            </div>

                            <button>Agendar</button>
    
                        </div>
                    ))}
                </ServicesInfo>
                
            </Main>

        </Container>
    )
}