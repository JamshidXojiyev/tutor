import React from "react";
import MyInput from "../../components/my-input/my-input";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import MyTable from "../../components/my-table/my-table";
import MySelect from "../../components/my-select/my-select";
function Dashboard(props) {
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
      <h1>Dashboard page</h1>
      <MyInput
        search
        label="search"
        placeholder="search"
        height="48px"
        rightIcon={<SearchIcon />}
        rightBtnAction={console.log("I`st mee")}
      />
      <MySelect option={["Erkak", "Ayol"]} />
      <MyTable data={data} />
    </>
  );
}

export default Dashboard;
