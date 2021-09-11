// @NOTE: Import library functions.
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// @NOTE: Import custom functions.
import reducer from '@reducers/index';

// @NOTE: Import misc.
// {...}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
