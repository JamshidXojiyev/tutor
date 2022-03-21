import React from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { ErrorStyle, LabelStyle, SelectStyle } from "./my-select.s";

function MySelect(props) {
  return (
    <>
      <MyDiv center>
        <LabelStyle>{props.label}</LabelStyle>
        <SelectStyle {...props}>
          {props.option?.map((item) => (
            <option>{item}</option>
          ))}
        </SelectStyle>
        {props.errorMessage && <ErrorStyle>{props.errorMessage}</ErrorStyle>}
      </MyDiv>
    </>
  );
}

export default MySelect;
