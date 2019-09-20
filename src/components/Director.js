import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Movie from './Movie';
import Accordion from '../shared/components/Accordion';
import { directorMovieToggleSeen } from '../store/actions/director';

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

const Director = ({ director: { name, movies }, toggleSeenMovie }) => {
	return (
		<Accordion
			title={`${name} - ${movies.reduce(
				(accumlator, movie) => accumlator + movie.seen,
				0
			)}/${movies.length} seen`}
		>
			<MovieContainer>
				{movies.map(movie => (
					<Movie
						key={movie.id}
						movie={movie}
						onClick={() => toggleSeenMovie(movie.id)}
					/>
				))}
			</MovieContainer>
		</Accordion>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleSeenMovie: id => dispatch(directorMovieToggleSeen(id))
});

export default connect(
	null,
	mapDispatchToProps
)(Director);
