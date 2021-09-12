// @NOTE: Import library functions.
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

// @NOTE: Import custom functions.
// {...}

// @NOTE: Import misc.
import reducer from '@reducers/index';

const client = axios.create({
    baseURL: '/api',
    responseType: 'json',
});

const store = createStore(reducer, applyMiddleware(thunk, axiosMiddleware(client)));

export interface IRootStore {
    resumes: any;
}

export default store;
