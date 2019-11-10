function CreditCardReducer (initialState = {logo: "mastercard", prec_numbers: "", unused_numbers: "XXXX XXXX XXXX XXXX", flipped: false}, action) {
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
    case "CREDIT_CARD_NUMBER_UPDATE":
      let number_of_chars_used = action.payload.length;
      let split_unused_chars = "XXXX XXXX XXXX XXXX".split('');

      for (let i = 0; i < number_of_chars_used; i++) {
        split_unused_chars.shift();
      }

      let new_unused_chars = split_unused_chars.join('');

      return {
        ...initialState,
        prec_numbers: action.payload,
        unused_numbers: new_unused_chars
      }
      break;
    case "FLIP_CREDIT_CARD":
      return {
        ...initialState,
        flipped: !initialState.flipped
      };
      break;
    default:
      return initialState;
      break;
  }
}

export default CreditCardReducer;
