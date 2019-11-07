import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function CreditCardGraphicNumber () {
  const {prec_numbers, unused_numbers} = useSelector(full_state => full_state.creditCard);

  return (
    <React.Fragment>
    <h3 style={{paddingLeft: "0.5rem"}}></h3>
    {prec_numbers.split('').map((current_number, index) => {
      if (current_number != " ") {
        return (
          <h3 key={index} id="current-number">{current_number}</h3>
        );
      } else {
        return (
          <h3 key={index}>&nbsp;</h3>
        );
      }
    })}

    {unused_numbers.split('').map((current_x, index) => {
      if (current_x != " ") {
        return (
          <h3>{current_x}</h3>
        );
      } else {
        return (
          <h3>&nbsp;</h3>
        );
      }
    })}
    </React.Fragment>
  );
}

export default CreditCardGraphicNumber;
