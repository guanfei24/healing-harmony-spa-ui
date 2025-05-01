//rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import goalReducer from './goalReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    goals: goalReducer
});

export default rootReducer;