import React from "react";
import MyTable from "../../my-table";
import { LoadingBlock, LoadingContainer } from "./loading.s";

function LoadingTable(props) {
  const data = {
    header: ["User", "Date", "Comments"],
    body: [
      {
        user: (
          <LoadingContainer user>
            <LoadingBlock img width="32px" height="32px" />
            <LoadingContainer userInfo>
              <LoadingBlock width="160  px" height="12px" />
              <LoadingBlock width="130px" height="12px" />
            </LoadingContainer>
          </LoadingContainer>
        ),
        date: <LoadingBlock width="160px" height="16px" />,
        comments: <LoadingBlock width="280px" height="16px" />,
      },
      {
        user: (
          <LoadingContainer user>
            <LoadingBlock img width="32px" height="32px" />
            <LoadingContainer userInfo>
              <LoadingBlock width="160  px" height="12px" />
              <LoadingBlock width="130px" height="12px" />
            </LoadingContainer>
          </LoadingContainer>
        ),
        date: <LoadingBlock width="160px" height="16px" />,
        comments: <LoadingBlock width="280px" height="16px" />,
      },
      {
        user: (
          <LoadingContainer user>
            <LoadingBlock img width="32px" height="32px" />
            <LoadingContainer userInfo>
              <LoadingBlock width="160  px" height="12px" />
              <LoadingBlock width="130px" height="12px" />
            </LoadingContainer>
          </LoadingContainer>
        ),
        date: <LoadingBlock width="160px" height="16px" />,
        comments: <LoadingBlock width="280px" height="16px" />,
      },
    ],
    order: ["user", "date", "comments"],
  };
  return (
    <>
      <MyTable width={props.width} data={data} paginationNone />
    </>
  );
}

export default LoadingTable;
