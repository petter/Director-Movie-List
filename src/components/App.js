import React, { useEffect } from 'react';
import * as api from '../api';

const App = () => {
	useEffect(() => {
		api.getProgramWithMovieData('16.9.2019').then(data => console.log(data));
	}, []);
	return <h1>Dab</h1>;
};

export default App;
