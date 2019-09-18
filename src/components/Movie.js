import React from 'react';
import styled from 'styled-components';

const MovieContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	font-weight: bold;
	font-size: 1.1rem;
`;

const PosterImg = styled.img`
	width: 100%;
	border-radius: 2px;
	/* box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2); */
`;

const Title = styled.span``;

const Movie = ({ movie: { original_title, poster_path } }) => {
	return (
		<MovieContainer>
			<PosterImg src={poster_path} />
			<Title>{original_title}</Title>
		</MovieContainer>
	);
};

export default Movie;
