import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import MyInput from "../../components/my-input/my-input";
import { MyDiv } from "../../global-styles/my-div.s";
import { LanguagesContext } from "../../locale/languagesContext";
import * as Yup from "yup";
import { MyForm } from "../../global-styles/form.s";
import MyButton from "../../components/my-button/my-button";
import MySelect from "../../components/my-select/my-select";
import { EditUserConfig } from "../../server/config/CrudUrls";

function ProfileAdminDiaolog(props) {
  //Language section
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanForm = languages.value.form;
  //Formik section
  const formik = useFormik({
    initialValues: {
      firstname: props.informs.firstname,
      fatherName: props.informs.fatherName,
      lastname: props.informs.lastname,
      birthDate: props.informs.birthDate,
      phoneNumber: props.informs.phoneNumber,
      gender: props.informs.gender,
    },
    validationSchema: Yup.object({
      // username: Yup.string()
      //   .min(3, lanSignIn.min_err)
      //   .required(lanSignIn.email_required_err)
      //   .email(lanSignIn.email_email_err),
      // password: Yup.string()
      //   .min(3, lanSignIn.min_err)
      //   .required(lanSignIn.password_required_err),
    }),
    onSubmit: (value) => {
      console.log(value);
      let obj = {
        profile: value,
      };
      EditUserConfig(props.informs.id, obj).then((res) => {
        console.log(res);
      });
    },
  });
  const data = [
    {
      name: "firstname",
      label: lanForm.firstname,
    },
    {
      name: "lastname",
      label: lanForm.lastname,
    },
    {
      name: "fatherName",
      label: lanForm.father_name,
    },
    {
      name: "phoneNumber",
      label: lanForm.phone_number,
      type: "number",
    },
    {
      name: "birthDate",
      label: lanForm.birth_date,
      type: "date",
      width: true,
    },
    {
      name: "gender",
      label: lanForm.gender,
      width: true,
      select: true,
      option: [lanForm.gender0, lanForm.gender1],
    },
  ];

  return (
    <MyForm onSubmit={formik.handleSubmit} style={{ width: "420px" }}>
      <MyDiv spaceBetween gap="8px">
        {data.map(({ name, label, width, type, select, option }) => {
          return select ? (
            <MySelect
              key={name}
              option={option}
              width="200px"
              label={label}
              name={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ) : (
            <MyInput
              key={name}
              width={width ? "200px" : "100%"}
              type={type ? type : "text"}
              label={label}
              name={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          );
        })}
      </MyDiv>
      <MyButton
        disabled={false}
        text={lanForm.edit}
        type="submit"
        margin="20px 0 0 auto"
      />
    </MyForm>
  );
}

export default ProfileAdminDiaolog;
