import React, { useEffect, useState } from "react";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import { MyDiv } from "../../global-styles/my-div.s";
import { PageTitle, TotalUsers } from "../../global-styles/page.s";
import { ReactComponent as AddIcon } from "../../assets/icon/add.svg";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import MyDialog from "../../components/my-dialog/my-dialog";
import MyTable from "../../components/my-table/my-table";
import TutorDiaolog from "./tutor-diaolog";
import { GetTutorConfig } from "../../server/config/CrudUrls";

function Tutor() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const mainData = {
    header: ["name", "phoneNumber", "region", "birth date"],
    body: [
      {
        name: "doniyor farmonov",
        group: "+998901234567",
        region: "Tashkent",
        birth_date: "1990/01/01",
      },
      {
        name: "doniyor farmonov",
        group: "+998901234567",
        region: "Tashkent",
        birth_date: "1990/01/01",
      },
      {
        name: "doniyor farmonov",
        group: "+998901234567",
        region: "Tashkent",
        birth_date: "1990/01/01",
      },
      {
        name: "doniyor farmonov",
        group: "+998901234567",
        region: "Tashkent",
        birth_date: "1990/01/01",
      },
    ],
    order: ["name", "group", "region", "birth_date"],
  };
    // Tutor api functions 
   const getTutorFunc = () => {
    GetTutorConfig().then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    getTutorFunc();
  }, []);
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
      <MyDiv width="100%" block display="inline-block">
        <MyTable data={mainData} total="123" loading={false} />
      </MyDiv>
      <MyDialog
        title="Tutor info"
        body={<TutorDiaolog setDialog={setDialogOpen} />}
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default Tutor;
