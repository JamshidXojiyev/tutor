import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0px;
  left: ${({ openMenu }) => (openMenu ? "255px" : "64px")};
  right: 0;

  height: 65px;
  background: #ffffff;
  gap: 8px;
  padding: 0 8px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    left: 0;
    padding: 0 4px;
  }
  z-index: 1;
`;
export const UserName = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.016em;
  color: #00261c;
`;
export const Date = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #707eae;
`;
