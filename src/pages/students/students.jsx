import React from "react";
import MyTable from "../../components/my-table/my-table";
import { MyDiv } from "../../global-styles/my-div.s";

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
      <h1>Students page</h1>
      <MyDiv block display="inline-block">
        <MyTable data={data} total="123" /* loading */ />
      </MyDiv>
    </>
  );
}

export default Students;
