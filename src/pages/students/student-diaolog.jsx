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
} from "../../server/config/CrudUrls";
import SelectSearch from "../../components/select-search/select-search";
import { toastAdd, toastEdit } from "../../functions/messages";
import { ReactComponent as AddIcon } from "../../assets/icon/add.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/minus.svg";
import { LabelStyle } from "../../components/my-input/my-input.s";

function StudentDialog(props) {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanForm = languages.value.form;
  //States
  const [musicData, setMusicData] = useState([{ name: "music0", id: 0 }]);
  const [artData, setArtData] = useState([{ name: "art1", id: 1 }]);
  const [sportData, setSportData] = useState([{ name: "sport2", id: 2 }]);
  const [scienceData, setScienceData] = useState([{ name: "science3", id: 3 }]);
  const [otherData, setOtherData] = useState([{ name: "other4", id: 4 }]);
  const [count, setCount] = useState(6);

  let obj = props.thisData;
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
      console.log(value);
      let musicArr = [];
      let artArr = [];
      let sportArr = [];
      let scienceArr = [];
      let otherArr = [];
      musicData.forEach((item) => {
        if (value[item.name]) musicArr.push(value[item.name]);
      });
      artData.forEach((item) => {
        if (value[item.name]) artArr.push(value[item.name]);
      });
      sportData.forEach((item) => {
        if (value[item.name]) sportArr.push(value[item.name]);
      });
      scienceData.forEach((item) => {
        if (value[item.name]) scienceArr.push(value[item.name]);
      });
      otherData.forEach((item) => {
        if (value[item.name]) otherArr.push(value[item.name]);
      });
      console.log(musicArr);
      console.log(artArr);
      console.log(sportArr);
      console.log(scienceArr);
      console.log(otherArr);
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
          needy: value.needy,
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
        familyStatus: value.familyStatus,
        creativePotential: [
          {
            type: "music",
            category: musicArr,
          },
          {
            type: "art",
            category: artArr,
          },
          {
            type: "sport",
            category: sportArr,
          },
          {
            type: "science",
            category: scienceArr,
          },
          {
            type: "other",
            category: otherArr,
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
    {
      name: "music",
      label: lanForm.music,
      multiply: true,
      data: musicData,
    },
    {
      name: "art",
      label: lanForm.art,
      multiply: true,
      data: artData,
    },
    {
      name: "sport",
      label: lanForm.sport,
      multiply: true,
      data: sportData,
    },
    {
      name: "science",
      label: lanForm.science,
      multiply: true,
      data: scienceData,
    },
    {
      name: "other",
      label: lanForm.other,
      multiply: true,
      data: otherData,
    },
  ];
  //Add data section

  const addFunc = (index, Id, Name) => {
    if (Name === "music") {
      let arr = musicData;
      if (index + 1 === arr.length) {
        arr.push({ name: `music${count}`, id: count });
        setCount(count + 1);
      } else {
        arr = arr.filter((el) => el.id != Id);
      }
      setMusicData([...arr]);
    } else if (Name === "art") {
      let arr = artData;
      if (index + 1 === arr.length) {
        arr.push({ name: `art${count}`, id: count });
        setCount(count + 1);
      } else {
        arr = arr.filter((el) => el.id != Id);
      }
      setArtData([...arr]);
    } else if (Name === "sport") {
      let arr = sportData;
      if (index + 1 === arr.length) {
        arr.push({ name: `art${count}`, id: count });
        setCount(count + 1);
      } else {
        arr = arr.filter((el) => el.id != Id);
      }
      setSportData([...arr]);
    } else if (Name === "science") {
      let arr = scienceData;
      if (index + 1 === arr.length) {
        arr.push({ name: `art${count}`, id: count });
        setCount(count + 1);
      } else {
        arr = arr.filter((el) => el.id != Id);
      }
      setScienceData([...arr]);
    } else if (Name === "other") {
      let arr = otherData;
      if (index + 1 === arr.length) {
        arr.push({ name: `art${count}`, id: count });
        setCount(count + 1);
      } else {
        arr = arr.filter((el) => el.id != Id);
      }
      setOtherData([...arr]);
    }
  };
  return (
    <MyForm onSubmit={formik.handleSubmit}>
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
            multiply,
            data,
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
            ) : multiply ? (
              <>
                {!obj ? (
                  <MyDiv width="100%">
                    <LabelStyle>{label}</LabelStyle>
                    {data.map((res, index) => {
                      return (
                        <MyDiv
                          width="100%"
                          spaceBetween
                          gap="8px"
                          margin="0 0 5px"
                        >
                          <MyInput
                            key={res.name}
                            width="calc(100% - 60px)"
                            name={res.name}
                            value={formik.values[res.name]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type={"text"}
                          />
                          <MyButton
                            onClick={() => addFunc(index, res.id, name)}
                            type="button"
                            svg={
                              index + 1 === data.length ? (
                                <AddIcon />
                              ) : (
                                <DeleteIcon />
                              )
                            }
                          />
                        </MyDiv>
                      );
                    })}
                  </MyDiv>
                ) : (
                  ""
                )}
              </>
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
