import React from 'react';

function ErrorMessage (props) {
  if (props.visible) {
    return <p className="invalid-input-message">{props.message}</p>
  } else {
    return null;
  }
}

export default ErrorMessage;
