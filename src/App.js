import React from 'react';
import {useSelector} from 'react-redux';
import isFormValidated from './utils/isFormValidated';
import CreditCard from './components/CreditCard';
import CreditCardForm from './components/CreditCardForm';

function App (props) {
  if (isFormValidated(useSelector(full_state => full_state))) {
    props.history.push('/loading');
  }

  return (
    <div id="content">
      <div className="row">
        <div id="form-container" className="col-lg-4" style={{width: "100%"}}>
          <CreditCard />
          <CreditCardForm />
        </div>
      </div>
    </div>
  );
}

export default App;
