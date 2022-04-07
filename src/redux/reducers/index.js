import { combineReducers } from 'redux';
import token from './token';
import reducerTimer from './reducerTimer';
import player from './player';

const rootReducer = combineReducers({ token, reducerTimer, player });

export default rootReducer;
