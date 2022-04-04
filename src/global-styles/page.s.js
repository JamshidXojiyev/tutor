import styled from "styled-components";

export const PageTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #242525;

  margin-right: 8px;
`;
export const TotalUsers = styled.h2`
  padding-left: 8px;
  margin-right: 8px;
  border-left: 1px solid #e4e6ee;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #5b5f7b;
`;
export const ValueType = styled.h3`
  /* height: 28px; */
  padding: 1px 24px;
  background: ${({ type }) =>
    type ? "rgba(36, 193, 143, 0.2)" : "rgba(255, 0, 0, 0.2)"};
  border-radius: 16px;

  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  /* line-height: 19px; */
  color: ${({ type }) => (type ? "#24C18F" : "#FF0000")};
`;
export const Backspace = styled.h1`
  && {
    cursor: pointer;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 6px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    color: #242525;

    svg {
      path {
        stroke: #242525;
      }
      transform: rotate(90deg);
    }
  }
`;
export const Potential = styled.div`
  && {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
    color: #8388a2;
    ul {
      margin-top: 8px;
      padding-left: 28px;
    }
  }
`;
export const PotentialTitle = styled.h1`
  && {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
    color: #242525;
  }
`;
