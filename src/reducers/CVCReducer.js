import checkForNonNumericChars from '../utils/checkForNonNumericChars';

const CVCReducer = (initialState = {value: "", containsNonNumericChars: false, isEmpty: false, isTooShort: false, validated: false}, action) => {
  switch (action.type) {
    case "CVC_UPDATE":
      return {
        value: action.payload,
        containsNonNumericChars: checkForNonNumericChars(action.payload),
        isEmpty: false,
        isTooShort: false,
        validated: false
      };
      break;
    case "VALIDATE":
      let validated = (initialState.value && !initialState.containsNonNumericChars && (initialState.value.length == 3));

      return {
        value: initialState.value,
        containsNonNumericChars: initialState.containsNonNumericChars,
        isEmpty: !initialState.value,
        isTooShort: (initialState.value) ? (initialState.value.length < 3) : false,
        validated: validated
      };
      break;
    default:
      return initialState;
      break;
  }
}

export default CVCReducer;
