import React from 'react';
import CreditCard from './components/CreditCard';
import CreditCardForm from './components/CreditCardForm';

function App () {
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
