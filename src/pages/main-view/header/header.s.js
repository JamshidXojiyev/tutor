import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0px;
  left: ${({ openMenu }) => (openMenu ? "255px" : "64px")};
  right: 0;

  width: 100%;
  height: 65px;
  background: #ffffff;
  gap: 8px;
  padding: 0 8px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    left: 0;
    padding: 0 4px;
  }
  z-index: 1;
`;
