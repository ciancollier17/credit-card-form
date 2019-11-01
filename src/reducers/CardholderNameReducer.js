const CardholderNameReducer = (initialState = {value: "", isEmpty: false}, action) => {
  switch (action.type) {
    case "CARDHOLDER_NAME_UPDATE":
      return {
        value: action.payload,
        isEmpty: false
      };
      break;
    case "VALIDATE":
      console.log("run");
      return {
        value: initialState.value,
        isEmpty: !initialState.value
      };
    default:
      return initialState;
      break;
  }
}

export default CardholderNameReducer;
