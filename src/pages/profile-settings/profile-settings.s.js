import styled, { css } from "styled-components";
import MyButton from "../../components/my-button/my-button";

export const P = styled.p`
  color: #242525;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
`;
export const UserImgStyle = styled.img`
  width: 168px;
  object-fit: cover;
  display: inline;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
export const Info = styled.div`
  margin-right: 17px;
  border-right: ${({ border }) => (border ? "1px solid #eff0f4" : "")};
  @media only screen and (max-width: 1330px) {
    border-right: 0;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const Row = styled.div`
  display: flex;
  margin-top: 12px;
`;
export const Td = styled.span`
  /* min-width: 170px; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ bold }) => (bold ? "#242525" : "#8388A2")};
  margin-right: 10px;
`;
export const EditProfile = styled(MyButton)`
  ${({ top }) =>
    top
      ? css`
          font-size: 13px;
          gap: 10px;
          @media only screen and (max-width: 500px) {
            display: none;
          }
        `
      : css`
          @media only screen and (min-width: 500px) {
            display: none;
          }
          @media only screen and (max-width: 500px) {
            position: absolute;
            top: 0;
            right: 0;
            transform: translateX(40%) translateY(-40%);
            border-radius: 50%;
            width: 48px;
            height: 48px;
          }
        `}
`;
