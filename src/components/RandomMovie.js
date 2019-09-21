import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from '@dhis2/ui-core';
import Movie from './Movie';

const Container = styled.div`
	display: flex;
	flex-flow: column;
`;

const MovieContainer = styled.div`
	width: 150px;
	margin: 1rem auto;
`;

const RandomMovie = ({ movies }) => {
	const [movie, setMovie] = useState(null);
	return (
		<Container>
			<h2>What movie should I see?</h2>
			<p>Let us help you find a movie to watch.</p>
			<Button
				onClick={() =>
					setMovie(movies[Math.floor(Math.random() * movies.length)])
				}
			>
				Get random unseen movie
			</Button>

			<MovieContainer>{movie && <Movie movie={movie} />}</MovieContainer>
		</Container>
	);
};

const mapStateToProps = state => ({
	movies: state.directors.results.reduce(
		(prev, cur) => [...prev, ...cur.movies.filter(movie => !movie.seen)],
		[]
	)
});

export default connect(mapStateToProps)(RandomMovie);
