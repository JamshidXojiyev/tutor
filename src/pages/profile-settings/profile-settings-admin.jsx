import React, { useContext, useEffect, useState } from "react";
import { LanguagesContext } from "../../locale/languagesContext";
import { Info, P, Row, Td, UserImgStyle } from "./profile-settings.s";
import MyButton from "../../components/my-button/my-button";
import { ReactComponent as EditSvg } from "../../assets/icon/edit.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import UserIcon from "../../assets/image/user.png";
import MyDialog from "../../components/my-dialog/my-dialog";
import { GetUserByIdConfig } from "../../server/config/CrudUrls";
import { getLocalStorage } from "../../functions/useLocalStorage";
import ProfileAdminDiaolog from "./profile-admin-dialog";
import MyInfo from "../../components/my-info/my-info";
import { ValueType } from "../../global-styles/page.s";

function ProfileAettingsAdmin(props) {
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanAdmin = languages.value.admin;
  const lanForm = languages.value.form;
  // dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  // User api functions
  const [data, setData] = useState({});
  const getUserFunc = () => {
    GetUserByIdConfig(getLocalStorage("userId")).then((res) => {
      let { email, id, userProfile, username } = res.data;
      console.log(username);
      setData({ ...userProfile, id, email, username });
      console.log({ ...userProfile, id, email, username });
    });
  };
  console.log(data);
  useEffect(() => {
    getUserFunc();
  }, []);
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
        data.firstname + " " + data.lastname,
        data.fatherName,
        data.birthDate,
        data.phoneNumber,
        data.gender,
      ],
    },
  ];

  return (
    <>
      {/* Header section */}
      <MyDiv widthCenter spaceBetween margin="0 0 18px">
        <P>{lanAdmin.admin_info}</P>
        <MyButton
          svg={<EditSvg />}
          text={lanAdmin.edit_admin}
          onClick={() => setDialogOpen(true)}
        />
      </MyDiv>
      {/* Info section */}
      <MyDiv display="inline-block" width="100%">
        <MyInfo data={testData} />
      </MyDiv>
      {/* Dialog section */}
      <MyDialog
        height="440px"
        title={lanAdmin.admin_info}
        body={<ProfileAdminDiaolog informs={data} />}
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default ProfileAettingsAdmin;
