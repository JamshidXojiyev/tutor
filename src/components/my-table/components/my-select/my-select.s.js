import styled from "styled-components";
import BottomIcon from "../../icons/bottom.svg";

export const SelectStyle = styled.select`
  && {
    width: ${({ width }) => width};
    border: 1px solid #d6e4ec;
    border-radius: 4px;
    padding: ${({ table }) => (table ? "4px 12px" : "8px 16px")};
    padding-right: ${({ table }) => (table ? "30px" : "36px")};
    appearance: none;
    cursor: pointer;
    background: url(${BottomIcon}) #fff0 no-repeat calc(100% - 10px) !important;
  }
`;
export const InputStyle = styled.input`
  && {
    width: 100%;
    height: ${({ height }) => (height ? height : "36px")};
    padding: ${({ padding }) => (padding ? padding : "0 18px")};
    border: 1px solid #d6e4ec;
    border-radius: 4px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #343c44;

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
  }
`;
export const IconStyle = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-12px);
  border: 0;
  background-color: #fff0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
