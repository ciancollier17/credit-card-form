import React, {useState} from 'react';
import {useSelector} from 'react-redux';

function CreditCardLogo () {
  let [old_logo, set_old_logo] = useState("mastercard");
  let [is_transitioning, set_is_transitioning] = useState(false);
  const logo = useSelector(full_state => full_state.creditCard.logo);

  if (logo != old_logo && !is_transitioning) {
    set_is_transitioning(true);
    setTimeout(function () {
      set_old_logo(logo);
      set_is_transitioning(false);
    }, 800);
  }

  return (
    <div className="top-section">
      <img className={is_transitioning ? "transitioning-logo" : ""} src={((is_transitioning) ? old_logo : logo) + ".png"} />
    </div>
  );
}

export default CreditCardLogo;
