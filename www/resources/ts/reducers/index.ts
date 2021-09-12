// @NOTE: Import library functions.
import { combineReducers } from 'redux';

// @NOTE: Import custom functions.
import resumes from '@reducers/resumes/index';

// @NOTE: Import misc.
// {...}

const reducer = combineReducers({
    resumes,
});

export default reducer;
