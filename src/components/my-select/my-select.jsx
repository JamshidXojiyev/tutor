import React from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { ErrorStyle, LabelStyle, SelectStyle } from "./my-select.s";

function MySelect(props) {
  return (
    <>
      <MyDiv heightCenter width={props.width ? props.width : "auto"}>
        <LabelStyle>{props.label}</LabelStyle>
        <SelectStyle {...props}>
          {props.option?.map((item, index) => (
            <option key={index.toString()}>{item}</option>
          ))}
        </SelectStyle>
        {props.errorMessage && <ErrorStyle>{props.errorMessage}</ErrorStyle>}
      </MyDiv>
    </>
  );
}

export default MySelect;
