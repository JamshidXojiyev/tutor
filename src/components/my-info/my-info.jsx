import React from "react";
import {
  Container,
  InfoBlock,
  InfoContainer,
  Name,
  UserImage,
  Value,
} from "./my-info.s";
import { ReactComponent as UserIcon } from "../../assets/icon/userIcon.svg";

function MyInfo(props) {
  if (Array.isArray(props.data)) {
    return (
      <InfoContainer borderRight={Array.isArray(props.data)}>
        <UserImage>
          <UserIcon />
        </UserImage>
        {props.data.map((item, index) => (
          <InfoBlock key={index}>
            <Container>
              {item.name.map((subItem, subIndex) => (
                <Name key={subIndex}>{subItem}</Name>
              ))}
            </Container>
            <Container>
              {item.value.map((subItem, subIndex) => (
                <Value key={subIndex}>{subItem}</Value>
              ))}
            </Container>
          </InfoBlock>
        ))}
      </InfoContainer>
    );
  } else {
    return (
      <InfoContainer borderRight={Array.isArray(props.data)}>
        <UserImage>
          <UserIcon />
        </UserImage>
        <InfoBlock>
          <Container>
            {props.data.name.map((item, index) => (
              <Name key={index}>{item}</Name>
            ))}
          </Container>
          <Container>
            {props.data.value.map((item, index) => (
              <Value key={index}>{item}</Value>
            ))}
          </Container>
        </InfoBlock>
      </InfoContainer>
    );
  }
}

export default MyInfo;
