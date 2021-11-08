import { UserProvider } from './Contexts/useUser';
import { Routes } from './Routes.js';

import { GlobalStyle } from './styles/global'


function App() {

	return (
		<UserProvider>
			<GlobalStyle />

			<Routes />
		</UserProvider>
	);
}

export default App;
