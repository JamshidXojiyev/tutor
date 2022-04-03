import styled from "styled-components";

// body
export const Body = styled.div`
  width: ${({ openMenu }) =>
    openMenu ? "calc(100% - 272px)" : "calc(100% - 64px)"};
  position: absolute;
  top: 65px;
  left: ${({ openMenu }) => (openMenu ? "272px" : "64px")};
  padding: 14px 21px;
  @media only screen and (max-width: 500px) {
    left: 0;
    right: 0;
    width: 100%;
  }
`;
