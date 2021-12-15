import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Players, SelectPlayer } from './reducers/';

let rootReducer = combineReducers({
	players: Players,
	selectPlayer: SelectPlayer,
});


const store = createStore(rootReducer, 	composeWithDevTools(applyMiddleware(thunk)));

export default store;
