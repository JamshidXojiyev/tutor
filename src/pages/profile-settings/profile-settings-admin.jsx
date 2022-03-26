import React, { useContext, useState } from "react";
import MyButton from "../../components/my-button/my-button";
import MyDialog from "../../components/my-dialog/my-dialog";
import { MyDiv } from "../../global-styles/my-div.s";
import { P } from "./profile-settings.s";
import { ReactComponent as EditSvg } from "../../assets/icon/edit.svg";
import { LanguagesContext } from "../../locale/languagesContext";

function ProfileAettingsAdmin(props) {
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanTutor = languages.value.profileSettings;
  // dialog state
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
      <MyDiv display="inline-block"></MyDiv>
      <MyDialog
        title="Student info"
        body={<h1>hello</h1>}
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default ProfileAettingsAdmin;
