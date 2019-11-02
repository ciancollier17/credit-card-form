import checkForNonNumericChars from '../utils/checkForNonNumericChars';

const CVCReducer = (initialState = {value: "", containsNonNumericChars: false}, action) => {
  switch (action.type) {
    case "CVC_UPDATE":
      return {
        value: action.payload,
        containsNonNumericChars: checkForNonNumericChars(action.payload)
      }
      break;
    default:
      return initialState;
      break;
  }
}

export default CVCReducer;
