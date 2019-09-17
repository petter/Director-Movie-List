import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DIRECTOR_ADD:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default reducer;
