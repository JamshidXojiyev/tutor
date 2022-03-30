import React from "react";
import { Container, InfoBlock, InfoContainer, Name, Value } from "./my-info.s";

function MyInfo(props) {
  if (Array.isArray(props.data)) {
    return (
      <InfoContainer borderRight={Array.isArray(props.data)}>
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
