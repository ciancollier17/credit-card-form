import {combineReducers} from 'redux';
import CardholderNameReducer from './CardholderNameReducer';
import CreditCardNumberReducer from './CreditCardNumberReducer';
import CVCReducer from './CVCReducer';

export default combineReducers({
  cardholderName: CardholderNameReducer,
  creditCardNumber: CreditCardNumberReducer,
  CVC: CVCReducer
});
