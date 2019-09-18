import React from 'react';
import styled from 'styled-components';

import Movie from './Movie';
import Accordion from '../shared/components/Accordion';

const MovieContainer = styled.div`
	display: grid;
	padding: 1em;
	grid-template-columns: 1fr;
	grid-gap: 1rem;

	@media (min-width: 425px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 700px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

const Director = ({ director: { name, movies } }) => {
	console.log(movies);
	return (
		<Accordion title={name}>
			<MovieContainer>
				{movies.map(movie => (
					<Movie key={movie.id} movie={movie} />
				))}
			</MovieContainer>
		</Accordion>
	);
};

export default Director;
