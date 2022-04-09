import { combineReducers } from 'redux';
import token from './token';
import reducerTimer from './reducerTimer';
import player from './player';
import reducerConfig from './reducerConfig';

const rootReducer = combineReducers({ token, reducerTimer, player, reducerConfig });

export default rootReducer;
