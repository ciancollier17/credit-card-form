import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import CreditCardLogo from './CreditCardLogo';
import CreditCardGraphicNumber from './CreditCardGraphicNumber';
import CreditCardGraphicExpiryDate from './CreditCardGraphicExpiryDate';
import CreditCardGraphicCVC from './CreditCardGraphicCVC';

function CreditCard () {
  const credit_card = useSelector(full_state => full_state.creditCard);
  const [half_flip, set_half_flip] = useState(false);
  const [full_flip, set_full_flip] = useState(false);

  useEffect(() => {
    if (credit_card.flipped) {
      // Need to flip the card to show CVC side
      if (!half_flip) {
        setTimeout(() => {
          set_half_flip(true);
        }, 1000);
      } else if (half_flip && !full_flip) {
        set_full_flip(true);
      }
    }
    else {
      // Need to flip card back to card number side
      if (full_flip && half_flip) {
        setTimeout(() => {
          set_full_flip(false);
        }, 1000);
      } else if (!full_flip && half_flip) {
        set_half_flip(false);
      }
    }
  });

  if ((credit_card.flipped && half_flip) || (!credit_card.flipped && full_flip)) {
    let classes;

    if (!credit_card.flipped) {
      classes = "been-half-flipped";
    } else {
      if (full_flip) {
        classes = "been-full-flipped";
      } else {
        classes = "been-half-flipped";
      }
    }

    return (
      <div id="credit-card" className={classes}>
        <div>
          <div id="magnetic-strip"></div>
        </div>
        <div>
          <CreditCardGraphicCVC />
        </div>
        <div>
        </div>
      </div>
    )
  } else {
    return (
      <div id="credit-card" className={(credit_card.flipped || (!credit_card.flipped && half_flip)) ? "flipped" : ""}>
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
}

export default CreditCard;
