const formatMonth = (month) => {
  let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  return (month <= 11 && month >= 0) ? months[month] : null;
}

export default formatMonth;
