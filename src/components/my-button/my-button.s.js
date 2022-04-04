import styled, { css } from "styled-components";

const blueStyle = css`
  background: #783efd;
  border-radius: 6px;
  padding: 12px 14px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 10px;

  :hover {
    box-shadow: 0px 4px 16px #b1b1c342;
  }
  @media only screen and (max-width: 500px) {
    ${({ svg }) =>
      svg &&
      css`
        font-size: 0;
        gap: 0;
      `}
  }
`;
const redStyle = css`
  background: #f23985;
  border-radius: 6px;
  padding: 12px 14px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 10px;

  :hover {
    box-shadow: 0px 4px 16px #b1b1c342;
  }
`;
const whiteStyle = css`
  background: #ffffff;
  border-radius: 4px;
  padding: 12px 14px;
  height: ${({ height }) => (height ? height : "34px")};

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #575c76;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;

  :hover {
    box-shadow: 0px 4px 16px #d8d8e566;
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
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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
  ${({ icon, white, red }) =>
    icon ? iconStyle : white ? whiteStyle : red ? redStyle : blueStyle};
  margin: ${({ margin }) => margin};
`;
