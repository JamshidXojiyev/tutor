import React from "react";
import ProfileDiaolog from "../profile-settings/profile-dialog";
import StudentDialog from "../students/student-diaolog";

function Dashboard(props) {
  return (
    <>
      <h1>Dashboard page</h1>
      <ProfileDiaolog />
      <StudentDialog />
    </>
  );
}

export default Dashboard;
