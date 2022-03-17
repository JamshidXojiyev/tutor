import React from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { BgIcon, Brand, Container, H1 } from "./signin.s";
import BrandImage from "../../assets/image/brand.png";
import TopLeftBg from "../../assets/image/top-left.png";
import TopRightBg from "../../assets/image/top-right.png";
import BottomLeftBg from "../../assets/image/bottom-left.png";
import BottomRightBg from "../../assets/image/bottom-right.png";
import MyInput from "../../components/my-input/my-input";
import MyButton from "../../components/my-button/my-button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MyForm } from "../../global-styles/form.s";
import axios from "axios";
import client from "../../client/index";
function SignIn(props) {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Minimal uzunlik - 3 ta belgi")
        .required("Elektron pochtangizni kiritishingiz majbutiy")
        .email("Elektron pochtangizni noto'g'ri kiritilgan"),
      password: Yup.string()
        .min(3, "Minimal uzunlik - 3 ta belgi")
        .required("Parolingizni kiritishingiz kiritishingiz majbutiy"),
    }),
    onSubmit: (val) => {
      console.log(val);
      client
        .post(`${process.env.REACT_APP_BASE_URL}/api/auth/signin`, val)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      // axios
      //   .post("https://academy-back.herokuapp.com/api/auth/signin", {
      //     username: "jamshid@g.com",
      //     password: "jamshid",
      //   })
      //   .then((res) => console.log(res));
    },
  });

  return (
    <>
      <MyForm onSubmit={formik.handleSubmit}>
        <MyDiv center width="100%" height="100vh">
          <Container>
            <>
              <BgIcon src={TopLeftBg} topLeft />
              <BgIcon src={TopRightBg} topRight />
              <BgIcon src={BottomLeftBg} bottomLeft />
              <BgIcon src={BottomRightBg} bottomRight />
              <Brand src={BrandImage} />
            </>
            <H1>Tizimga kirish</H1>
            <MyDiv
              z_ndex="1"
              gap="12px"
              margin="32px 0 0 0"
              heightCenter
              width="320px"
              height="auto"
            >
              <MyInput
                width="100%"
                label="Elektron pochta"
                sign
                placeholder="Elektron pochtangizni kiriting"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.username && formik.errors.username
                    ? true
                    : false
                }
                errorMessage={formik.touched.username && formik.errors.username}
              />
              <MyInput
                width="100%"
                label="Parol"
                sign
                icon
                placeholder="Parolingizni kiriting"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                errorMessage={formik.touched.password && formik.errors.password}
              />
              <MyButton disabled={false} text="SignIn" />
            </MyDiv>
          </Container>
        </MyDiv>
      </MyForm>
    </>
  );
}

export default SignIn;
