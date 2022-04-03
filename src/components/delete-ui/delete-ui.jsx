import React, { useContext } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/icon/delete.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import { LanguagesContext } from "../../locale/languagesContext";
import MyButton from "../my-button/my-button";

function DeleteUi(props) {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanForm = languages.value.form;
  return (
    <MyDiv heightCenter>
      <DeleteIcon style={{ width: "80%", height: "auto", margin: "20px 0" }} />
      <MyDiv width="100%" gap="16px" display="flex">
        <MyButton
          width="50%"
          text={lanForm.delete}
          red
          onClick={() => props.delete}
        />
        <MyButton
          width="50%"
          text={lanForm.cancel}
          onClick={() => props.close(false)}
        />
      </MyDiv>
    </MyDiv>
  );
}

export default DeleteUi;
