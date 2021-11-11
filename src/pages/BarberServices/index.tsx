
import { useEffect, useState } from "react"
import { IconContext } from "react-icons"

import { Link, useParams } from "react-router-dom"
import { StarsComponent } from "../../components/Stars"
import { api } from "../../services/api"

import { BsArrow90DegLeft } from "react-icons/bs"

import { Container, Top, Main, HeaderInfo, ServicesInfo, Loading } from './styles'
import { BarberModal } from "../../components/BarbelModal"
import { Barbers, Services } from "../../Interfaces"

export function BarberServices() {

    const [barber, setBarber] = useState({} as Barbers)

    const [loading, setLoading] = useState(false)
    const [modalBarberIsOpen, setModalBarberIsOpen] = useState(false)

    const [selectedService, setSelectedService] = useState({} as Services)

    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        api.get(`/barbers/${id}`)
        .then(response => {
            setBarber(response.data)
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

    function handleOpenModal(infos: Services): void {
        setSelectedService(infos)
        setModalBarberIsOpen(true)
    }

    function handleCloseModal() {
        setModalBarberIsOpen(false)
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

                    {barber.services.map((service) => (
                        <div className="servicesItem" key={service.id}>
                            <div >
                                <p>{service.name}</p>
                                <span>
                                    { new Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(service.price)}
                                </span>  
                            </div>

                            <button onClick={() => handleOpenModal(service)} >Agendar</button>
                            
                        </div>
                    ))}
                </ServicesInfo>

            </Main>
            
            <BarberModal 
                isOpen={modalBarberIsOpen}
                onRequestClose={handleCloseModal}
                barber={barber}
                service={selectedService}
            />

        </Container>
    )
}