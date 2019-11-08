import React, {useState} from 'react';
import {Input, Label} from 'reactstrap';

const get_valid_months = (selected_year, current_year) => {
  let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

  if (selected_year == current_year) {
    const month = new Date().getMonth();
    months = months.splice(month);
  }

  return months;
}

function ExpiryDate () {
  const [year, set_year] = useState(new Date().getUTCFullYear());
  const [selected_year, set_selected_year] = useState(new Date().getUTCFullYear());

  let list_of_valid_years = [year];
  let list_of_valid_months = get_valid_months(selected_year, year);

  for (let i = 0; i < 10; i++) {
    list_of_valid_years.push(year + (i + 1));
  }

  return (
    <div className="col-md-6">
      <Label style={{width: "100%"}}>Expiry Date</Label>
      <Input style={{width: "48%", float: "left"}} type="select">
        {list_of_valid_months.map(valid_month => {
          return (
            <option key={valid_month}>{valid_month}</option>
          );
        })}
      </Input>
      <Input style={{width: "48%", marginLeft: "4%", float: "left"}} type="select"
        onChange={e => {
          set_selected_year(e.target.value);
        }}
      >
        {list_of_valid_years.map(valid_year => {
          return (
            <option key={valid_year}>{valid_year}</option>
          );
        })}
      </Input>
    </div>
  );
}

export default ExpiryDate;
