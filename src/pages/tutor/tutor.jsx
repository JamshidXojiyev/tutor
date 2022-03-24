import React, { useState } from "react";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import { MyDiv } from "../../global-styles/my-div.s";
import { PageTitle, TotalUsers } from "../../global-styles/page.s";
import { ReactComponent as AddIcon } from "../../assets/icon/add.svg";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import MyDialog from "../../components/my-dialog/my-dialog";

function Tutor() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <MyDiv margin="0 0 16px 0" spaceBetween>
        <MyDiv widthCenter>
          <PageTitle>Tutor list</PageTitle>
          <TotalUsers>274 Users</TotalUsers>
          <MyInput
            search
            placeholder="Search by Name"
            height="48px"
            rightIcon={<SearchIcon />}
            setValue={(e) => console.log(e)}
          />
        </MyDiv>
        <MyDiv widthCenter gap="12px">
          <MyButton
            svg={<AddIcon />}
            text="Add New Tutor"
            onClick={() => setDialogOpen(true)}
          />
        </MyDiv>
      </MyDiv>
      <MyDialog
        title="Tutor info"
        body={<h1>tutor dialog</h1>}
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default Tutor;
