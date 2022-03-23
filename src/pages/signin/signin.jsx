import React, { useContext } from "react";
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
import { LanguagesContext } from "../../locale/languagesContext";
import { LoginConfig } from "../../server/config/CrudUrls";
import { setLocalStorage } from "../../functions/useLocalStorage";

function SignIn(props) {
  // language
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanSignIn = languages.value.signin;

  // validation formik
  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, lanSignIn.min_err)
        .required(lanSignIn.email_required_err)
        .email(lanSignIn.email_email_err),
      password: Yup.string()
        .min(3, lanSignIn.min_err)
        .required(lanSignIn.password_required_err),
    }),
    onSubmit: (val) => {
      LoginConfig(val).then((res) => {
        setLocalStorage("token", res.data.token);
        setLocalStorage("refresh_token", res.data.refreshToken);
        setLocalStorage("role", res.data.roles[0]);
        window.location.href = "/";
      });
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
            <H1>{lanSignIn.signin}</H1>
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
                label={lanSignIn.email}
                placeholder={lanSignIn.email_placeholder}
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
                password
                width="100%"
                label={lanSignIn.password}
                placeholder={lanSignIn.password_placeholder}
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
              <MyButton width="100%" disabled={false} text="SignIn" />
            </MyDiv>
          </Container>
        </MyDiv>
      </MyForm>
    </>
  );
}

export default SignIn;
