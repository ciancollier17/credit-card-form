import React from 'react';
import {useSelector} from 'react-redux';

function CreditCardGraphicCVC () {
  const CVC = useSelector(full_state => full_state.CVC.value);
  let x_string = "";

  for (let i = 0; i < (3 - CVC.length); i++) {
    x_string += "X";
  }

  return (
    <div id="cvc-strip">
      <div id="cvc-card">
        {CVC.split('').map(number => {
          return (
            <span className="cvc-number">{number}</span>
          );
        })}
        <span>{x_string}</span>
      </div>
    </div>
  );
}

export default CreditCardGraphicCVC;
