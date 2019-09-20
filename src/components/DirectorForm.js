import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { InputField, Button, Help } from '@dhis2/ui-core';

import * as directorActions from '../store/actions/director';

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 0.5rem;
	align-items: flex-start;
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

const DirectorForm = ({ addDirector, loading, error }) => {
	const [input, setInput] = useState('');

	return (
		<>
			<H2>Add director</H2>
			<Form
				onSubmit={event => {
					event.preventDefault();
					if (input !== '') {
						addDirector(input);
						setInput('');
					}
				}}
			>
				<div>
					<StyledInputField
						error={!!error}
						loading={loading}
						disabled={loading}
						required
						dense
						type="text"
						label="Director"
						name="director"
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
					<Help error>{error}</Help>
				</div>
				<StyledButton large type="submit">
					Add
				</StyledButton>
			</Form>
		</>
	);
};

const mapStateToProps = state => state.directors;

const mapDispatchToProps = dispatch => {
	return {
		addDirector: name => dispatch(directorActions.directorRequest(name))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DirectorForm);
