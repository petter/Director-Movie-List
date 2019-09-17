import React, { useState } from 'react';

const DirectorForm = () => {
	const [input, setInput] = useState('');
	return (
		<form
			onSubmit={event => {
				event.preventDefault();
			}}
		>
			<input
				type="text"
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
			<button type="submit"></button>
		</form>
	);
};

export default DirectorForm;
