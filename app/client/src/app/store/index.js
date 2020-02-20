import { createStore } from 'redux';
import Reducer from '../reducers';

export const Store = createStore(
    Reducer,
    {'ciaone': 'dsasd'},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);