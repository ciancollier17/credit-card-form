import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import ErrorMessage from './ErrorMessage';

const contentChanged = (e, dispatch) => {
  dispatch({type: "CVC_UPDATE", payload: e.target.value});
}

const isInputInvalid = (input_state) => {
  return (input_state.isEmpty || input_state.containsNonNumericChars || input_state.isTooShort);
}

function CVC () {
  const dispatch = useDispatch();
  const current_state = useSelector(full_state => full_state.CVC);

  return (
    <div className="col-md-6">
    <Label for="cvc">CVC / Security Code</Label>
    <Input className={isInputInvalid(current_state) ? "invalid-input" : ""} type="text" name="cvc" id="cvc" placeholder="XXX" value={current_state.value} onChange={(e) => contentChanged(e, dispatch)} maxlength="3" />
    <ErrorMessage message="Not all characters are numeric!" visible={current_state.containsNonNumericChars} />
    <ErrorMessage message="Please enter your CVC number!" visible={current_state.isEmpty} />
    <ErrorMessage message="CVC is too short!" visible={current_state.isTooShort} />
    </div>
  );
}

export default CVC;
