const isFormValidated = (full_state) => {
  const {CVC, cardholderName, creditCardNumber} = full_state;
  return (CVC.validated, !cardholderName.isEmpty, creditCardNumber.validated);
}

export default isFormValidated;
