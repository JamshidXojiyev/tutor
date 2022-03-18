import styled from "styled-components";

// body
export const Body = styled.div`
  margin-top: 65px;
  margin-left: ${({ openMenu }) => (openMenu ? "255px" : "64px")};
  padding: 14px 21px;
  @media only screen and (max-width: 700px) {
    margin-left: 0;
  }
`;
