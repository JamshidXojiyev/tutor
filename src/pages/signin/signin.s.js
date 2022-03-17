import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 24px rgba(52, 60, 68, 0.12);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  width: 570px;
  height: 570px;

  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 700px) {
    position: relative;
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;
export const Brand = styled.img`
  width: 62px;
  height: 62px;
  margin-bottom: 60px;
`;

export const H1 = styled.h1`
  /* font-family: "Montserrat"; */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 41px;
  color: #000000;
  z-index: 1;
`;
export const BgIcon = styled.img`
  position: absolute;

  ${({ topLeft, topRight, bottomLeft, bottomRight }) =>
    topLeft
      ? css`
          top: 0;
          left: 0;
          width: 120px;
        `
      : topRight
      ? css`
          top: 28px;
          right: 0;
          width: 80px;
        `
      : bottomLeft
      ? css`
          bottom: 28px;
          left: 0;
          width: 110px;
        `
      : bottomRight &&
        css`
          bottom: 60px;
          right: 0;
          width: 100px;
        `}
`;
