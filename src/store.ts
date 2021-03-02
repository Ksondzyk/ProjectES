import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const store = createStore(, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
));
export default store;
