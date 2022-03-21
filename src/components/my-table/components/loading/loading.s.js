import styled from "styled-components";
import { css } from "styled-components";

export const LoadingContainer = styled.div`
  && {
    ${({ user }) =>
      user &&
      css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
      `}
    ${({ userInfo }) =>
      userInfo &&
      css`
        gap: 2px;
        display: flex;
        flex-direction: column;
      `}
  }
`;
export const LoadingBlock = styled.div`
  && {
    width: ${({ width }) => width};
    height: ${({ height }) => (height ? height : "18px")};
    border-radius: ${({ img }) => (img ? "6px" : "50px")};

    background: linear-gradient(
      to right,
      #f7f8fa 10%,
      rgb(0 0 0 / 4%) 20%,
      #f7f8fa 70%
    );
    position: relative;
    animation: ${({ img }) =>
      img
        ? "placeHolderShimmer 20s linear infinite"
        : "placeHolderShimmer 4s linear infinite"};
    @keyframes placeHolderShimmer {
      0% {
        background-position: -800px 0;
      }
      100% {
        background-position: 800px 0;
      }
    }
  }
`;
