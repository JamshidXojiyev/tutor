import React from "react";
import SelectSearch from "../../components/select-search/select-search";

function Dashboard(props) {
  return (
    <>
      <h1>Dashboard page</h1>
      <SelectSearch values={["qwerty", "asdfgh"]} name="asd" />
    </>
  );
}

export default Dashboard;
