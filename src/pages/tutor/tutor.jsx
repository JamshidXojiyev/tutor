import React, { useContext, useEffect, useState } from "react";
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
import { LanguagesContext } from "../../locale/languagesContext";
import { TutorContext } from "../../context/tutorState";

function Tutor() {
  //Language section
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanStudent = languages.value.students;
  const lanTutor = languages.value.admin;
  //Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  //Table state

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
  const [tutorData, setTutorData] = useContext(TutorContext);
  console.log(tutorData);
  const getTutorFunc = () => {
    GetTutorConfig().then((res) => {
      console.log(res);
      const data = res.data.map((item) => {
        const subData = {
          // student: `${item.firstname}  ${item.lastname}`,
          // father_name: item.fatherName,
          // birth_day: item.birthDate,
          // course: item.studyInfo.course,
          // group: item.group.groupName,
          // special: item.studyInfo.speciality,
          // btn: (
          //   <>
          //     <MyButton
          //       onClick={() => setTutorData({ ...tutorData, thisData: item })}
          //       icon
          //       tableIcon
          //       svg={<EditIcon />}
          //     />
          //     <MyButton icon tableIcon svg={<DeleteIcon />} />
          //   </>
          // ),
        };
        return subData;
      });
      setTutorData({ ...tutorData, body: data });
    });
  };
  useEffect(() => {
    getTutorFunc();
  }, []);
  return (
    <>
      <MyDiv margin="0 0 16px 0" spaceBetween>
        <MyDiv widthCenter>
          <PageTitle>{lanTutor.list_of_tutor}</PageTitle>
          <TotalUsers>{`274 ${lanStudent.users}`}</TotalUsers>
          <MyInput
            search
            placeholder={lanStudent.search_by_name}
            height="48px"
            rightIcon={<SearchIcon />}
            setValue={(e) => console.log(e)}
          />
        </MyDiv>
        <MyDiv widthCenter gap="12px">
          <MyButton
            svg={<AddIcon />}
            text={lanTutor.add_tutor}
            onClick={() => setDialogOpen(true)}
          />
        </MyDiv>
      </MyDiv>
      <MyDiv width="100%" block display="inline-block">
        <MyTable data={tutorData} total="123" loading={false} />
      </MyDiv>
      <MyDialog
        title={lanTutor.tutor_info}
        body={<TutorDiaolog setDialog={setDialogOpen} />}
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default Tutor;
