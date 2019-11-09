import React from 'react';
import {useSelector} from 'react-redux';

function CreditCardGraphicExpiryDate () {
  const selected_date = useSelector(full_state => full_state.expiryDate);

  return (
    <div className="expiry">
      <h4>Expires</h4>
      <h4>{selected_date.month}/{selected_date.year}</h4>
    </div>
  )
}

export default CreditCardGraphicExpiryDate;
