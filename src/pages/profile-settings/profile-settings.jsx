import React, { useContext, useEffect, useState } from "react";
import { LanguagesContext } from "../../locale/languagesContext";
import { EditProfile, P } from "./profile-settings.s";
import { ReactComponent as EditSvg } from "../../assets/icon/edit.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import MyDialog from "../../components/my-dialog/my-dialog";
import ProfileDiaolog from "./profile-dialog";
import Info from "./info";
import { GetTutorPersonalInfo } from "../../server/config/CrudUrls";

function ProfileSettings(props) {
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanTutor = languages.value.profileSettings;
  const lanAdmin = languages.value.admin;
  // state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [render, setRender] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const lanForm = languages.value.form;
  // Profile funtions
  const getTutorInforms = () => {
    GetTutorPersonalInfo().then((res) => {
      console.log(res.data);
      setData({
        ...res.data.address,
        ...res.data.userProfile,
        category: res.data.eduInfo.category,
        level: res.data.eduInfo.level,
        description1: res.data.eduInfo.description,
        email: res.data.email,
        groups: res.data.studentGroups,
        id: res.data.id,
      });
    });
  };

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
        data.firstname + " " + data.lastname,
        data.fatherName,
        data.birthDate,
        data.phoneNumber,
        lanForm[`gender${data.gender}`],
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
        data.passportDate,
        data.country,
        data.region,
        data.district,
        data.description,
      ],
    },
    {
      name: [lanForm.category, lanForm.level, lanForm.description1],
      value: [data.category, data.level, data.description1],
    },
  ];

  console.log(data);
  useEffect(() => {
    getTutorInforms();
  }, []);

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
            data={data}
          />
        }
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default ProfileSettings;
