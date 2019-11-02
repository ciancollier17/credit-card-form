import checkForNonNumericChars from '../utils/checkForNonNumericChars';

const CreditCardNumberReducer = (initialState = {value: "", containsNonNumericChars: false, isEmpty: false}, action) => {
  switch (action.type) {
    case "CREDIT_CARD_NUMBER_UPDATE":
      return {
        value: action.payload,
        containsNonNumericChars: checkForNonNumericChars(action.payload),
        isEmpty: false,
        isTooShort: false
      };
      break;
    case "VALIDATE":
      return {
        value: initialState.value,
        containsNonNumericChars: initialState.containsNonNumericChars,
        isEmpty: !initialState.value,
        isTooShort: (initialState.value) ? (initialState.value.length < 19) : false
      };
      break;
    default:
      return initialState;
      break;
  }
}

export default CreditCardNumberReducer;
