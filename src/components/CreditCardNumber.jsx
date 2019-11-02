import React from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import ErrorMessage from './ErrorMessage';

const contentChanged = (e, dispatch) => {
  let value = e.target.value;
  let processed_value = "";

  if (value) {
    let value_no_spaces = value.split(' ').join('');

    for (let i = 0; i < value_no_spaces.length; i++) {
      processed_value += value_no_spaces[i];

      if ((i + 1) % 4 == 0 && (i + 1) != value_no_spaces.length) {
        processed_value += " ";
      }
    }
  }

  dispatch({type: "CREDIT_CARD_NUMBER_UPDATE", payload: processed_value});
}

const isInputInvalid = (input_state) => {
  if (input_state.containsNonNumericChars) {
    return true;
  } else {
    return false;
  }
}

function CreditCardNumber () {
  const dispatch = useDispatch();
  const current_state = useSelector(full_state => full_state.creditCardNumber);

  return (
    <FormGroup>
      <Label for="credit-card-number">Credit Card Number</Label>
      <Input className={isInputInvalid(current_state) ? "invalid-input" : ""} type="text" name="credit-card-number" id="credit-card-number" placeholder="XXXX XXXX XXXX XXXX" value={current_state.value} onChange={(e) => contentChanged(e, dispatch)} maxlength="19" />
      <ErrorMessage message="Not all characters are numbers!" visible={current_state.containsNonNumericChars} />
    </FormGroup>
  );
}

export default CreditCardNumber;
