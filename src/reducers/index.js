import {combineReducers} from 'redux';
import CardholderNameReducer from './CardholderNameReducer';

export default combineReducers({
  cardholderName: CardholderNameReducer
});
