function CreditCardReducer (initialState = {logo: "mastercard"}, action) {
  switch (action.type) {
    case "CREDIT_CARD_LOGO_CHECK":
      switch(action.payload[0]) {
        case "4":
          return {...initialState, logo: "visa"};
        case "5":
          return {...initialState, logo: "mastercard"};
        default:
          return {...initialState, logo: "mastercard"};
      }
      break;
    default:
      return initialState;
      break;
  }
}

export default CreditCardReducer;
