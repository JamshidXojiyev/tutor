import { useFormik } from "formik";
import React, { useContext } from "react";
import MyInput from "../../components/my-input/my-input";
import { MyDiv } from "../../global-styles/my-div.s";
import { LanguagesContext } from "../../locale/languagesContext";
import * as Yup from "yup";
import { MyForm } from "../../global-styles/form.s";
import MyButton from "../../components/my-button/my-button";
import MySelect from "../../components/my-select/my-select";
import { EditTutorConfig } from "../../server/config/CrudUrls";
import { toastEdit } from "../../functions/messages";

function ProfileDiaolog(props) {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanForm = languages.value.form;
  const obj = props.data;
  const formik = useFormik({
    initialValues: {
      firstname: obj.firstname,
      fatherName: obj.fatherName,
      lastname: obj.lastname,
      birthDate: obj.birthDate,
      phoneNumber: obj.phoneNumber,
      gender: obj.gender,
      passportData: obj.passportData,
      country: obj.country,
      region: obj.region,
      district: obj.district,
      description: obj.description,
      category: obj.category,
      level: obj.level,
      description1: obj.description1,
    },
    validationSchema: Yup.object({}),
    onSubmit: (val) => {
      console.log(val);
      let sendObj = {
        address: {
          country: val.country,
          region: val.region,
          district: val.district,
          description: val.description,
        },
        category: val.category,
        level: val.level,
        description: val.description1,
        groups: obj.groups,
        user: {
          email: obj.email,
          username: obj.username,
          roles: ["tutor"],
          profile: {
            firstname: val.firstname,
            fatherName: val.fatherName,
            lastname: val.lastname,
            birthDate: val.birthDate,
            phoneNumber: val.phoneNumber,
            gender: val.gender,
            passportDate: val.passportData,
          },
        },
      };
      console.log(sendObj);
      EditTutorConfig(obj.id, sendObj).then((res) => {
        toastEdit("Tutor");
        console.log(res);
        props.closeRender(1);
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
      name: "category",
      label: lanForm.category,
    },
    {
      name: "level",
      label: lanForm.level,
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
    <MyForm onSubmit={formik.handleSubmit}>
      <MyDiv spaceBetween gap="8px">
        {data.map(({ name, label, width, type, select, option }) => {
          return select ? (
            <MySelect
              key={name}
              option={option}
              width="48%"
              label={label}
              name={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ) : (
            <MyInput
              key={name}
              width={width ? "48%" : "100%"}
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

export default ProfileDiaolog;
