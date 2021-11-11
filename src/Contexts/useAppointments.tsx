import axios from "axios"
import { useEffect, useState, createContext, useContext, ReactNode } from "react"
import { Appointment, Available, Barbers, Dispatch, Services } from "../Interfaces"

interface AppointmentContextData {
    appointments: Appointment[];
    setAppointments: Dispatch;
    createAppointment: (scheduleService: ScheduleService) => Promise<void>;
    loadingAppointments: boolean;
}

interface ScheduleService {
    barber: Barbers,
    service: Services,
    selectedYear: number,
    selectedMonth1: number,
    selectedDay: number,
    selectedHour: number | string | Available,
    userId: string | null,
    nameUser: string | null
}

interface AppointmentProviderProps {
    children: ReactNode;
}

export const AppointmentsContext = createContext<AppointmentContextData>({} as AppointmentContextData)

export function AppointmentsProviders({children}: AppointmentProviderProps) {

    let id = localStorage.getItem("infoUserId")

    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [loadingAppointments, setLoadingAppointments] = useState(false)

    useEffect(() => {

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

    async function createAppointment(scheduleService: ScheduleService) {
       const response = await axios.post("http://localhost:5000/schedules", scheduleService )
        const appointment = response.data
        setAppointments([...appointments, appointment])
    }

    return (
        <AppointmentsContext.Provider value={{ appointments, setAppointments, createAppointment, loadingAppointments}} >
            {children}
        </AppointmentsContext.Provider>
    )
}

export function useAppointment() {
    const context = useContext(AppointmentsContext)

    return context
}  
