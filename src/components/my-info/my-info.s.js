import styled, { css } from "styled-components";

export const InfoContainer = styled.div`
  && {
    background: #ffffff;
    border-radius: 12px;
    padding: 18px;

    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    @media only screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
`;
export const UserImage = styled.div`
  width: 168px;
  height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  border-radius: 12px;
  @media only screen and (max-width: 500px) {
    width: auto;
  }
`;
export const TableStyle = styled.table`
  display: block;
  border-spacing: 16px 8px;
`;
export const TrStyle = styled.tr``;
export const TdStyle = styled.td`
  ${({ name }) =>
    name
      ? css`
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          text-transform: capitalize;
          color: #8388a2;
        `
      : css`
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          text-transform: capitalize;
          color: #242525;
        `}
`;
