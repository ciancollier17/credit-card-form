import {combineReducers} from 'redux';
import CardholderNameReducer from './CardholderNameReducer';
import CreditCardNumberReducer from './CreditCardNumberReducer';
import CVCReducer from './CVCReducer';
import ExpiryDateReducer from './ExpiryDateReducer';
import CreditCardReducer from './CreditCardReducer';

export default combineReducers({
  cardholderName: CardholderNameReducer,
  creditCardNumber: CreditCardNumberReducer,
  CVC: CVCReducer,
  expiryDate: ExpiryDateReducer,
  creditCard: CreditCardReducer
});
