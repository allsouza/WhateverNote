import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer';

export default function configureStore(preloadedState = {}){
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
}