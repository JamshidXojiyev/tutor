import React from "react";
import MyButton from "../../components/my-button/my-button";
import { ReactComponent as AddIcon } from "../../assets/icon/add.svg";
function Dashboard(props) {
  return (
    <>
      <h1>Dashboard page</h1>
      <MyButton blue text="Add" svg={<AddIcon />} />
    </>
  );
}

export default Dashboard;
