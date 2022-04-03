import React, { useContext } from "react";
import MyInfo from "../../components/my-info/my-info";
import { LoadingBlock } from "../../components/my-table/components/loading/loading.s";
import { MyDiv } from "../../global-styles/my-div.s";
import { LanguagesContext } from "../../locale/languagesContext";
import { EditProfile } from "./profile-settings.s";
import { ReactComponent as EditSvg } from "../../assets/icon/edit.svg";

function Info(props) {
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanForm = languages.value.form;

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
      <MyDiv display="inline-block" relative="relative">
        {!props.loading && (
          <EditProfile
            svg={<EditSvg />}
            onClick={() => props.setDialogOpen(true)}
          />
        )}
        <MyInfo data={props.loading ? testData : props.data} />
      </MyDiv>
    </>
  );
}

export default Info;
