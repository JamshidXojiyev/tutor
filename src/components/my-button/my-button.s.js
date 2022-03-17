import styled, { css } from "styled-components";

const blueStyle = css`
  background: #1628c5;
  border-radius: 4px;
  width: ${({ width }) => (width ? width : "100%")};
  padding: 12px 10px;
  font-family: Poppins;
  font-style: normal;
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
`;
const iconStyle = css`
  && {
    width: 38px;
    height: 38px;
    background: ${({ bgNone }) => (bgNone ? "#f2f3f600" : "#fff")};
    color: #101010;
    border-radius: 50%;
    :hover {
      background: ${({ bg }) => (bg ? bg : "")};
    }
  }
`;

export const ButtonStyle = styled.button`
  border: 0;

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.2;
          cursor: context-menu;
        `
      : css`
          opacity: 1;
          cursor: pointer;
        `};
  ${({ icon }) => (icon ? iconStyle : blueStyle)}
`;
