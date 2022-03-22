import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LanguagesContext } from "../../locale/languagesContext";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import MySelect from "../../components/my-select/my-select";
import { MyForm } from "../../global-styles/form.s";
import { MyDiv } from "../../global-styles/my-div.s";

function StudentDialog() {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanForm = languages.value.form;

  const formik = useFormik({
    initialValues: {
      firstname: "asd",
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
      // client
      //   .post(`${process.env.REACT_APP_BASE_URL}/api/auth/signin`, val)
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
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
      name: "groupName",
      label: lanForm.groupName,
      select: true,
      option: ["I-52-i", "I-50", "IM-80-i", "IMT-90"],
    },
    {
      name: "course",
      label: lanForm.course,
      select: true,
      option: [
        `1 - ${lanForm.cours}`,
        `2 - ${lanForm.cours}`,
        `3 - ${lanForm.cours}`,
        `4 - ${lanForm.cours}`,
      ],
    },
    {
      name: "speciality",
      label: lanForm.speciality,
      select: true,
      option: [
        "Iqtisodiyot (tarmoqlar va sohalar bo'yicha)",
        "Moliya va moliyaviy texnologiyalar",
        "Buxgalteriya va audit",
      ],
    },
    {
      name: "educationType",
      label: lanForm.educationType,
    },
    {
      name: "paymentType",
      label: lanForm.paymentType,
      select: true,
      option: [lanForm.paymentType1, lanForm.paymentType2],
    },
    {
      name: "nationality",
      label: lanForm.nationality,
      select: true,
      option: [
        lanForm.nation1,
        lanForm.nation2,
        lanForm.nation3,
        lanForm.nation4,
        lanForm.nation5,
        lanForm.nation6,
        lanForm.nation7,
        lanForm.nation8,
      ],
    },
    {
      name: "familyStatus",
      label: lanForm.familyStatus,
      select: true,
      option: [lanForm.familyStatusFalse, lanForm.familyStatusTrue],
    },
    {
      name: "invalidStudent",
      label: lanForm.invalidStudent,
      select: true,
      option: [
        lanForm.invalidFalse,
        lanForm.invalid1,
        lanForm.invalid2,
        lanForm.invalid3,
        lanForm.invalid4,
        lanForm.invalid5,
        lanForm.invalid6,
        lanForm.invalid7,
      ],
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
      option: ["Erkak", "Ayol"],
    },
    {
      name: "passportData",
      label: lanForm.passportData,
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
      type: "textarea",
    },
    {
      name: "parentsName",
      label: lanForm.parentsName,
    },
    {
      name: "address",
      label: lanForm.address,
    },
    {
      name: "phoneNumber",
      label: lanForm.parents_number,
      type: "number",
    },
    {
      name: "needy",
      label: lanForm.needy,
      width: true,
      select: true,
      option: [lanForm.needyFalse, lanForm.needyTrue],
    },
    {
      name: "orphanStudent",
      label: lanForm.orphanStudent,
      select: true,
      width: true,
      option: [
        lanForm.orphanFalse,
        lanForm.orphanMom,
        lanForm.orphanDad,
        lanForm.orphanParent,
      ],
    },
    {
      name: "parentsRetiree",
      label: lanForm.parentsRetiree,
      select: true,
      option: [
        lanForm.retireDad,
        lanForm.retireMom,
        lanForm.retireParent,
        lanForm.retireFalse,
      ],
    },
    {
      name: "invalidParents",
      label: lanForm.invalidParents,
      select: true,
      option: [
        lanForm.invalidFalse,
        lanForm.invalidMom,
        lanForm.invalidDad,
        lanForm.invalidParent,
      ],
    },
  ];

  return (
    <MyForm onSubmit={formik.handleSubmit} style={{ width: "420px" }}>
      <MyDiv spaceBetween gap="8px">
        {data.map(({ name, label, width, type, select, option }) => {
          return select ? (
            <MySelect
              option={option}
              width={width ? "200px" : "100%"}
              label={label}
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
        text={lanForm.create}
        type="submit"
        margin="20px 0 0 auto"
      />
    </MyForm>
  );
}

export default StudentDialog;
