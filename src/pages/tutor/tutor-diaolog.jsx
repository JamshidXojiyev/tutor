import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import MyInput from "../../components/my-input/my-input";
import { MyDiv } from "../../global-styles/my-div.s";
import { LanguagesContext } from "../../locale/languagesContext";
import * as Yup from "yup";
import { MyForm } from "../../global-styles/form.s";
import MyButton from "../../components/my-button/my-button";
import MySelect from "../../components/my-select/my-select";
import {
  CreateTutorConfig,
  EditTutorConfig,
} from "../../server/config/CrudUrls";
import { toastAdd, toastEdit } from "../../functions/messages";
import { ReactComponent as AddIcon } from "../../assets/icon/add.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/minus.svg";
import { LabelStyle } from "../../components/my-input/my-input.s";

function TutorDiaolog(props) {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanForm = languages.value.form;
  const lanSignIn = languages.value.signin;
  //States
  const [addData, setAddData] = useState([{ name: "groupName0", id: 0 }]);
  const [count, setCount] = useState(1);
  //Add group section
  const addDataFunc = (index, Id) => {
    let arr = addData;
    if (index + 1 === arr.length) {
      arr.push({ name: `groupName${count}`, id: count });
      setCount(count + 1);
    } else {
      arr = arr.filter((el) => el.id != Id);
    }
    setAddData([...arr]);
  };
  const obj = props.objTutor;
  console.log(obj);
  const formik = useFormik({
    initialValues: obj
      ? {
          country: obj.address.country,
          region: obj.address.region,
          district: obj.address.district,
          description: obj.address.description,
          category: obj.eduInfo.category,
          level: obj.eduInfo.level,
          description1: obj.eduInfo.description,
          groups: obj.groups,
          username: obj.user.username,
          email: obj.user.email,
          firstname: obj.user.userProfile.firstname,
          fatherName: obj.user.userProfile.fatherName,
          lastname: obj.user.userProfile.lastname,
          birthDate: obj.user.userProfile.birthDate,
          phoneNumber: obj.user.userProfile.phoneNumber,
          gender: obj.user.userProfile.gender,
          passportData: obj.user.userProfile.passportDate,
        }
      : {
          gender: "0",
          region: "0",
          district: "0",
        },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, lanSignIn.min_err)
        .required(lanSignIn.username_required_err),
      email: Yup.string()
        .min(5, lanSignIn.min_err)
        .required(lanSignIn.email_required_err)
        .email(lanSignIn.email_email_err),
      // password: Yup.string().test(
      //   "password",
      //   lanSignIn.password_required_err,
      //   (item) => item.toString().length === 0
      // ),
    }),
    onSubmit: (val) => {
      let groupArr = [];
      addData.forEach((item) => {
        if (val[item.name]) groupArr.push(val[item.name]);
      });
      console.log(groupArr);
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
        groups: groupArr,
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
            passportDate: val.passportData,
          },
        },
      };
      if (obj) {
        EditTutorConfig(obj.id, sendObj).then((res) => {
          toastEdit("Tutor");
          console.log(res);
          props.setDialog();
          props.renderFunc();
        });
      } else {
        CreateTutorConfig(sendObj).then((res) => {
          console.log(res);
          toastAdd("Tutor");
          props.setDialog();
          props.renderFunc();
        });
      }
      console.log(sendObj);
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
    // {
    //   name: "faculty",
    //   label: lanForm.faculty,
    // },
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
      multiply: true,
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
        {data.map(({ name, label, width, type, select, option, multiply }) => {
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
              error={formik.touched[name] && formik.errors[name] ? true : false}
              errorMessage={formik.touched[name] && formik.errors[name]}
            />
          ) : multiply ? (
            <>
              {!obj ? (
                <>
                  <LabelStyle>{label}</LabelStyle>
                  {addData.map((res, index) => {
                    return (
                      <MyDiv width="100%" spaceBetween gap="8px">
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
                          onClick={() => addDataFunc(index, res.id)}
                          type="button"
                          svg={
                            index + 1 === addData.length ? (
                              <AddIcon />
                            ) : (
                              <DeleteIcon />
                            )
                          }
                        />
                      </MyDiv>
                    );
                  })}
                </>
              ) : (
                ""
              )}
            </>
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
              error={formik.touched[name] && formik.errors[name] ? true : false}
              errorMessage={formik.touched[name] && formik.errors[name]}
            />
          );
        })}
      </MyDiv>
      <MyButton
        width="50%"
        disabled={false}
        text={obj ? lanForm.edit : lanForm.create}
        type="submit"
        margin="20px 0 0 auto"
      />
    </MyForm>
  );
}

export default TutorDiaolog;
