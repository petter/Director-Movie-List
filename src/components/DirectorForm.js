import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { InputField, Button } from '@dhis2/ui-core';

import * as directorActions from '../store/actions/director';

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 0.5rem;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 1em 0;

	@media (min-width: 700px) {
		grid-template-columns: 1fr auto;
	}
`;

const StyledInputField = styled(InputField)`
	width: 100%;
	margin-top: -10px;
`;

const StyledButton = styled(Button)``;

const H2 = styled.h2`
	margin-bottom: 0;
`;

const DirectorForm = ({ directors, addDirector, theme }) => {
	const [input, setInput] = useState('');
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		addDirector('Quentin');
	}, [addDirector]);
	useEffect(() => {
		setLoading(false);
	}, [directors]);

	return (
		<>
			<H2>Add director</H2>
			<Form
				onSubmit={event => {
					event.preventDefault();
					if (input !== '') {
						addDirector(input);
						setLoading(true);
						setInput('');
					} else {
						setError(true);
					}
				}}
			>
				<StyledInputField
					error={error}
					loading={loading}
					disabled={loading}
					required
					dense
					type="text"
					label="Director"
					name="director"
					value={input}
					onChange={e => {
						setInput(e.target.value);
						if (error) setError(false);
					}}
				/>
				<StyledButton large type="submit">
					Add
				</StyledButton>
			</Form>
		</>
	);
};

const mapStateToProps = state => {
	return { directors: state.directors, theme: state.theme };
};

const mapDispatchToProps = dispatch => {
	return {
		addDirector: name => dispatch(directorActions.directorRequest(name))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DirectorForm);
