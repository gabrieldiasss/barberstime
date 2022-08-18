import { BottomMenu } from "../../components/BottomMenu"

import { Container, CardAppointment, CardService, CardSchedules, Loading} from './styles'

import { useAppointment } from '../../Contexts/useAppointments'
import { useEffect, useState } from 'react'
import { BarbelModalCancelSchedule } from '../../components/BarbelModalCancelSchedule'
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import { Navbar } from "../../components/Navbar"
import { Appointment } from "../../Interfaces"

export function Appointments() {

    const { appointments, setAppointments } = useAppointment()
    
    const [modalCancelIsOpen, setModalCancel] = useState(false)

    const [selectedCancel, setSelectedCancel] = useState({} as Appointment)

    const [loadingAppointments, setLoadingAppointments] = useState(false)

    function handleOpenModal(appointmentInfos: Appointment) {
        setModalCancel(true)
        setSelectedCancel(appointmentInfos)
    }

    function handleCloseModal() {
        setModalCancel(false)
    }

    useEffect(() => {

        let id = localStorage.getItem("infoUserId")

        axios.get(`http://localhost:5000/schedules?userId=${id}`)

        .then((response) => {
            setAppointments(response.data)
            setLoadingAppointments(true)
        })
        .catch(err => {
            console.log(err)
            setLoadingAppointments(true)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleCancelSchedule(DeleteAppointmentById: number) {

        axios.delete(`http://localhost:5000/schedules/${DeleteAppointmentById}`)

        setAppointments(appointments.filter((schedule) => schedule.id !== DeleteAppointmentById))

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
        <>
         <Navbar />

         <ToastContainer autoClose={3000} />

         <Container>

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

                    <button onClick={() => handleOpenModal(appointment)} >Cancelar agendamento</button>

                    <BarbelModalCancelSchedule
                        isOpen={modalCancelIsOpen}
                        onRequestClose={handleCloseModal}
                        handleCancelSchedule={handleCancelSchedule}
                        selectedCancel={selectedCancel}
                    />
                </CardAppointment>
            ))}

            <BottomMenu />

            </Container>

        </>
       
    )
}