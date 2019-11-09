import React from 'react';
import CreditCardLogo from './CreditCardLogo';
import CreditCardGraphicNumber from './CreditCardGraphicNumber';
import CreditCardGraphicExpiryDate from './CreditCardGraphicExpiryDate';

function CreditCard () {
  return (
    <div id="credit-card">
      <div>
        <div className="top-section">
          <img className="chip" src="chip.png" style={{float: 'left', height: '1.2rem', paddingLeft: '0.5rem', marginTop: '1.5rem'}} />
        </div>
        <CreditCardLogo />
      </div>
      <div>
        <CreditCardGraphicNumber />
      </div>
      <div>
        <CreditCardGraphicExpiryDate />
        <div className="expiry">
          <h4>Valid From</h4>
          <h4>XX/XXXX</h4>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
