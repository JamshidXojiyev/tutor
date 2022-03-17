import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as BottomIcon } from "../../assets/icon/bottom.svg";

export const Header = styled.div`
  && {
    position: fixed;
    width: 100%;
    height: 48px;
    z-index: 99999;
    left: 0px;
    top: 0px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 5%);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    button:first-child {
      rect:nth-child(1) {
        transform: ${({ position }) =>
          position ? "translateX(0)" : "translateX(-4px)"};
      }
      rect:nth-child(3) {
        transform: ${({ position }) =>
          position ? "translateX(0)" : "translateX(-4px)"};
      }
    }
  }
`;
export const MenuName = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #868686;
`;

// sidear
export const Sidebar = styled.div`
  user-select: none;
  position: fixed;
  width: ${({ position }) => (position ? "278px" : "60px")};
  height: calc(100vh - 48px);
  left: 0px;
  top: 48px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  padding: 18px 6px;
  transition: all 300ms;
  overflow-x: hidden;
  /* z-index: 99; */
  @media only screen and (max-width: 700px) {
    padding: ${({ position }) => (position ? "18px 21px" : "0")};
    width: ${({ position }) => (position ? "100%" : "0")};
    z-index: 1;
  }
`;
export const User = styled.div`
  width: 266px;
  margin-bottom: 12px;
  @media only screen and (max-width: 700px) {
    width: ${({ position }) => position && "100%"};
  }
`;
export const UserImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  float: left;
`;
export const UserName = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #192a3e;
`;
export const UserEmail = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #90a0b7;
`;
export const ItemBlock = styled.div`
  padding: 0 2px 8px;
  cursor: pointer;
`;
export const Item = styled(Link)`
  && {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(35, 38, 56, 0.8);
    position: relative;
    width: 262px;
    height: 41px;
    padding: 0 12px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    ${({ activ }) =>
      activ &&
      css`
        background: #eef1fe;
        color: #5459ea !important;
      `}
    :hover {
      background: #eef1fe;
    }
    svg {
      margin-right: 20px;
    }
    @media only screen and (max-width: 700px) {
      width: ${({ position }) => position && "100%"};
      :hover {
        background: #eef1fe00;
      }
    }
  }
`;
export const BottomBtn = styled(BottomIcon)`
  position: absolute;
  right: 0;
`;
export const SubItemBlock = styled.div`
  margin-top: ${({ position }) => (position ? "8px" : "0")};
  height: ${({ position }) => (position ? "90px" : "0")};
  overflow: hidden;
  transition: all 300ms;
`;
export const SubItem = styled(Link)`
  margin: 0 2px 8px;
  cursor: pointer;
  height: 41px;
  border-radius: 4px;
  padding-left: 50px;
  width: 262px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  :hover {
    background: #eef1fe;
  }
  ${({ activ }) =>
    activ &&
    css`
      background: #eef1fe;
      color: #5459ea !important;
    `}
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: rgba(35, 38, 56, 0.8);
  @media only screen and (max-width: 700px) {
    width: 100%;
    padding-left: 50px;
    width: ${({ position }) => position && "100%"};
    :hover {
      background: #eef1fe00;
    }
  }
`;

// body
export const Body = styled.div`
  position: absolute;
  height: calc(100vh - 48px);
  top: 48px;
  left: ${({ position }) => (position ? "278px" : "60px")};
  right: 0;
  bottom: 0;
  padding: 14px 21px;
  transition: all 300ms;
  @media only screen and (max-width: 700px) {
    left: 0;
  }
`;
