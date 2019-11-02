import React from 'react';
import {useDispatch} from 'react-redux';
import {Form, FormGroup, Button, Input, Label} from 'reactstrap';
import CardholderName from './CardholderName';
import CreditCardNumber from './CreditCardNumber';
import CVC from './CVC';

function CreditCardForm () {
  const dispatch = useDispatch();

  return (
    <Form>
      <CardholderName />
      <CreditCardNumber />
      <FormGroup>
        <div className="row">
        <div className="col-md-6">
        <Label for="expiry-date">Expiry Date</Label>
        <Input type="date" name="expiry-date" id="expiry-date" />
        </div>
        <CVC />
        </div>
      </FormGroup>
      <Button onClick={() => dispatch({type: "VALIDATE"})}>Submit</Button>
    </Form>
  );
}

export default CreditCardForm;
