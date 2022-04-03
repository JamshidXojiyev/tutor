import React from "react";
import {
  InfoContainer,
  TableStyle,
  TdStyle,
  TrStyle,
  UserImage,
} from "./my-info.s";
import { ReactComponent as UserIcon } from "../../assets/icon/userIcon.svg";

function MyInfo(props) {
  if (Array.isArray(props.data)) {
    return (
      <InfoContainer>
        <UserImage>
          <UserIcon />
        </UserImage>
        {props.data?.map((info) => (
          <TableStyle>
            {info?.name?.map((item, index) => (
              <TrStyle>
                <TdStyle name>{item}</TdStyle>
                <TdStyle>{info.value[index]}</TdStyle>
              </TrStyle>
            ))}
          </TableStyle>
        ))}
      </InfoContainer>
    );
  } else {
    return (
      <InfoContainer>
        <UserImage>
          <UserIcon />
        </UserImage>
        <TableStyle>
          {props.data.name.map((item, index) => (
            <TrStyle key={index}>
              <TdStyle name>{item}</TdStyle>
              <TdStyle>{props.data.value[index]}</TdStyle>
            </TrStyle>
          ))}
        </TableStyle>
      </InfoContainer>
    );
  }
}

export default MyInfo;
