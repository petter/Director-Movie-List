import { combineReducers } from 'redux';

import directorReducer from './director';

const reducer = combineReducers({ directors: directorReducer });

export default reducer;
