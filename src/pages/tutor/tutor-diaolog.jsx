import { useFormik } from "formik";
import React, { useContext } from "react";
import MyInput from "../../components/my-input/my-input";
import { MyDiv } from "../../global-styles/my-div.s";
import { LanguagesContext } from "../../locale/languagesContext";
import * as Yup from "yup";
import { MyForm } from "../../global-styles/form.s";
import MyButton from "../../components/my-button/my-button";
import MySelect from "../../components/my-select/my-select";
import { CreateTutorConfig } from "../../server/config/CrudUrls";

function TutorDiaolog(props) {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanForm = languages.value.form;
  const lanSignIn = languages.value.signin;

  const formik = useFormik({
    initialValues: {
      gender: "0",
      region: "0",
      district: "0",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, lanSignIn.min_err)
        .required(lanSignIn.username_required_err),
      email: Yup.string()
        .min(3, lanSignIn.min_err)
        .required(lanSignIn.email_required_err)
        .email(lanSignIn.email_email_err),
      password: Yup.string()
        .min(3, lanSignIn.min_err)
        .required(lanSignIn.password_required_err),
    }),
    onSubmit: (val) => {
      let obj = {
        address: {
          country: val.country,
          region: val.region,
          district: val.district,
          description: val.description,
        },
        category: val.category,
        level: val.level,
        description: val.description1,
        groups: [val.groups],
        user: {
          username: val.username,
          password: val.password,
          email: val.email,
          roles: ["tutor"],
          profile: {
            firstname: val.firstname,
            fatherName: val.fatherName,
            lastname: val.lastname,
            birthDate: val.birthDate,
            phoneNumber: val.phoneNumber,
            gender: val.gender,
            passportData: val.passportData,
          },
        },
      };
      CreateTutorConfig(obj).then((res) => {
        console.log(res);
        props.setDialog(false);
      });
      console.log(obj);
    },
  });

  const data = [
    {
      name: "username",
      label: lanSignIn.username,
    },
    {
      name: "password",
      label: lanSignIn.password,
    },
    {
      name: "email",
      label: lanSignIn.email,
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
      name: "faculty",
      label: lanForm.faculty,
    },
    {
      name: "category",
      label: lanForm.category,
    },
    {
      name: "level",
      label: lanForm.level,
    },
    {
      name: "groups",
      label: lanForm.groupName,
    },
    {
      name: "description1",
      label: lanForm.description1,
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
              error={formik.touched[name] && formik.errors[name] ? true : false}
              errorMessage={formik.touched[name] && formik.errors[name]}
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
              error={formik.touched[name] && formik.errors[name] ? true : false}
              errorMessage={formik.touched[name] && formik.errors[name]}
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
