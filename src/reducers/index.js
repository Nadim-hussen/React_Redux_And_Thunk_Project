import {reducer,product} from './updown';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    reducer,
    product
})
export default rootReducer;