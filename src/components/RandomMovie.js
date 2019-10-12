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

const RandomMovie = ({ allMovies, unseenMovies }) => {
	const [randomMovieId, setRandomMovieId] = useState(null);
	const randomMovie = allMovies.find(movie => movie.id === randomMovieId);

	return (
		<Container>
			<h2>What movie should I see?</h2>
			<p>Let us help you find a movie to watch.</p>
			<Button
				onClick={() => {
					const randomMovie = unseenMovies[Math.floor(Math.random() * unseenMovies.length)];
					setRandomMovieId(randomMovie.id);
				}}
			>
				Get random unseen movie
			</Button>
			<MovieContainer>{randomMovie && <Movie movie={randomMovie} />}</MovieContainer>
		</Container>
	);
};

const mapStateToProps = state => {
	const allMovies = state.directors.results
		.flatMap(res => res.movies);
	const unseenMovies = allMovies.filter(movie => !movie.seen)
	return { allMovies, unseenMovies };
};

export default connect(mapStateToProps)(RandomMovie);
