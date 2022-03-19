import styled from "styled-components";

export const P = styled.p`
  color: #242525;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  margin-bottom: 27px;
`;
export const MainDiv = styled.div`
  width: 100%;
  border-radius: 12px;
  background: #ffffff;
  padding: 17px 100px 17px 18px;
  display: flex;
`;
export const UserDiv = styled.div`
  width: 168px;
  height: 168px;
  padding: 39px;
  background: #f7f7f7;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-itmes: center;
`;
export const Info = styled.div`
  margin-left: 17px;
`;
export const Row = styled.div`
  display: flex;
  margin-top: 12px;
`;
export const Td = styled.span`
  min-width: 170px;
  font-family: "Inter";
  font-style: normal;
  // font-weight: ${({ bold }) => (bold ? "700" : "500")};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ bold }) => (bold ? "#242525" : "#8388A2")};
  margin-right: 10px;
`;
export const Line = styled.div`
  width: 1px;
  background-color: #eff0f4;
  height: 168px;
  margin-left: 18px;
`;
