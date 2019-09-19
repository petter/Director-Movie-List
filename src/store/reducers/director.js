import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DIRECTOR_ADD:
			return [action.payload, ...state];
		case actionTypes.DIRECTOR_MOVIE_TOGGLE_SEEN:
			return state.map(({ movies, ...rest }) => ({
				...rest,
				movies: movies.map(movie =>
					movie.id === action.payload ? { ...movie, seen: !movie.seen } : movie
				)
			}));
		default:
			return state;
	}
};

export default reducer;
