import styled from "styled-components";

export const InfoContainer = styled.div`
  && {
    background: #ffffff;
    border-radius: 12px;
    padding: 18px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 24px 12px;
  }
`;

export const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 12px;
`;
export const Container = styled.div`
  display: grid;
  gap: 10px;
`;
export const Name = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: #242525;
`;
export const Value = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: #8388a2;
`;
