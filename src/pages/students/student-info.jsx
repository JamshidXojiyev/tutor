import React, { useContext, useState } from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { EditProfile, P } from "../profile-settings/profile-settings.s";
import { ReactComponent as EditSvg } from "../../assets/icon/edit.svg";
import { ReactComponent as BottomIcon } from "../../assets/icon/bottom.svg";
import MyDialog from "../../components/my-dialog/my-dialog";
import { LanguagesContext } from "../../locale/languagesContext";
import MyInfo from "../../components/my-info/my-info";
import { LoadingBlock } from "../../components/my-table/components/loading/loading.s";
import {
  Backspace,
  Potential,
  PotentialTitle,
  ValueType,
} from "../../global-styles/page.s";
import StudentDialog from "./student-diaolog";

function StudentInfo(props) {
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
  const studentData = [
    {
      name: [
        lanForm.firstname,
        lanForm.lastname,
        lanForm.father_name,
        lanForm.nationality,
        lanForm.birth_date,
      ],
      value: [
        props.studentInfo.firstname,
        props.studentInfo.lastname,
        props.studentInfo.fatherName,

        lanForm[`nation${props.studentInfo.nationality}`],
        props.studentInfo.birthDate,
      ],
    },
    {
      name: [
        lanForm.passportData,
        lanForm.gender,
        lanForm.familyStatus,
        lanForm.invalidStudent,
        lanForm.phone_number,
      ],
      value: [
        props.studentInfo.passportData,
        lanForm[`gender${props.studentInfo.gender}`],
        props.studentInfo.familyStatus
          ? lanForm.familyStatus0
          : lanForm.familyStatus0,
        lanForm[`invalid${props.studentInfo.familyInformation.invalidStudent}`],
        props.studentInfo.familyInformation.phoneNumber,
      ],
    },
    {
      name: [
        lanForm.country,
        lanForm.region,
        lanForm.district,
        lanForm.description,
        lanForm.address,
      ],
      value: [
        props.studentInfo.address.country,
        // props.studentInfo.address.district,
        "toshkent",
        "parkent",
        // lanForm[`district${props.studentInfo.address.district}`],
        // props.studentInfo.address.region,
        props.studentInfo.address.description,
        props.studentInfo.familyInformation.address,
      ],
    },
    {
      name: [
        lanForm.university,
        lanForm.speciality,
        lanForm.groupName,
        lanForm.course,
        lanForm.paymentType,
      ],
      value: [
        props.studentInfo.studyInfo.university,
        props.studentInfo.studyInfo.speciality,
        lanForm[`course${props.studentInfo.studyInfo.course}`],
        props.studentInfo.group.groupName,
        <ValueType type={props.studentInfo.studyInfo.paymentType === 0}>
          {lanForm[`paymentType${props.studentInfo.studyInfo.paymentType}`]}
        </ValueType>,
      ],
    },
    {
      name: [
        lanForm.invalidParents,
        lanForm.needy,
        lanForm.orphanStudent,
        lanForm.parentsName,
        lanForm.parentsRetiree,
        lanForm.phoneNumber,
      ],
      value: [
        lanForm[
          `invalidParent${props.studentInfo.familyInformation.invalidParents}`
        ],
        lanForm[`needy${props.studentInfo.familyInformation.needy}`],
        lanForm[`orphan${props.studentInfo.familyInformation.orphanStudent}`],
        props.studentInfo.familyInformation.parentsName,
        props.studentInfo.familyInformation.parentsRetiree,
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
  console.log(props.studentInfo.creativePotential);
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
      <MyDiv margin="12px 0 0 0" display="inline-block">
        {props.studentInfo?.creativePotential?.map((item) => (
          <MyDiv block>
            <Potential>
              <PotentialTitle>{item.type}</PotentialTitle>
              <ul>
                {item?.category.map((sub) => (
                  <li>{sub}</li>
                ))}
              </ul>
            </Potential>
          </MyDiv>
        ))}
      </MyDiv>
      {/* Dialog section */}
      <MyDialog
        title={lanStudent.student_info}
        body={
          <StudentDialog
            closeDialog={(e) => {
              props.closeRender(e);
              setDialogOpen(e);
            }}
            refresh={(e) => setRefresh(refresh + e)}
            thisData={props.studentInfo}
            groups={props.groups}
          />
        }
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default StudentInfo;
