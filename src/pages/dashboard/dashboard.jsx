import React from "react";
import ProfileDiaolog from "../profile-settings/profile-dialog";

function Dashboard(props) {
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <>
      <h1>Dashboard page</h1>
      <ProfileDiaolog />
    </>
  );
}

export default Dashboard;
