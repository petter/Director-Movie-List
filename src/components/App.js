import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import DirectorForm from './DirectorForm';
import Director from './Director';

const Main = styled.main`
	padding: 1em;

	@media (min-width: 1000px) {
		width: 1000px;
		margin: 0 auto;
	}
`;

const Header = styled.header`
	background-color: ${props => props.backgroundColor};
	color: ${props => props.color};
	height: 3rem;
	padding: 0 1rem;
	font-size: 1.25rem;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
`;

const DirectorContainer = styled.div`
	display: grid;
	grid-gap: 0.1rem;
`;

const NavLinks = styled.nav`
	display: none;
	flex-flow: row;
	align-items: center;

	& a {
		margin: 0 0.5rem;
	}

	@media (min-width: 700px) {
		display: flex;
	}
`;

const Burger = styled.button`
	display: flex;

	@media (min-width: 700px) {
		display: none;
	}
`;

const App = ({ theme, directors }) => {
	useEffect(() => {
		document.body.style.backgroundColor = theme.background;
	}, [theme]);

	return (
		<>
			<Header backgroundColor={theme.primary} color={theme.primaryText}>
				<span>Director Movie List</span>
				<NavLinks>
					{[1, 2, 3, 4].map(num => (
						<a key={num}>Test {num}</a>
					))}
				</NavLinks>
				<Burger>Burger</Burger>
			</Header>
			<Main>
				<DirectorForm />
				<h2>Directors</h2>
				<DirectorContainer>
					{directors.map(director => (
						<Director key={director.id} director={director} />
					))}
				</DirectorContainer>
			</Main>
			<svg width="0" height="0">
				<defs>
					<clipPath id="checkPath" clipPathUnits="objectBoundingBox">
						<path
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"
						/>
					</clipPath>
				</defs>
			</svg>
		</>
	);
};

const mapStateToProps = state => ({
	directors: state.directors,
	theme: state.theme
});

export default connect(mapStateToProps)(App);
