import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MyInput from "../../components/my-input/my-input";
import { LanguagesContext } from "../../locale/languagesContext";
import { deleteLocalStorage } from "../../functions/useLocalStorage";
import { ChangePasswordConfig } from "../../server/config/CrudUrls";
import { MyDiv } from "../../global-styles/my-div.s";
import { MyForm } from "../../global-styles/form.s";
import MyButton from "../../components/my-button/my-button";
import { toast } from "react-toastify";
import { toastEdit } from "../../functions/messages";

function ChangePassword(props) {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanSignIn = languages.value.signin;
  const lanForm = languages.value.form;
  // change password formik
  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({
      oldPassword: Yup.string().required(lanSignIn.password_required_err),
      newPassword: Yup.string()
        .min(5, lanSignIn.min_err)
        .required(lanSignIn.password_required_err),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("newPassword")],
        lanSignIn.confirm_warning
      ),
    }),
    onSubmit: (val) => {
      ChangePasswordConfig(val).then((res) => {
        console.log(res);
        toastEdit("Parol");
        props.closeRender(1);
        deleteLocalStorage("token");
        deleteLocalStorage("refresh_token");
        deleteLocalStorage("role");
        deleteLocalStorage("userId");
        window.location.href = "/sigin";
      });
    },
  });
  const data = [
    {
      name: "oldPassword",
      label: lanSignIn.old_password,
    },
    {
      name: "newPassword",
      label: lanSignIn.password_placeholder,
    },
    {
      name: "confirmPassword",
      label: lanSignIn.confirm_passwrod,
    },
  ];
  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyDiv spaceBetween gap="8px">
        {data.map(({ name, label }) => {
          return (
            <MyInput
              password
              key={name}
              width="100%"
              margin="0 0 10px"
              label={label}
              name={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[name] && formik.errors[name] ? true : false}
              errorMessage={formik.touched[name] && formik.errors[name]}
            />
          );
        })}
      </MyDiv>
      <MyDiv gap="16px" display="flex" margin="20px 0 0 0">
        <MyButton
          width="50%"
          text={lanForm.cancel}
          red
          onClick={() => props.close(false)}
        />
        <MyButton
          // disabled={true}
          width="50%"
          text={lanForm.edit}
          type="submit"
        />
      </MyDiv>
    </MyForm>
  );
}

export default ChangePassword;
