import styled from "styled-components";
import { css } from "styled-components";

export const DialogContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
`;
export const SubDialogContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DialogBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;
  background-color: #0003;
`;
export const DialogBlock = styled.div`
  min-width: 250px;

  max-width: 600px;
  background: #ffffff;
  border-radius: 8px;
  z-index: 999;
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
  ${({ heightAuto }) =>
    heightAuto
      ? css`
          width: ${({ width }) => (width ? width : "360px")};
          height: auto;
          @media only screen and (max-width: 500px) {
            width: ${({ width }) => (width ? width : "360px")};
            height: auto;
            border-radius: 8px;
          }
        `
      : css`
          width: ${({ width }) => (width ? width : "480px")};
          height: ${({ height }) => (height ? height : "calc(100vh - 60px)")};
          position: relative;
        `}
`;
export const Header = styled.div`
  ${({ heightAuto }) =>
    heightAuto
      ? css`
          margin-top: 12px;
        `
      : css`
          position: absolute;
          top: 4px;
          left: 0;
          right: 0;
        `}

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #d6e4ec;
  padding: 10px 0;
  margin-left: 20px;
  margin-right: 24px;
  margin-bottom: 12px;
`;
export const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #00140e;
`;
export const CloseButton = styled.button`
  background-color: #0000;
  border: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const Body = styled.div`
  && {
    ${({ heightAuto }) =>
      heightAuto
        ? ""
        : css`
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            bottom: 5px;
          `}

    width: calc(100% - 2px);
    padding: 0 20px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 20px;
    @media only screen and (max-width: 500px) {
      height: auto;
      max-height: auto;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 6px;
      cursor: pointer;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background-color: #0001;
      border-radius: 5px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: #0002;
      border-radius: 5px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: #0005;
    }
  }
`;
