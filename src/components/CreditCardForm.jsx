import React from 'react';
import {useDispatch} from 'react-redux';
import {Form, FormGroup, Button, Input, Label} from 'reactstrap';
import CardholderName from './CardholderName';
import CreditCardNumber from './CreditCardNumber';
import ExpiryDate from './ExpiryDate';
import CVC from './CVC';

function CreditCardForm () {
  const dispatch = useDispatch();

  return (
    <Form>
      <CardholderName />
      <CreditCardNumber />
      <FormGroup>
        <div className="row">
        <ExpiryDate />
        <CVC />
        </div>
      </FormGroup>
      <Button onClick={() => dispatch({type: "VALIDATE"})}>Submit</Button>
    </Form>
  );
}

export default CreditCardForm;
