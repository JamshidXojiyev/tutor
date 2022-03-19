import styled from "styled-components";

// body
export const Body = styled.div`
  width: ${({ openMenu }) =>
    openMenu ? "calc(100% - 255px)" : "calc(100% - 64px)"};
  position: absolute;
  /* top: 65px; */
  /* left: 255px; */
  top: 65px; 
  left: ${({ openMenu }) => (openMenu ? "255px" : "64px")};
  padding: 14px 21px;
  @media only screen and (max-width: 700px) {
    left: 0;
  }
`;
