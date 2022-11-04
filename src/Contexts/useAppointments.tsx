import { useState, createContext, useContext, ReactNode } from "react";
import { BarberAppointment, Dispatch } from "../Interfaces";

interface AppointmentContextData {
  appointments: BarberAppointment[];
  setAppointments: Dispatch;
}

interface AppointmentProviderProps {
  children: ReactNode;
}

export const AppointmentsContext = createContext<AppointmentContextData>(
  {} as AppointmentContextData
);

export function AppointmentsProviders({ children }: AppointmentProviderProps) {
  const [appointments, setAppointments] = useState<BarberAppointment[]>([]);

  return (
    <AppointmentsContext.Provider value={{ appointments, setAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentsContext);

  return context;
}
