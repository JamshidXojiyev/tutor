import React, { useContext, useState } from "react";
import { LanguagesContext } from "../../locale/languagesContext";
import { Info, P, Row, Td, UserImgStyle } from "./profile-settings.s";
import MyButton from "../../components/my-button/my-button";
import { ReactComponent as EditSvg } from "../../assets/icon/edit.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import UserIcon from "../../assets/image/user.png";
import MyDialog from "../../components/my-dialog/my-dialog";
import ProfileDiaolog from "./profile-dialog";

function ProfileSettings(props) {
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanTutor = languages.value.profileSettings;
  const lanForm = languages.value.form;
  // Profile funtions
  const firstData = [
    {
      th: lanForm.full_name,
      td: "Farhod Dadajonov",
    },
    {
      th: lanForm.father_name,
      td: "Ro'ziboyev",
    },
    {
      th: lanForm.birth_date,
      td: "15.08.1998",
    },
    {
      th: lanForm.phone_number,
      td: "(99) 436-46-15",
    },
    {
      th: lanForm.gender,
      td: "Erkak",
    },
  ];
  const secondData = [
    {
      th: lanForm.passportData,
      td: "AB7567153",
    },
    {
      th: lanForm.country,
      td: "O'zbekiston",
    },
    {
      th: lanForm.region,
      td: "Farg'ona",
    },
    {
      th: lanForm.district,
      td: "Quva",
    },
    {
      th: lanForm.description,
      td: "Ingliz tilidan dars bera oladi",
    },
  ]; 

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      {/* Header section */}
      <MyDiv widthCenter spaceBetween margin="0 0 18px">
        <P>{lanTutor.tutor_info}</P>
        <MyButton
          svg={<EditSvg />}
          text={lanTutor.edit_tutor}
          onClick={() => setDialogOpen(true)}
        />
      </MyDiv>
      {/* Info section */}
      <MyDiv display="inline-block">
        <MyDiv widthCenter block gap="17px">
          <UserImgStyle src={UserIcon} />
          <Info border>
            {firstData.map((item) => {
              return (
                <Row key={item.th}>
                  <Td bold>{item.th}:</Td>
                  <Td>{item.td}</Td>
                </Row>
              );
            })}
          </Info>
          <Info>
            {secondData.map((item) => {
              return (
                <Row key={item.th}>
                  <Td bold>{item.th}:</Td>
                  <Td>{item.td}</Td>
                </Row>
              );
            })}
          </Info>
        </MyDiv>
      </MyDiv>
      <MyDialog
        title="Student info"
        body={<ProfileDiaolog />}
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default ProfileSettings;
