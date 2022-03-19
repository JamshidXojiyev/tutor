import styled, { css } from "styled-components";

const blueStyle = css`
  background: #5a55d2;
  border-radius: 6px;
  padding: 12px 14px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 6px;

  :hover {
    box-shadow: 0px 4px 16px rgba(90, 85, 210, 0.4);
  }
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
  ${({ icon, blue }) => (icon ? iconStyle : blueStyle)};
  margin: ${({ margin }) => margin};
`;
