import React, { useState } from "react";
import {
  Container,
  ErrorStyle,
  IconStyle,
  InputContainer,
  InputStyle,
  LabelStyle,
} from "./my-input.s";
import { ReactComponent as ShowIcon } from "./icons/show.svg";
import { ReactComponent as HideIcon } from "./icons/hide.svg";

function MyInput(props) {
  const [inputType, setInputType] = useState(
    props.password ? "password" : props.type
  );
  const [value, setValue] = useState(null);
  return (
    <Container>
      <LabelStyle>{props.label}</LabelStyle>
      <InputContainer>
        <InputStyle
          type={inputType}
          {...props}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* right button */}
        {props.rightIcon && (
          <IconStyle onClick={props.setValue && props.setValue(value)}>
            {props.rightIcon}
          </IconStyle>
        )}
        {/* input type password */}
        {props.password && (
          <IconStyle
            onClick={() =>
              setInputType(inputType === "password" ? "text" : "password")
            }
          >
            {inputType === "password" ? <ShowIcon /> : <HideIcon />}
          </IconStyle>
        )}
      </InputContainer>
      {props.errorMessage && <ErrorStyle>{props.errorMessage}</ErrorStyle>}
    </Container>
  );
}

export default MyInput;
