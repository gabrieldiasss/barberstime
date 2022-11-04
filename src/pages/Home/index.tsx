import { Container, InputFake, Loading } from './styles'

import { BiSearchAlt2 } from 'react-icons/bi'

import { BarberCardItem } from "../../components/BarberCardItem"
import { BottomMenu } from '../../components/BottomMenu'
import { useEffect, useState } from 'react'
import { Barbers, BarbersHome } from '../../Interfaces'
import { Navbar } from '../../components/Navbar'
import axios from 'axios'

export function Home() {

    const [barbers, setBarbers] = useState<BarbersHome[]>([])
    const [searchBarber, setSearchBarber] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {

            let params: any = {}

            if(searchBarber) {
                params.name_like = searchBarber
            } 

            axios.get("https://api-braga.herokuapp.com/api/barbers", {
                params,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },

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

    

    return (
        <>
            <Navbar />

            <Container>
            
                <h1>Escolha o seu barbeiro favorito</h1>

                <InputFake>
                    <BiSearchAlt2 className="search-icon" />
                    <input type="text" value={searchBarber} onChange={(e) => setSearchBarber(e.target.value)} />
                </InputFake>

                {barbers.map((barber, key) => (
                    <BarberCardItem key={key} barber={barber}/>
                ))}        

                {barbers.length === 0 && <h3 style={{marginTop: "25px"}} >Barbeiro não encontrado =(</h3>}

                <BottomMenu />
            </Container>
        </>
        
    )
}