import styled from "styled-components";

// global tag
export const Div = styled.div``;

// table ui
export const TableStyle = styled.table`
  width: 100%;
  border-spacing: 0px 6px;
`;
export const TrStyle = styled.tr`
  && {
    :first-child {
      background: #f7f8fa;
      border: 1px solid #eff0f4;
      box-sizing: border-box;

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      color: #505470;
    }
  }
`;
export const TdStyle = styled.td`
  && {
    padding: 16px 0;
    padding-left: 12px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: capitalize;
    color: #192a3e;

    :first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    :last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      padding-right: 12px;
    }
  }
`;
// bottom content
export const BottomContent = styled.div``;

// import styled from "styled-components";

// export const TableStyle = styled.table`
//   width: 100%;
//   /* display: block; */
//   overflow: auto;
//   border-spacing: 0px 5px;
// `;
// export const TrStyle = styled.tr`
//   && {
//     overflow: hidden;
//     :hover {
//       background-color: #f7f8fa;
//       td {
//         :first-child {
//           border-top-left-radius: 8px;
//           border-bottom-left-radius: 8px;
//         }
//         :last-child {
//           border-top-right-radius: 8px;
//           border-bottom-right-radius: 8px;
//         }
//       }
//     }
//     :first-child {
//       height: 47px;
//       background: #f7f8fa;
//     }
//     :nth-child(2) {
//       td {
//         padding-top: 8px;
//       }
//     }
//   }
// `;
// export const ThStyle = styled.th`
//   && {
//     white-space:nowrap;
//     padding: 0 10px;
//     :first-child {
//       border-top-left-radius: 8px;
//       border-bottom-left-radius: 8px;
//       border-left: 1px solid #eff0f4;
//     }
//     :last-child {
//       border-top-right-radius: 8px;
//       border-bottom-right-radius: 8px;
//       border-right: 1px solid #eff0f4;
//     }
//     border-top: 1px solid #eff0f4;
//     border-bottom: 1px solid #eff0f4;

//     font-family: "Montserrat", sans-serif;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 12px;
//     color: #505470;
//   }
// `;
// export const TdStyle = styled.td`
//   && {
//     padding: 8px 4px;
//     text-align: center;
//     font-family: "Poppins", sans-serif;
//     font-weight: 500;
//     font-size: 11px;
//     color: #192a3e;
//   }
// `;
// export const TableBottom = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   padding: 26px 0 16px 0;
//   border-top: 1px solid #eff0f4;
//   margin-top: 18px;
// `;
// export const TotalUserStyle = styled.h1`
//   font-family: "Poppins", sans-serif;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   display: flex;
//   align-items: center;
//   color: #232638;
// `;
// export const H3 = styled.h3`
//   font-family: "Poppins", sans-serif;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 12px;
//   color: #232638;
// `;
// export const TableLoding = styled.div``;
