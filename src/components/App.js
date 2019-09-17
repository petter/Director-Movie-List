import React, { useEffect } from 'react';
import * as api from '../api';
import DirectorForm from './DirectorForm';

const App = () => {
	useEffect(() => {
		api.getDirector('Quentin');
	}, []);
	return (
		<>
			<header></header>
			<main>
				<DirectorForm />
			</main>
		</>
	);
};

export default App;
