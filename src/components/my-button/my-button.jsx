import React from "react";
import { ButtonStyle } from "./my-button.s";

function MyButton(props) {
  return (
    <ButtonStyle {...props}>
      {props.icon} {props.text}
    </ButtonStyle>
  );
}

export default MyButton;
