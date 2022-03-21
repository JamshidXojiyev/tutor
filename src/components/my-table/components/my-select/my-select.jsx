import React from "react";
import { SelectStyle } from "./my-select.s";

function MySelect(props) {
  return (
    <>
      <SelectStyle {...props}>
        {props.option?.map((item) => (
          <option>{item}</option>
        ))}
      </SelectStyle>
    </>
  );
}

export default MySelect;
