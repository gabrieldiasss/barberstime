import Modal from "react-modal";
import { BarberAppointment } from "../../Interfaces";

import { Main, ButtonNo } from './styles'

interface BarberModalCancelScheduleProps {
    isOpen: boolean;
    onRequestClose: () => void;
    handleCancelSchedule(DeleteAppointmentById: number): void;
    selectedCancel: BarberAppointment;
}

export function BarbelModalCancelSchedule({isOpen, onRequestClose, handleCancelSchedule, selectedCancel}: BarberModalCancelScheduleProps) {

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

                <ButtonNo onClick={onRequestClose} className="btn-no" >NÃO</ButtonNo>
                <button onClick={() => handleCancelSchedule(selectedCancel.id)} className="btn-cancel" >SIM</button>
            </Main>
            
        </Modal>
    
    )
}