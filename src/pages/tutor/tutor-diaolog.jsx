import { useFormik } from "formik";
import React, { useContext } from "react";
import MyInput from "../../components/my-input/my-input";
import { MyDiv } from "../../global-styles/my-div.s";
import { LanguagesContext } from "../../locale/languagesContext";
import * as Yup from "yup";
import { MyForm } from "../../global-styles/form.s";
import MyButton from "../../components/my-button/my-button";
import MySelect from "../../components/my-select/my-select";

function TutorDiaolog({ setDialog }) {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanForm = languages.value.form;
  const formik = useFormik({
    initialValues: {
      firstname: "",
      fatherName: "",
      lastname: "",
      birthDate: "",
      phoneNumber: "",
      gender: "",
      passportData: "",
      country: "",
      region: "",
      district: "",
      description: "",
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
    onSubmit: (val) => {
      console.log(val);
    },
  });

  const data = [
    {
      name: "category",
      label: "Category",
    },
    {
      name: "level",
      label: "Level",
    },
    {
      name: "description1",
      label: "Description",
    },
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
      name: "birthDate",
      label: lanForm.birth_date,
      type: "date",
      width: true,
    },
    {
      name: "phoneNumber",
      label: lanForm.phone_number,
      type: "number",
      width: true,
    },
    {
      name: "passportData",
      label: lanForm.passportData,
      width: true,
    },
    {
      name: "gender",
      label: lanForm.gender,
      width: true,
      select: true,
      option: [lanForm.gender0, lanForm.gender1],
    },
    {
      name: "country",
      label: lanForm.country,
    },
    {
      name: "region",
      label: lanForm.region,
      width: true,
      select: true,
      option: ["Toshlent", "Farg'ona", "Andijon", "Namangan"],
    },
    {
      name: "district",
      label: lanForm.district,
      width: true,
      select: true,
      option: ["Yunusobod", "Olmazor", "Shayxontohur"],
    },
    {
      name: "description",
      label: lanForm.description,
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

export default TutorDiaolog;
