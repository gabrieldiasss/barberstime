/* eslint-disable react-hooks/exhaustive-deps */
import Modal from 'react-modal'
import { Available, Barbers, Services} from '../../Interfaces';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import { Main, CardBarber, CardServiceSelected, CardDays, CardHours, Month, Days} from './styles'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { useAppointment } from '../../Contexts/useAppointments';
import axios from 'axios';

Modal.setAppElement('#root');

interface BarberModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
    barber: Barbers,
    service: Services
}

interface ListDays {
    status: boolean,
    weekday: string,
    number: number,
}

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio", 
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const days = [
    "Dom",
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sab"
];

export function BarberModal({isOpen, onRequestClose, barber, service}: BarberModalProps) {

    let history = useHistory()


    const { appointments, setAppointments } = useAppointment()

    const [selectedYear, setSelectedYear] = useState(0)
    const [selectedMonth, setSelectedMonth] = useState(0)

    const [selectedDay, setSelectedDay] = useState(0)
    const [selectedHour, setSelectedHour] = useState<number | string | Available | null>(0)

    const [listDays, setListDays] = useState<ListDays[]>([])
    const [listHours, setListHours] = useState<Available[] | string[]>([])

    let userId = localStorage.getItem("infoUserId")
    let nameUser = localStorage.getItem("infoUserName")

    useEffect(() => {
        if(selectedDay > 0) {
            let d = new Date(selectedYear, selectedMonth, selectedDay)

            let year = d.getFullYear()
            let month: any = d.getMonth() + 1
            let day: any = d.getDate()

            month = month < 10 ? '0'+month : month
            day = day < 10 ? '0'+day : day

            let selDate = year+'-'+month+'-'+day

            let availability: Available[] = barber.available.filter(e => e.date === selDate)

            if(availability.length > 0) {
                setListHours( availability[0].hours )
            }

        }
        setSelectedHour(null)
    }, [selectedDay])

    useEffect(() => {
        let daysInMonth = new Date(selectedYear, selectedMonth+1, 0).getDate()
        let newListDays: ListDays[] = []

        for(let i=1;i <= daysInMonth; i++) {

            let d = new Date(selectedYear, selectedMonth, i)
            let year = d.getFullYear()
            let month: any = d.getMonth() + 1
            let day: any = d.getDate()

            month = month < 10 ? '0'+month : month
            day = day < 10 ? '0'+day : day

            let selDate = year+'-'+month+'-'+day

            let availability = barber.available.filter(e => e.date === selDate)

            newListDays.push({
                status: availability.length > 0 ? true : false,
                weekday: days[ d.getDay() ],
                number: i
            })

        }

        setListDays(newListDays)
        setSelectedDay(0)
        setListHours([])
        setSelectedHour(0)
        
    }, [selectedMonth, selectedYear])

    useEffect(() => {
        let id = localStorage.getItem("infoUserId")

        let today = new Date()
        setSelectedYear( today.getFullYear() )
        setSelectedMonth( today.getMonth() )
        setSelectedDay(today.getDate())

        axios.get(`http://localhost:5000/schedules?userId=${id}`)
        .then((response) => {
            setAppointments(response.data)
        })

    }, [])

   function handleLeftClick() {
        let mountDate = new Date(selectedYear, selectedMonth, 1)
        mountDate.setMonth( mountDate.getMonth() - 1 )
        setSelectedYear(mountDate.getFullYear())
        setSelectedMonth(mountDate.getMonth())
        setSelectedDay(0)
   }

   function handleLRightClick() {
        let mountDate = new Date(selectedYear, selectedMonth, 1)
        mountDate.setMonth( mountDate.getMonth() + 1 )
        setSelectedYear(mountDate.getFullYear())
        setSelectedMonth(mountDate.getMonth())
        setSelectedDay(0)
   }

     async function handleFinishSchedule() {

         if (appointments.length === 0) {

            if ( barber.id && service != null && selectedYear > 0 && selectedMonth > 0 && selectedDay > 0 && selectedHour != null) {

                let selectedMonth1 = selectedMonth + 1
               
                const data = {
                    barber: barber.name,
                    service, 
                    selectedYear, 
                    selectedMonth1, 
                    selectedDay, 
                    selectedHour,
                    userId,
                    nameUser
                }

                await axios.post("http://localhost:5000/schedules", data)
    
                history.push("/myappointments")

                } else {
                    toast.error("Selecione o horário corretamente.")
                }

         }  else {
            toast.error("Não é possível agendar mais de um horário.")
            console.log("Erro")
        } 
   }

    return (
        
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <ToastContainer autoClose={3000} />

            <Main>
                <CardBarber>
                    <img src={barber.avatar_url} alt="" />
                    <h2>{barber.name}</h2>
                </CardBarber>
                <CardServiceSelected>
                    <h2>{service.name}</h2>
                    <h2>
                    { new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(service.price)}
                    </h2>
                </CardServiceSelected>

                <CardDays>
                    <Month>
                        <RiArrowLeftSLine className="arrow" onClick={handleLeftClick} />
                        <h2>{months[selectedMonth]} {selectedYear}</h2>
                        <RiArrowRightSLine className="arrow" onClick={handleLRightClick} />
                    </Month>

                    <Days >
                        {listDays.map((item, key) => (
                            <div
                                key={key} 
                                style={{ opacity: item.status ? 1 : 0.5, 
                                    backgroundColor: item.number === selectedDay ? '#F19108' : '#29282D',
                                    color: item.number === selectedDay ? '#fff' : '#fff'
                                }} 
                                onClick={() => item.status ? setSelectedDay(item.number) : null} 
                            >
                                <h3>{item.weekday}</h3>
                                <h2>{item.number}</h2>
                            </div>
                        ))}
                    </Days>
                    
                </CardDays>

                {listHours.length > 0 &&

                    <CardHours>                 
                            {listHours.map((item, key) => (
                                <div 
                                    key={key} 
                                    onClick={() => setSelectedHour(item)} 
                                    style={{
                                        backgroundColor: item === selectedHour ? '#F19108' : '#29282D',
                                        color: item === selectedHour ? '#fff' : '#fff'
                                    }}
                                >
                                    <h2>{item}</h2>
                                </div>
                            ))}
                    </CardHours>
                }

                <button type="submit" onClick={handleFinishSchedule} >Finalizar atendimento</button>
            </Main>
            
        </Modal>
    )
}