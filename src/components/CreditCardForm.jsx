import React from 'react';
import {useDispatch} from 'react-redux';
import {Form, FormGroup, Button, Input, Label} from 'reactstrap';
import CardholderName from './CardholderName';

function CreditCardForm () {
  const dispatch = useDispatch();

  return (
    <Form>
      <CardholderName />
      <FormGroup>
        <Label for="credit-card-number">Credit Card Number</Label>
        <Input type="text" className="invalid-input" name="credit-card-number" id="credit-card-number" placeholder="XXXX XXXX XXXX XXXX" />
        <p className="invalid-input-message">Please enter a valid credit card number!</p>
      </FormGroup>
      <FormGroup>
        <div className="row">
        <div className="col-md-6">
        <Label for="expiry-date">Expiry Date</Label>
        <Input type="date" name="expiry-date" id="expiry-date" />
        </div>
        <div className="col-md-6">
        <Label for="cvc">CVC / Security Code</Label>
        <Input type="text" name="cvc" id="cvc" placeholder="XXX" />
        </div>
        </div>
      </FormGroup>
      <Button onClick={() => dispatch({type: "VALIDATE"})}>Submit</Button>
    </Form>
  );
}

export default CreditCardForm;
