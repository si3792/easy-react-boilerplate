import { combineReducers } from 'redux';
import smokeCounterReducer from './smoke-counter-reducer';

const rootReducer = combineReducers({
    initial: (state='') => (state),
    smokeCounter: smokeCounterReducer,
});
export default rootReducer;