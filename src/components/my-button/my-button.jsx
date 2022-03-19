import React from "react";
import { ButtonStyle } from "./my-button.s";

function MyButton(props) {
  return (
    <ButtonStyle {...props}>
      {props.svg} {props.text}
    </ButtonStyle>
  );
}

export default MyButton;
