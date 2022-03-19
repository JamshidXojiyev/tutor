import React, { useContext, useEffect } from "react";
import { LanguagesContext } from "../../locale/languagesContext";
import { Info, Line, MainDiv, P, Row, Td, UserDiv } from "./profile-settings.s";
import userSvg from "../../components/my-input/icons/user.svg";

function ProfileSettings(props) {
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanSidebar = languages.value.profileSettings;
  const lanForm = languages.value.form;
  // Profile funtions
  const firstData = [
    {
      th: lanForm.full_name,
      td: "Farhod Dadajonov",
    },
    {
      th: lanForm.father_name,
      td: "Ro'ziboyev",
    },
    {
      th: lanForm.birth_date,
      td: "15.08.1998",
    },
    {
      th: lanForm.phone_number,
      td: "(99) 436-46-15",
    },
    {
      th: lanForm.gender,
      td: "Erkak",
    },
  ];
  const secondData = [
    {
      th: lanForm.passportData,
      td: "AB7567153",
    },
    {
      th: lanForm.country,
      td: "O'zbekiston",
    },
    {
      th: lanForm.region,
      td: "Farg'ona",
    },
    {
      th: lanForm.district,
      td: "Quva",
    },
    {
      th: lanForm.description,
      td: "Ingliz tilidan dars bera oladi",
    },
  ];
  useEffect(() => {
    localStorage.setItem("lang", "uz");
  }, []);

  return (
    <>
      <P>Tutor info</P>
      <MainDiv>
        <UserDiv>
          <img src={userSvg} alt="error img" />
        </UserDiv>
        <Info>
          {firstData.map((item) => {
            return (
              <Row key={item.th}>
                <Td bold={true}>{item.th}:</Td>
                <Td>{item.td}</Td>
              </Row>
            );
          })}
        </Info>
        <Line />
        <Info>
          {secondData.map((item) => {
            return (
              <Row key={item.th}>
                <Td bold={true}>{item.th}:</Td>
                <Td>{item.td}</Td>
              </Row>
            );
          })}
        </Info>
      </MainDiv>
    </>
  );
}

export default ProfileSettings;
