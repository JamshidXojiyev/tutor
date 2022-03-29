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
            <LoadingBlock img width="38px" height="36px" />
            <LoadingContainer width="100%" userInfo>
              <LoadingBlock width="85%" height="12px" />
              <LoadingBlock width="70%" height="12px" />
            </LoadingContainer>
          </LoadingContainer>
        ),
        date: <LoadingBlock width="100%" height="16px" />,
        comments: <LoadingBlock width="100%" height="16px" />,
      },
      {
        user: (
          <LoadingContainer user>
            <LoadingBlock img width="38px" height="36px" />
            <LoadingContainer width="100%" userInfo>
              <LoadingBlock width="85%" height="12px" />
              <LoadingBlock width="70%" height="12px" />
            </LoadingContainer>
          </LoadingContainer>
        ),
        date: <LoadingBlock width="100%" height="16px" />,
        comments: <LoadingBlock width="100%" height="16px" />,
      },
      {
        user: (
          <LoadingContainer user>
            <LoadingBlock img width="38px" height="36px" />
            <LoadingContainer width="100%" userInfo>
              <LoadingBlock width="85%" height="12px" />
              <LoadingBlock width="70%" height="12px" />
            </LoadingContainer>
          </LoadingContainer>
        ),
        date: <LoadingBlock width="100%" height="16px" />,
        comments: <LoadingBlock width="100%" height="16px" />,
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
