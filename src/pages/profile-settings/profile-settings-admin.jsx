import React, { useContext, useEffect, useState } from "react";
import { LanguagesContext } from "../../locale/languagesContext";
import { EditProfile, P } from "./profile-settings.s";
import { ReactComponent as EditSvg } from "../../assets/icon/edit.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import MyDialog from "../../components/my-dialog/my-dialog";
import { GetUserByIdConfig } from "../../server/config/CrudUrls";
import { getLocalStorage } from "../../functions/useLocalStorage";
import ProfileAdminDiaolog from "./profile-admin-dialog";
import MyInfo from "../../components/my-info/my-info";
import Info from "./info";

function ProfileAettingsAdmin(props) {
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanAdmin = languages.value.admin;
  const lanForm = languages.value.form;
  // state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [render, setRender] = useState(1);
  const [loading, setLoading] = useState(false);

  // User api functions
  const [data, setData] = useState({});
  const getUserFunc = () => {
    setLoading(true);
    GetUserByIdConfig(getLocalStorage("userId"))
      .then((res) => {
        let { email, id, userProfile, username } = res.data;
        setData({ ...userProfile, id, email, username });
      })
      .finally((err) => setLoading(false));
  };
  useEffect(() => {
    getUserFunc();
  }, []);
  // Profile funtions
  const testData = {
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
      data.gender,
    ],
  };

  return (
    <>
      {/* Header section */}
      <MyDiv widthCenter spaceBetween margin="0 0 30px">
        <P>{lanAdmin.admin_info}</P>
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
      {/* Dialog section */}
      <MyDialog
        heightAuto
        height="440px"
        title={lanAdmin.admin_info}
        body={
          <ProfileAdminDiaolog
            informs={data}
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

export default ProfileAettingsAdmin;
