import React from 'react';
import {useSelector} from 'react-redux';

function CreditCardLogo () {
  const logo = useSelector(full_state => full_state.creditCard.logo);

  return (
    <div className="top-section">
      <img src={logo + ".png"} />
    </div>
  );
}

export default CreditCardLogo;
