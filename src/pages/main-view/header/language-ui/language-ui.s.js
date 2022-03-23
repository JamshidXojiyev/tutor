import styled from "styled-components";
import { css } from "styled-components";

export const LangContainer = styled.div`
  position: relative;
`;
export const LanguageBlock = styled.div`
  position: absolute;
  top: 0;
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 5%);
  border-radius: 4px;
  backdrop-filter: blur(20px);
`;
export const ActivLanguage = styled.div`
  min-width: 124px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding: 6px 12px;
  cursor: pointer;
  opacity: ${({ disables }) => (disables ? ".5" : "1")};
  ${({ none }) =>
    none
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;
