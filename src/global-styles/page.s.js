import styled from "styled-components";

export const PageTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #242525;

  margin-right: 8px;
`;
export const TotalUsers = styled.h2`
  padding-left: 8px;
  margin-right: 8px;
  border-left: 1px solid #e4e6ee;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #5b5f7b;
`;
export const ValueType = styled.h3`
  /* height: 28px; */
  padding: 1px 24px;
  background: ${({ type }) =>
    type ? "rgba(36, 193, 143, 0.2)" : "rgba(255, 0, 0, 0.2)"};
  border-radius: 16px;

  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  /* line-height: 19px; */
  color: ${({ type }) => (type ? "#24C18F" : "#FF0000")};
`;
