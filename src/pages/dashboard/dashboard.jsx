import React from "react";
import MyInput from "../../components/my-input/my-input";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import ProfileDiaolog from "../profile-settings/profile-dialog";
function Dashboard(props) {
  return (
    <>
      <h1>Dashboard page</h1>
      <ProfileDiaolog />
    </>
  );
}

export default Dashboard;
