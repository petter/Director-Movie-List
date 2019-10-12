import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { directorMovieToggleSeen, deleteMovie } from '../store/actions/director';
import check from '../shared/assets/svg/check-square-solid.svg';
import question from '../shared/assets/svg/question-square-solid.svg';

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

	&:hover ${PosterImg} {
		mask-repeat: no-repeat;
		mask-image: url(${question});
	}

	&.seen ${PosterImg} {
		mask-repeat: no-repeat;
		mask-image: url(${check});
	}

	&:hover:not(:focus) ${PosterImg}, &.seen ${PosterImg} {
		mask-position: center;
		filter: grayscale(100%);
	}
`;

const AWrapper = styled.a`
	color:black
`;

const Title = styled.span``;

const Movie = ({
	movie: { id, original_title, poster_path, seen },
	toggleSeenMovie,
	deleteMovie
}) => {
	const url = "https://www.themoviedb.org/movie/" + id
	return (
		<MovieContainer>
			<PosterImgWrapper
				className={seen ? 'seen' : null}
				onClick={() => toggleSeenMovie(id)}
			>
				<PosterImg src={poster_path} />
			</PosterImgWrapper>
			<Title>
				<AWrapper href={url} target="_blank">
					{original_title}
				</AWrapper>
			</Title>
			<button onClick={() => deleteMovie(id)}>
				Slett film fra liste
			</button>
		</MovieContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleSeenMovie: id => dispatch(directorMovieToggleSeen(id)),
	deleteMovie: id => dispatch(deleteMovie(id))
});

export default connect(
	null,
	mapDispatchToProps
)(Movie);
