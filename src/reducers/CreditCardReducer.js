function CreditCardReducer (initialState = {logo: "mastercard", new_logo: "", transitiioning: false}, action) {
  switch (action.type) {
    case "CREDIT_CARD_LOGO_CHECK":
      switch(action.payload[0]) {
        case "4":
          return {...initialState, logo: "visa"};
        case "5":
          return {...initialState, logo: "mastercard"};
        case "6":
          return {...initialState, logo: "discover"};
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
