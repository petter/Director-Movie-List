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
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 700px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 1000px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const Director = ({ director: { name, movies } }) => {
	const numSeenMovies = movies.filter(m => m.seen).length;
	return (
		<Accordion
			title={`${name} - ${numSeenMovies}/${movies.length} seen`}
			seenAllMovies={numSeenMovies === movies.length}
		>
			<MovieContainer>
				{movies.map(movie => (
					<Movie key={movie.id} movie={movie} />
				))}
			</MovieContainer>
		</Accordion>
	);
};

export default Director;
