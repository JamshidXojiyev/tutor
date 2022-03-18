import styled, { css } from "styled-components";

const centerStyled = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const widthCenterStyled = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;
const heightCenterStyled = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

export const MyDiv = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
  gap: ${({ gap }) => gap};
  display: ${({ display }) => display};
  z-index: ${({ z_ndex }) => z_ndex};
  ${({ center, widthCenter, heightCenter }) =>
    center
      ? centerStyled
      : widthCenter
      ? widthCenterStyled
      : heightCenter
      ? heightCenterStyled
      : ""};
`;
