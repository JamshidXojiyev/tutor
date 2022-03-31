import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LanguagesContext } from "../../locale/languagesContext";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import MySelect from "../../components/my-select/my-select";
import { MyForm } from "../../global-styles/form.s";
import { MyDiv } from "../../global-styles/my-div.s";
import {
  CreateStudentConfig,
  EditStudentConfig,
  GetTutorGroupsConfig,
} from "../../server/config/CrudUrls";
import SelectSearch from "../../components/select-search/select-search";
import { toastAdd, toastEdit } from "../../functions/messages";

function StudentDialog(props) {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanForm = languages.value.form;
  let obj = props.thisData;
  console.log(obj);
  const formik = useFormik({
    initialValues: obj
      ? {
          country: obj.address.country,
          description: obj.address.description,
          district: obj.address.district,
          region: obj.address.region,
          birthDate: obj.birthDate,
          address: obj.familyInformation.address,
          invalidParents: obj.familyInformation.invalidParents,
          invalidStudent: obj.familyInformation.invalidStudent,
          needy: obj.familyInformation.needy,
          orphanStudent: obj.familyInformation.orphanStudent,
          parentsName: obj.familyInformation.parentsName,
          parentsRetiree: obj.familyInformation.parentsRetiree,
          phoneNumber: obj.familyInformation.phoneNumber,
          familyStatus: obj.familyStatus,
          fatherName: obj.fatherName,
          firstname: obj.firstname,
          gender: obj.gender,
          groupName: obj.group.groupName,
          lastname: obj.lastname,
          nationality: obj.nationality,
          passportData: obj.passportData,
          course: obj.studyInfo.course,
          educationType: obj.studyInfo.educationType,
          paymentType: obj.studyInfo.paymentType,
          speciality: obj.studyInfo.speciality,
          university: obj.studyInfo.university,
        }
      : {
          course: "0",
          paymentType: "0",
          nationality: "0",
          nationality: "0",
          familyStatus: "0",
          invalidStudent: "0",
          gender: "0",
          region: "0",
          district: "0",
          needy: "0",
          orphanStudent: "0",
          parentsRetiree: "0",
          invalidParents: "0",
          groupName: props.groups[0],
          // groupName: "I-52-i",
        },
    validationSchema: Yup.object({
      firstname: Yup.string().required(lanForm.firstname_required_err),
      lastname: Yup.string().required(lanForm.lastname_required_err),
      fatherName: Yup.string().required(lanForm.fatherName_required_err),
      university: Yup.string().required(lanForm.university_required_err),
      educationType: Yup.string().required(lanForm.educationType_required_err),
      speciality: Yup.string().required(lanForm.speciality_required_err),
    }),
    onSubmit: (value) => {
      let sendObj = {
        firstname: value.firstname,
        lastname: value.lastname,
        fatherName: value.fatherName,
        nationality: value.nationality,
        passportData: value.passportData,
        group: {
          groupName: value.groupName,
        },
        gender: value.gender,
        addressRequest: {
          country: value.country,
          region: value.region,
          district: value.district,
          description: value.description,
        },
        birthDate: value.birthDate,
        familyInformation: {
          parentsName: value.parentsName,
          address: value.address,
          phoneNumber: value.phoneNumber,
          needy: true,
          orphanStudent: value.orphanStudent,
          parentsRetiree: value.parentsRetiree,
          invalidParents: value.invalidParents,
          invalidStudent: value.invalidStudent,
        },
        studyInfo: {
          course: value.course,
          speciality: value.speciality,
          university: value.university,
          educationType: value.educationType,
          paymentType: value.paymentType,
        },
        familyStatus: true,
        creativePotential: [
          {
            type: "Sport",
            category: ["Voleybo'l"],
          },
        ],
      };
      console.log(sendObj);
      obj
        ? EditStudentConfig(obj.studentId, sendObj).then((res) => {
            toastEdit("Student");
            props.closeDialog(false);
            props.refresh(1);
          })
        : CreateStudentConfig(sendObj).then((res) => {
            console.log(res);
            toastAdd("Student"); 
            props.closeDialog(false);
            props.refresh(1);
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
      name: "university",
      label: lanForm.university,
    },
    {
      name: "educationType",
      label: lanForm.educationType,
    },
    {
      name: "speciality",
      label: lanForm.speciality,
    },
    {
      name: "course",
      label: lanForm.course,
      select: true,
      option: [
        lanForm.course0,
        lanForm.course1,
        lanForm.course2,
        lanForm.course3,
      ],
    },
    {
      name: "groupName",
      label: lanForm.groupName,
      option: props.groups,
      default_value: true,
      select: true,
    },
    {
      name: "paymentType",
      label: lanForm.paymentType,
      select: true,
      option: [lanForm.paymentType0, lanForm.paymentType1],
    },
    {
      name: "nationality",
      label: lanForm.nationality,
      select: true,
      option: [
        lanForm.nation0,
        lanForm.nation1,
        lanForm.nation2,
        lanForm.nation3,
        lanForm.nation4,
        lanForm.nation5,
        lanForm.nation6,
        lanForm.nation7,
      ],
    },
    {
      name: "familyStatus",
      label: lanForm.familyStatus,
      select: true,
      option: [lanForm.familyStatus0, lanForm.familyStatus1],
    },
    {
      name: "invalidStudent",
      label: lanForm.invalidStudent,
      select: true,
      option: [
        lanForm.invalid0,
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
      option: [lanForm.gender0, lanForm.gender1],
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
      option: [lanForm.needy0, lanForm.needy1],
    },
    {
      name: "orphanStudent",
      label: lanForm.orphanStudent,
      select: true,
      width: true,
      option: [
        lanForm.orphan0,
        lanForm.orphan1,
        lanForm.orphan2,
        lanForm.orphan3,
      ],
    },
    {
      name: "parentsRetiree",
      label: lanForm.parentsRetiree,
      select: true,
      option: [
        lanForm.retire0,
        lanForm.retire1,
        lanForm.retire2,
        lanForm.retire3,
      ],
    },
    {
      name: "invalidParents",
      label: lanForm.invalidParents,
      select: true,
      option: [
        lanForm.invalidParent0,
        lanForm.invalidParent1,
        lanForm.invalidParent2,
        lanForm.invalidParent3,
      ],
    },
  ];

  return (
    <MyForm onSubmit={formik.handleSubmit} style={{ width: "420px" }}>
      <MyDiv spaceBetween gap="8px">
        {data.map(
          ({
            name,
            label,
            width,
            type,
            select,
            option,
            slectSearch,
            default_value,
          }) => {
            return slectSearch ? (
              <SelectSearch
                key={name}
                values={option}
                width={width ? "200px" : "100%"}
                label={label}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched[name] && formik.errors[name] ? true : false
                }
                errorMessage={formik.touched[name] && formik.errors[name]}
              />
            ) : select ? (
              <MySelect
                key={name}
                option={option}
                width={width ? "200px" : "100%"}
                label={label}
                name={name}
                default_value={default_value}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched[name] && formik.errors[name] ? true : false
                }
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
                error={
                  formik.touched[name] && formik.errors[name] ? true : false
                }
                errorMessage={formik.touched[name] && formik.errors[name]}
              />
            );
          }
        )}
      </MyDiv>
      <MyButton
        disabled={false}
        text={obj ? lanForm.edit : lanForm.create}
        type="submit"
        margin="20px 0 0 auto"
        width="30%"
      />
    </MyForm>
  );
}

export default StudentDialog;
