import React, { useEffect } from 'react';
import * as api from '../api';

const App = () => {
	useEffect(() => {
		api.getDirector('Quentin');
	}, []);
	return (
		<>
			<header></header>
			<main>
				<form>
                    <input type="text" onChange={(e) => }
                </form>
			</main>
		</>
	);
};

export default App;
