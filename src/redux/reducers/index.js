import { combineReducers } from 'redux';
import token from './token';
import reducerTimer from './reducerTimer';

const rootReducer = combineReducers({ token, reducerTimer });

export default rootReducer;
