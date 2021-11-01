import { Container, InputFake, Loading } from './styles'

import { useHistory } from 'react-router-dom'

import { BiSearchAlt2 } from 'react-icons/bi'
import { BarberCardItem } from "../../components/BarberCardItem"
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Barbers } from '../../Interfaces'

export function Home() {

    const [barbers, setBarbers] = useState<Barbers[]>([])
    const [searchBarber, setSearchBarber] = useState("")
    const [loading, setLoading] = useState(false)

    let history = useHistory()

    useEffect(() => {

            let params: any = {}

            if(searchBarber) {
                params.name_like = searchBarber
            } 

            api.get("/barbers", {
                params,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
            .then((response) => {
                setBarbers(response.data)
                setLoading(true)
            })

    }, [searchBarber])

    if(!loading) {
        return (
            <Loading>
                <div className="loadingio-spinner-spin-q9009gkv1x"><div className="ldio-6mzwot4130t">
                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                </div></div>
            </Loading>
        )
    }

    function handleLogout() {
        localStorage.removeItem("accessToken")
        history.push("/")
    }


    return (
        <Container>
            <h1>Escolha o seu barbeiro favorito</h1>

            <InputFake>
                <BiSearchAlt2 className="search-icon" />
                <input type="text" value={searchBarber} onChange={(e) => setSearchBarber(e.target.value)} />
            </InputFake>

            {barbers.map(barber => (
                <BarberCardItem key={barber.id} barber={barber}/>
            ))}        

            {barbers.length === 0 && <h3 style={{marginTop: "25px"}} >Barbeiro não encontrado =(</h3>}

            <button onClick={handleLogout} >logout</button>

        </Container>
    )
}