import infoReducers from './reducers';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
export default createStore(combineReducers({
    info : infoReducers
}),applyMiddleware(thunk));