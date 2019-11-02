import checkForNonNumericChars from '../utils/checkForNonNumericChars';

const CreditCardNumberReducer = (initialState = {value: "", containsNonNumericChars: false}, action) => {
  switch (action.type) {
    case "CREDIT_CARD_NUMBER_UPDATE":
      return {
        value: action.payload,
        containsNonNumericChars: checkForNonNumericChars(action.payload)
      };
      break;
    default:
      return initialState;
      break;
  }
}

export default CreditCardNumberReducer;
