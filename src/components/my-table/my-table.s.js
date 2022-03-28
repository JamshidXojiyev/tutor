import styled from "styled-components";
import { css } from "styled-components";

// table ui
export const TableContainer = styled.div`
  display: inline-block;
  width: ${({ width }) => width};
`;
export const TableStyle = styled.table`
  width: 100%;
  border-spacing: 0px 6px;
`;
export const TrStyle = styled.tr`
  && {
    :first-child {
      background: #f7f8fa;
      border: 1px solid #eff0f4;
      box-sizing: border-box;

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      color: #505470;
    }
  }
`;
export const TdStyle = styled.td`
  && {
    padding: 16px 0;
    padding-left: 12px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: capitalize;
    color: #192a3e;

    :first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    :last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      padding-right: 12px;
    }
  }
`;
// bottom content
export const BottomContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;
export const H1 = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #232638;
  letter-spacing: 0.02em;
`;
export const PageBtn = styled.button`
  border: 1px solid #d6e4ec;
  background-color: #fff0;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 4px;
  :active {
    box-shadow: 0px 4px 16px rgba(90, 85, 210, 0.4);
  }
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: context-menu;
      path {
        stroke: #d6e4ec;
      }
      :active {
        box-shadow: 0px 4px 16px rgba(90, 85, 210, 0);
      }
    `}
  ${({ left }) =>
    left &&
    css`
      transform: rotate(-180deg);
    `}
`;
