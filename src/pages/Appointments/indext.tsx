import axios from "axios"
import { useEffect, useState } from "react"
import { Barbers, Services } from "../../Interfaces"

import { Container, CardAppointment, CardService, CardSchedules} from './styles'

interface Appointment {
    barber: Barbers,
    service: Services,
    selectedYear: number,
    selectedMonth: number,
    selectedDay: number,
    /* selectedHour: number */
}

export function Appointments() {

    const [appointments, setAppointments] = useState<Appointment[]>([])

    useEffect(() => {
        axios.get(`http://localhost:5000/schedules`)
        .then((response) => {
            setAppointments(response.data)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    return (
        <Container>
            <h1>Meus agendamentos</h1>

            {/* {appointments.map((item, key) => (
                <div key={key} >
                    {item.barber.name}
                    {item.barber.avatar_url}
                </div>
            ))} */}

            {appointments.map((appoitment, key) => (
                <CardAppointment>
                    <header>
                        <img src={appoitment.barber.avatar_url} alt="" />
                        <h2>{appoitment.barber.name}</h2>
                    </header>

                    <CardService>
                        <h3>{appoitment.service.name}</h3>

                        <h3> { new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(appoitment.service.price)}</h3>
                    </CardService>

                    <CardSchedules>
                        <div>
                            {appoitment.selectedDay}/{appoitment.selectedMonth}/{appoitment.selectedYear}
                        </div>

                        <div>
                            15:00
                        </div>
                    </CardSchedules>
                </CardAppointment>
            ))}
            


        </Container>
    )
}