import styled, { css } from "styled-components";
import BottomIcon from "../../assets/image/bottom-icon.png";

const errorStyle = css`
  border: 1px solid #ff333f;
  animation: animate 0.7s linear forwards;
  color: #ff333f;
  @keyframes animate {
    0% {
      transform: translateX(5px);
    }
    10% {
      transform: translateX(-5px);
    }
    20% {
      transform: translateX(5px);
    }
    30% {
      transform: translateX(-5px);
    }
    40% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(-5px);
    }
    60% {
      transform: translateX(5px);
    }
    70% {
      transform: translateX(-5px);
    }
    80% {
      transform: translateX(5px);
    }
    90% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
export const SelectStyle = styled.select`
  && {
    width: 100%;
    border: 1px solid #d6e4ec;
    border-radius: 4px;
    padding: ${({ table }) => (table ? "4px 12px" : "8px 16px")};
    padding-right: ${({ table }) => (table ? "30px" : "36px")};
    appearance: none;
    cursor: pointer;
    background: url(${BottomIcon}) white no-repeat calc(100% - 4px) !important;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #343c44;
  }
`;

export const LabelStyle = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 2px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: #343c44;
`;
export const InputStyle = styled.input`
  && {
    width: 100%;
    height: ${({ height }) => (height ? height : "36px")};
    padding: ${({ padding }) => (padding ? padding : "0 18px")};
    border: 1px solid #d6e4ec;
    border-radius: 4px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;

    :focus {
      outline: none !important;
      box-shadow: 2px 2px 10px 0px #e5e5e5;
    }
    ::placeholder {
      color: #9fa2b4;
    }
    ${({ error }) => (error ? errorStyle : "")}
  }
`;

export const ErrorStyle = styled.label`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: #ff333f;
`;
