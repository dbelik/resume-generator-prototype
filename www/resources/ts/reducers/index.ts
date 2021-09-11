// @NOTE: Import library functions.
import { combineReducers } from 'redux';

// @NOTE: Import custom functions.
import mockReducer from '@reducers/mock/index';

// @NOTE: Import misc.
// {...}

const reducer = combineReducers({
    mock: mockReducer,
});

export default reducer;
