import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import ErrorMessage from './ErrorMessage';

const contentChanged = (e, dispatch) => {
  dispatch({type: "CVC_UPDATE", payload: e.target.value});
}

function CVC () {
  const dispatch = useDispatch();
  const current_state = useSelector(full_state => full_state.CVC);

  return (
    <div className="col-md-6">
    <Label for="cvc">CVC / Security Code</Label>
    <Input className={current_state.containsNonNumericChars ? "invalid-input" : ""} type="text" name="cvc" id="cvc" placeholder="XXX" value={current_state.value} onChange={(e) => contentChanged(e, dispatch)} maxlength="3" />
    <ErrorMessage message="Not all characters are numeric!" visible={current_state.containsNonNumericChars} />
    </div>
  );
}

export default CVC;
