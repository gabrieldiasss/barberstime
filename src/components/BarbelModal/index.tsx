import Modal from 'react-modal'
import { Barbers, Services} from '../../Interfaces';

import { Main, CardBarber, CardServiceSelected } from './styles'

Modal.setAppElement('#root');

interface BarberModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
    barber: Barbers,
    service: Services
}

export function BarberModal({isOpen, onRequestClose, barber, service}: BarberModalProps) {

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

                <button>Finalizar atendimento</button>
            </Main>
            
        </Modal>
    )
}