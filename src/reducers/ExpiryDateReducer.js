import formatMonth from '../utils/formatMonth';

function ExpiryDateReducer (initialState = {month: formatMonth(new Date().getMonth()), year: new Date().getUTCFullYear()}, action) {
  switch (action.type) {
    case "EXPIRY_MONTH_UPDATED":
      return {
        ...initialState,
        month: action.payload
      };
      break;
    case "EXPIRY_YEAR_UPDATED":
      return {
        ...initialState,
        year: action.payload
      }
      break;
    default:
      return initialState;
      break;
  }
}

export default ExpiryDateReducer;
