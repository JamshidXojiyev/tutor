import React, { useContext, useState } from "react";
import { LanguagesContext } from "../../locale/languagesContext";
import { EditProfile, P } from "./profile-settings.s";
import { ReactComponent as EditSvg } from "../../assets/icon/edit.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import MyDialog from "../../components/my-dialog/my-dialog";
import ProfileDiaolog from "./profile-dialog";
import Info from "./info";

function ProfileSettings(props) {
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanTutor = languages.value.profileSettings;
  const lanAdmin = languages.value.admin;

  const lanForm = languages.value.form;
  // Profile funtions
  const testData = [
    {
      name: [
        lanForm.full_name,
        lanForm.father_name,
        lanForm.birth_date,
        lanForm.phone_number,
        lanForm.gender,
      ],
      value: [
        "",
        "",
        "",
        "",
        "",
        // data.firstname + " " + data.lastname,
        // data.fatherName,
        // data.birthDate,
        // data.phoneNumber,
        // data.gender,
      ],
    },
    {
      name: [
        lanForm.passportData,
        lanForm.country,
        lanForm.region,
        lanForm.district,
        lanForm.description,
      ],
      value: [
        "",
        "",
        "",
        "",
        "",
        // data.firstname + " " + data.lastname,
        // data.fatherName,
        // data.birthDate,
        // data.phoneNumber,
        // data.gender,
      ],
    },
  ];

  // state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [render, setRender] = useState(1);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* Header section */}
      <MyDiv widthCenter spaceBetween margin="0 0 18px">
        <P>{lanTutor.tutor_info}</P>
        {/* <MyButton
          svg={<EditSvg />}
          text={lanTutor.edit_tutor}
          onClick={() => setDialogOpen(true)}
        /> */}
        <EditProfile
          top
          text={lanAdmin.edit_admin}
          svg={<EditSvg />}
          onClick={() => setDialogOpen(true)}
        />
      </MyDiv>
      {/* Info section */}
      <Info
        data={testData}
        loading={loading}
        setDialogOpen={(e) => setDialogOpen(e)}
      />

      <MyDialog
        heightAuto
        title="Student info"
        body={
          <ProfileDiaolog
            close={(e) => setDialogOpen(e)}
            closeRender={(e) => {
              setDialogOpen(false);
              setRender(render + e);
            }}
          />
        }
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default ProfileSettings;
