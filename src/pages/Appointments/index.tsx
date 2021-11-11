import { BottomMenu } from "../../components/BottomMenu"

import { Container, CardAppointment, CardService, CardSchedules, Loading} from './styles'

import { useAppointment } from '../../Contexts/useAppointments'
import { useState } from 'react'
import { BarbelModalCancelSchedule } from '../../components/BarbelModalCancelSchedule'
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

export function Appointments() {

    const { appointments, setAppointments, loadingAppointments } = useAppointment()

    const [modalCancelIsOpen, setModalCancel] = useState(false)

    function handleOpenModal() {
        setModalCancel(true)
    }

    function handleCloseModal() {
        setModalCancel(false)
    }

    async function handleCancelSchedule(id: number) {

        await axios.delete(`http://localhost:5000/schedules/${id}`)

        setAppointments(appointments.filter(schedule => schedule.id !== id))

        setModalCancel(false)
        toast.success("O agendamento foi cancelado.")

    }

    if(!loadingAppointments) {
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

            <ToastContainer autoClose={3000} />

            <h1>Meus agendamentos</h1>

            {appointments.length === 0 &&
                <h4>Você ainda não tem um horário marcado =(</h4>
            }

            {appointments.map((appointment) => (
                <CardAppointment key={appointment.id} >
                    <header>
                        <img src={appointment.barber.avatar_url} alt="" />
                        <h2>{appointment.barber.name}</h2>
                    </header>

                    <CardService>
                        <h3>{appointment.service.name}</h3>

                        <h3> { new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(appointment.service.price)}</h3>
                    </CardService>

                    <CardSchedules>
                        <div>
                            {appointment.selectedDay}/{appointment.selectedMonth1}/{appointment.selectedYear}
                        </div>

                        <div>
                            {appointment.selectedHour}
                        </div>
                    </CardSchedules>

                    <button onClick={handleOpenModal} >Cancelar agendamento</button>

                    <BarbelModalCancelSchedule
                        isOpen={modalCancelIsOpen}
                        onRequestClose={handleCloseModal}
                        handleCancelSchedule={handleCancelSchedule}
                        appointment={appointment}
                    />
                </CardAppointment>
            ))}
            
            <BottomMenu />

        </Container>
    )
}