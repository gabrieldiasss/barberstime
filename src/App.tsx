import { Routes } from './Routes.js';

import { GlobalStyle } from './styles/global'
import { AppointmentsProviders } from './Contexts/useAppointments'

function App() {

	return (
		<AppointmentsProviders>
			<GlobalStyle />

			<Routes />
		</AppointmentsProviders>
	);
}

export default App;
