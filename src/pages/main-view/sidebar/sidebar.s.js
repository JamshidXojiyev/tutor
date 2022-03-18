import styled from "styled-components";
import { css } from "styled-components";

export const SidebarStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  width: ${({ openMenu }) => (openMenu ? "255px" : "64px")};
  height: 100vh;
  background: #ffffff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.06);
  padding: 16px 8px;
  z-index: 9;

  @media only screen and (max-width: 700px) {
    width: ${({ openMenu }) => (openMenu ? "255px" : "0")};
    padding: ${({ openMenu }) => (openMenu ? "16px 8px" : "0")};
  }
`;
// user
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  overflow: hidden;
`;
export const AvatarImageStyle = styled.img`
  width: 46px;
  height: 46px;
  object-fit: cover;
  border-radius: 50%;
`;
export const Name = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #00140e;
`;
export const Email = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #707eae;
`;

export const Title = styled.h1`
  margin-left: 4px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #707eae;
  margin-bottom: 12px;
  height: 16px;
`;
// menu lists
export const UlStyle = styled.ul`
  list-style: none;
  overflow-x: hidden;
`;
export const LiStyle = styled.li`
  && {
    height: 38px;
    width: 223px;
    overflow-x: hidden;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    svg {
      width: 22px;
      height: 22px;
      path {
        stroke: #00140e;
      }
    }

    :hover {
      color: #00dea3;
      path {
        stroke: #00dea3 !important;
      }
    }

    ${({ activ }) =>
      activ
        ? css`
            color: #00dea3;
            path {
              stroke: #00dea3 !important;
            }
          `
        : css`
            color: #00140e;
          `}

    margin-left: 12px;
  }
`;
export const Circle = styled.div`
  width: 8px;
  height: 8px;
  background: #00dea3;
  border-radius: 50%;
`;
