import * as actionTypes from './actionTypes';
import * as api from '../../api';

export const directorRequest = name => dispatch => {
	dispatch({ type: actionTypes.DIRECTOR_REQUEST });
	api
		.getDirector(name)
		.then(res => dispatch(directorAdd(res)))
		.catch(err => {
			console.log(err);
			dispatch(directorError(err.message));
		});
};

const directorAdd = director => ({
	type: actionTypes.DIRECTOR_ADD,
	payload: director
});

const directorError = error => ({
	type: actionTypes.DIRECTOR_ERROR,
	payload: error
});

export const directorMovieToggleSeen = movieId => ({
	type: actionTypes.DIRECTOR_MOVIE_TOGGLE_SEEN,
	payload: movieId
});
