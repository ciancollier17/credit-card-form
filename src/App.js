import React from 'react';
import "./formcontainer.css";
import "./creditcard.css";
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

function App () {
  return (
    <div id="content">
      <div className="row">
        <div id="form-container" className="col-md-4">
          <div id="credit-card">
            <div>
              <div className="top-section">
                <img className="chip" src="chip.png" style={{float: 'left', height: '1.2rem', paddingLeft: '0.5rem', marginTop: '1.5rem'}} />
              </div>
              <div className="top-section">
                <img src="mastercard.png" />
              </div>
            </div>
            <div>
              <h3>0123 4567 8954 2343</h3>
            </div>
            <div>
              <div className="expiry">
                <h4>Expires</h4>
                <h4>03/11/2019</h4>
              </div>
              <div className="expiry">
                <h4>Valid From</h4>
                <h4>03/11/2015</h4>
              </div>
            </div>
          </div>
          <Form>
            <FormGroup>
              <Label for="cardholder-name">Cardholder Name</Label>
              <Input type="text" name="cardholder-name" id="cardholder-name" placeholder="Mr C R Holder" />
            </FormGroup>
            <FormGroup>
              <Label for="credit-card-number">Credit Card Number</Label>
              <Input type="text" name="credit-card-number" id="credit-card-number" placeholder="XXXX XXXX XXXX XXXX" />
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
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
