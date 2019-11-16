import checkForNonNumericChars from '../utils/checkForNonNumericChars';

const CreditCardNumberReducer = (initialState = {value: "", containsNonNumericChars: false, isEmpty: false, validated: false}, action) => {
  switch (action.type) {
    case "CREDIT_CARD_NUMBER_UPDATE":
      return {
        value: action.payload,
        containsNonNumericChars: checkForNonNumericChars(action.payload),
        isTooShort: false,
        isEmpty: false,
        validated: false
      };
      break;
    case "VALIDATE":
      let validated = (initialState.value && initialState.value.length == 19 && !initialState.containsNonNumericChars);

      return {
        ...initialState,
        isEmpty: !initialState.value,
        isTooShort: (initialState.value) ? (initialState.value.length < 19) : false,
        validated: validated
      };
      break;
    default:
      return initialState;
      break;
  }
}

export default CreditCardNumberReducer;
