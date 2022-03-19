import React from "react";
import MyInput from "../../components/my-input/my-input";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
function Dashboard(props) {
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
    </>
  );
}

export default Dashboard;
