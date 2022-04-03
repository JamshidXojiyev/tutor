import React from "react";
import {
  Body,
  CloseButton,
  DialogBg,
  DialogBlock,
  DialogContainer,
  Header,
  SubDialogContainer,
  Title,
} from "./my-dialog.s";
import { ReactComponent as CloseIcon } from "./icons/close.svg";

function MyDialog(props) {
  if (!props.open) {
    return "";
  }
  return (
    <>
      <DialogContainer>
        <SubDialogContainer>
          <DialogBg onClick={() => props.close(false)} />
          <DialogBlock width={props.width} heightAuto={props.heightAuto}>
            <Header heightAuto={props.heightAuto}>
              <Title>{props.title ? props.title : ""}</Title>
              <CloseButton onClick={() => props.close(false)}>
                <CloseIcon />
              </CloseButton>
            </Header>
            <Body heightAuto={props.heightAuto}>
              {props.body && props.body}
            </Body>
          </DialogBlock>
        </SubDialogContainer>
      </DialogContainer>
    </>
  );
}

export default MyDialog;
