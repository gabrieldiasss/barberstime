/* eslint-disable react-hooks/exhaustive-deps */
import Modal from 'react-modal'
import { Available, Barbers, Services} from '../../Interfaces';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import { Main, CardBarber, CardServiceSelected, CardDays, CardHours, Month, Days} from './styles'
import { useEffect, useState } from 'react';
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

interface Schedules {
    barber: Barbers[],
    service: string,
    selectedYear: string,
    selectedMonth: string,
    selectedDay: string,
    selectedHour: string
}

export function BarberModal({isOpen, onRequestClose, barber, service}: BarberModalProps) {

    const [selectedYear, setSelectedYear] = useState(0)
    const [selectedMonth, setSelectedMonth] = useState(0)

    const [selectedDay, setSelectedDay] = useState(0)
    const [selectedHour, setSelectedHour] = useState<number | string | Available | null>(0)

    const [listDays, setListDays] = useState<ListDays[]>([])
    const [listHours, setListHours] = useState<Available[] | string[]>([])

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
        "Dezembro",
    ]

    const days = [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sab",
    ]

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
        let today = new Date()
        setSelectedYear(today.getFullYear())
        setSelectedMonth(today.getMonth())
        setSelectedDay(today.getDate())
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

       if ( barber.id && service != null && selectedYear > 0 && selectedMonth > 0 && selectedDay > 0 && selectedHour != null) {

        const data = {
            barber,
            service, 
            selectedYear, 
            selectedMonth, 
            selectedDay, 
            selectedHour,
            
        }

        const response = await axios.post("http://localhost:5000/schedules", data)
        const dataConsole = await response.data
        console.log(dataConsole)

       } else {
            console.log("erro")
       }
   }

    return (
        
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

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
                                    backgroundColor: item.number === selectedDay ? '#3B4CE6' : '#fff',
                                    color: item.number === selectedDay ? '#fff' : '#000'
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
                                        backgroundColor: item === selectedHour ? '#3B4CE6' : '#fff',
                                        color: item === selectedHour ? '#fff' : '#000'
                                    }}
                                >
                                    <h2>{item}</h2>
                                </div>
                            ))}
                    </CardHours>
                }
                
                <button onClick={handleFinishSchedule} >Finalizar atendimento</button>
            </Main>
            
        </Modal>
    )
}