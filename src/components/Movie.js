import React from 'react';
import styled from 'styled-components';

import check from '../shared/assets/svgs/check-square-solid.svg';

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
	background-color: grey;
	transition: all 250ms ease;
`;

const PosterImgWrapper = styled.div`
	cursor: pointer;

	&:hover ${PosterImg}, &.seen ${PosterImg} {
		mask: url(${check});
		mask-repeat: no-repeat;
		mask-position: center;
	}
`;
const Title = styled.span``;

const Movie = ({ movie: { original_title, poster_path } }) => {
	return (
		<MovieContainer>
			<PosterImgWrapper>
				<PosterImg src={poster_path} />
			</PosterImgWrapper>
			<Title>{original_title}</Title>
		</MovieContainer>
	);
};

export default Movie;
