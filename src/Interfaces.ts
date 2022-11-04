export interface Barbers {
    barber: {
        id: number;
        avatar_url: string;
        name: string;
        stars: number;
        services: Services[];
    }
    available: Available[];

}

export interface BarbersHome {
    id: number;
    avatar_url: string;
    name: string;
    stars: number;
}

export interface Services {
    id: number;
    name: string;
    price: number;
}

export interface Available {
    id: number;
    barber_id: number;
    date: string;
    hours: string[];
}

export interface Appointment {
    id: number,
    barber: Barbers,
    service: Services,
    selectedYear: number,
    selectedMonth1: number,
    selectedDay: number,
    selectedHour: number
}

export interface BarberAppointment {
	id: number;
  	name: string;
	avatar_url: string;
	price_service: number;
	selectedDay: number;
	selectedMonth: number;
	selectedYear: number;
	selectedHour: number;
}

export type Dispatch = (value: BarberAppointment[]) => void