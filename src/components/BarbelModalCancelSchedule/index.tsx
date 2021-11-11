import Modal from "react-modal";
import { Appointment } from "../../Interfaces";

import { Main } from './styles'

interface BarberModalCancelScheduleProps {
    isOpen: boolean;
    onRequestClose: () => void;
    appointment: Appointment;
    handleCancelSchedule(id: number): void;
}

export function BarbelModalCancelSchedule({isOpen, onRequestClose, handleCancelSchedule, appointment}: BarberModalCancelScheduleProps) {

    return (
        
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-cancel-overlay"
            className="react-modal-cancel-content"
        >
            <Main>
                <h2>
                    Você deseja mesmo cancelar esse agendamento?
                </h2>

                <button onClick={onRequestClose} className="btn-no" >NÃO</button>
                <button onClick={() => handleCancelSchedule(appointment.id)} className="btn-cancel" >SIM</button>
            </Main>
            
        </Modal>
        
        
    )
}