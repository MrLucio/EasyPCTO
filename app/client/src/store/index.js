import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../reducers';

const initialState = {
    'ciaone': 'dsasd'
}

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(
    Reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);