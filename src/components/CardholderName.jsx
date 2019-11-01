import React from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import ErrorMessage from './ErrorMessage';

const contentChanged = (e, dispatch) => {
  dispatch({type: "CARDHOLDER_NAME_UPDATE", payload: e.target.value});
}

function CardholderName () {
  const dispatch = useDispatch();
  const isEmpty = useSelector(full_state => full_state.cardholderName.isEmpty);

  return (
    <React.Fragment>
    <FormGroup>
      <Label for="cardholder-name">Cardholder Name</Label>
      <Input className={(isEmpty) ? "invalid-input" : ""} type="text" name="cardholder-name" id="cardholder-name" placeholder="Mr C R Holder" onChange={(e) => contentChanged(e, dispatch)} />
    </FormGroup>
    <ErrorMessage message="Please enter the name on your card!" visible={isEmpty} />
    </React.Fragment>
  );
}

export default CardholderName;
