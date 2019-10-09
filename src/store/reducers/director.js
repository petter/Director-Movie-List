import * as actionTypes from '../actions/actionTypes';

const initialState = { error: '', loading: false, results: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DIRECTOR_REQUEST:
			return { ...state, loading: true, error: '' };
		case actionTypes.DIRECTOR_ERROR:
			return { ...state, loading: false, error: action.payload };
		case actionTypes.DIRECTOR_ADD:
			return state.results.find(director => director.id === action.payload.id)
				? { ...state, error: 'Director already exists', loading: false }
				: {
						...state,
						results: [action.payload, ...state.results],
						loading: false
				  };
		case actionTypes.DIRECTOR_MOVIE_TOGGLE_SEEN:
			return {
				...state,
				results: state.results.map(({ movies, ...rest }) => ({
					...rest,
					movies: movies.map(movie =>
						movie.id === action.payload
							? { ...movie, seen: !movie.seen }
							: movie
					)
				}))
			};
		case actionTypes.DIRECTOR_DELETE_MOVIE:
			return {
				...state,
				results: state.results.map(({ movies, ...rest }) => ({
					...rest,
					movies: movies.filter(movie => movie.id !== action.payload)			
				}))
			};
			
		default:
			return state;
	}
};

export default reducer;
