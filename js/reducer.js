import {combineReducers} from 'redux';
import {scoreCardReducer} from './home/reducers';

export default combineReducers({
    scoreCard: scoreCardReducer
});