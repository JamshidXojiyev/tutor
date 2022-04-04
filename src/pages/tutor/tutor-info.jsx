import React, { useContext, useState } from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { EditProfile } from "../profile-settings/profile-settings.s";
import { ReactComponent as EditSvg } from "../../assets/icon/edit.svg";
import { ReactComponent as BottomIcon } from "../../assets/icon/bottom.svg";
import MyDialog from "../../components/my-dialog/my-dialog";
import { LanguagesContext } from "../../locale/languagesContext";
import MyInfo from "../../components/my-info/my-info";
import { LoadingBlock } from "../../components/my-table/components/loading/loading.s";
import { Backspace, ValueType } from "../../global-styles/page.s";
import TutorDiaolog from "./tutor-diaolog";

function TutorInfo(props) {
  //Language section
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanAdmin = languages.value.admin;
  const lanForm = languages.value.form;
  const lanStudent = languages.value.students;
  //Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);

  //Render state
  const [refresh, setRefresh] = useState(0);
  // Student api functions
  const [loading, setLoading] = useState(false);
  //Get student
  console.log(props.studentInfo);
  const studentData = [
    {
      name: [
        lanForm.firstname,
        lanForm.lastname,
        lanForm.father_name,
        lanForm.email,
      ],
      value: [
        props.studentInfo.user.userProfile.firstname,
        props.studentInfo.user.userProfile.lastname,
        props.studentInfo.user.userProfile.fatherName,
        props.studentInfo.user.email,
      ],
    },
    {
      name: [
        lanForm.birth_date,
        lanForm.phone_number,
        lanForm.passportData,
        lanForm.gender,
      ],
      value: [
        props.studentInfo.user.userProfile.birthDate,
        props.studentInfo.user.userProfile.phoneNumber,
        props.studentInfo.user.userProfile.passportDate,
        lanForm[`gender${props.studentInfo.user.userProfile.gender}`],
      ],
    },
    {
      name: [lanForm.category, lanForm.level, lanForm.description],
      value: [
        props.studentInfo.eduInfo.category,
        props.studentInfo.eduInfo.level,
        props.studentInfo.eduInfo.description,
      ],
    },
    {
      name: [
        lanForm.country,
        lanForm.region,
        lanForm.district,
        lanForm.description,
      ],
      value: [
        props.studentInfo.address.country,
        "toshkent",
        "parkent",
        props.studentInfo.address.description,
      ],
    },
  ];
  const loadingData = [
    {
      name: [
        lanForm.full_name,
        lanForm.father_name,
        lanForm.birth_date,
        lanForm.phone_number,
        lanForm.gender,
      ],
      value: [
        <LoadingBlock width="105px" height="12px" />,
        <LoadingBlock width="60px" height="12px" />,
        <LoadingBlock width="90px" height="12px" />,
        <LoadingBlock width="100px" height="12px" />,
        <LoadingBlock width="40px" height="12px" />,
      ],
    },
  ];
  return (
    <>
      {/* Header section */}
      <MyDiv widthCenter spaceBetween margin="0 0 30px">
        <Backspace onClick={() => props.close(false)}>
          <BottomIcon />
          {lanStudent.student_info}
        </Backspace>
        <EditProfile
          top
          text={lanAdmin.edit_admin}
          svg={<EditSvg />}
          onClick={() => setDialogOpen(true)}
        />
      </MyDiv>
      {/* Info section */}
      <MyDiv display="inline-block" relative="relative">
        <EditProfile
          svg={<EditSvg />}
          onClick={() => {
            setDialogOpen(true);
          }}
        />
        <MyInfo data={loading ? loadingData : studentData} />
      </MyDiv>
      {/* Dialog section */}
      <MyDialog
        title={lanStudent.tutor_info}
        body={
          <TutorDiaolog
            setDialog={(e) => {
              props.closeRender(e);
              setDialogOpen(e);
            }}
            renderFunc={(e) => setRefresh(refresh + e)}
            objTutor={props.studentInfo}
            groups={props.groups}
          />
        }
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default TutorInfo;
