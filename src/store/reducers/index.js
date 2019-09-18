import { combineReducers } from 'redux';

import directorReducer from './director';
import themeReducer from './theme';

const reducer = combineReducers({
	directors: directorReducer,
	theme: themeReducer
});

export default reducer;
