import React from "react";
import MyInput from "../../components/my-input/my-input";
import MyTable from "../../components/my-table/my-table";
import { MyDiv } from "../../global-styles/my-div.s";
import { PageTitle, TotalUsers } from "../../global-styles/page.s";

import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";

function Students() {
  const data = {
    header: [
      "first name",
      "last name",
      "father name",
      "age",
      "birth day",
      "group",
      "invalid",
    ],
    body: [
      {
        first_name: "doniyor",
        last_name: "farmonov",
        father_name: "jsur",
        age: 20,
        birth_day: "21.05.2001",
        group: "202-group",
        special: "geodeziya va geoinformatika",
      },
    ],
    order: [
      "first_name",
      "last_name",
      "father_name",
      "age",
      "birth_day",
      "group",
      "special",
    ],
  };
  return (
    <>
      <MyDiv margin="0 0 16px 0">
        <MyDiv widthCenter>
          <PageTitle>Students list</PageTitle>
          <TotalUsers>274 Users</TotalUsers>
          <MyInput
            search
            placeholder="Search by Name"
            height="48px"
            rightIcon={<SearchIcon />}
            setValue={(e) => console.log(e)}
          />
        </MyDiv>
      </MyDiv>
      <MyDiv block display="inline-block">
        <MyTable data={data} total="123" loading={false} />
      </MyDiv>
    </>
  );
}

export default Students;
