import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import DirectorForm from './DirectorForm';
import Director from './Director';

const Main = styled.main`
	padding: 1em;
`;

const Header = styled.header`
	background-color: ${props => props.backgroundColor};
	color: ${props => props.color};
	height: 3rem;
	padding: 0 0.25em;
	font-size: 1.25rem;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
`;

const App = ({ theme, directors }) => {
	return (
		<>
			<Header backgroundColor={theme.primary} color={theme.primaryText}>
				Director Movie List
			</Header>
			<Main>
				<DirectorForm />
				{directors.map(director => (
					<Director key={director.id} director={director} />
				))}
			</Main>
		</>
	);
};

const mapStateToProps = state => ({
	directors: state.directors,
	theme: state.theme
});

export default connect(mapStateToProps)(App);
