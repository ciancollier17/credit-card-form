const checkForNonNumericChars = (input) => {
  if (input) {
    return !(/^\d+$/.test(input.split(' ').join('')));
  } else {
    return false;
  }
}

export default checkForNonNumericChars;
