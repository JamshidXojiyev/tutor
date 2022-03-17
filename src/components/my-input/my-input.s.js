import styled, { css } from "styled-components";

const signStyle = css`
  border: 1px solid #e7e7e7;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;
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

export const InputStyle = styled.input`
  && {
    width: ${({ width }) => (width ? width : "100%")};
    height: 42px;
    border-radius: 8px;
    padding: 12px 16px;
    background-color: #fff;
    color: #101010;
    font-family: Montserrat;
    font-style: normal;
    ${({ sign }) => (sign ? signStyle : "")}
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
export const InputContainer = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const IconStyle = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-10px);

  border: 0;
  background-color: #ffffff00;
`;
export const LabelStyle = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 2px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  color: #101010;
`;
export const ErrorStyle = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  color: #ff333f;
`;
