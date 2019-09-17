import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as directorActions from '../store/actions/director';

const DirectorForm = ({ addDirector }) => {
	const [input, setInput] = useState('');
	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				addDirector(input);
				setInput('');
			}}
		>
			<input
				type="text"
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		addDirector: name => dispatch(directorActions.directorRequest(name))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(DirectorForm);
