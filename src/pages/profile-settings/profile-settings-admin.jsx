import React, { useContext, useEffect, useState } from "react";
import { LanguagesContext } from "../../locale/languagesContext";
import { Info, P, Row, Td, UserImgStyle } from "./profile-settings.s";
import MyButton from "../../components/my-button/my-button";
import { ReactComponent as EditSvg } from "../../assets/icon/edit.svg";
import { MyDiv } from "../../global-styles/my-div.s";
import UserIcon from "../../assets/image/user.png";
import MyDialog from "../../components/my-dialog/my-dialog";
import { GetUserByIdConfig } from "../../server/config/CrudUrls";
import { getLocalStorage } from "../../functions/useLocalStorage";
import ProfileAdminDiaolog from "./profile-admin-dialog";
import MyInfo from "../../components/my-info/my-info";

function ProfileAettingsAdmin(props) {
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanAdmin = languages.value.admin;
  const lanForm = languages.value.form;
  // dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  // User api functions
  const [data, setData] = useState({});
  const getUserFunc = () => {
    GetUserByIdConfig(getLocalStorage("userId")).then((res) => {
      console.log(res);
      setData({ ...res.data.userProfile, id: res.data.id });
    });
  };
  console.log(data);
  useEffect(() => {
    getUserFunc();
  }, []);
  // Profile funtions
  const firstData = [
    {
      th: lanForm.full_name,
      td: data.firstname + " " + data.lastname,
    },
    {
      th: lanForm.father_name,
      td: data.fatherName,
    },
    {
      th: lanForm.birth_date,
      td: data.birthDate,
    },
    {
      th: lanForm.phone_number,
      td: data.phoneNumber,
    },
    {
      th: lanForm.gender,
      td: data.gender,
    },
  ];

  const testData = [
    {
      name: [
        "Name:",
        "Nationalities:",
        "Birth Date:",
        "Phone Number:",
        "Phone Number:",
      ],
      value: [
        "farhod dadajonov",
        "Uzbek",
        "15.08.1998",
        "(99) 436-46-15",
        "Elyor o’g’li",
      ],
    },
    {
      name: [
        "Name:",
        "Nationalities:",
        "Birth Date:",
        "Phone Number:",
        "Phone Number:",
      ],
      value: [
        "farhod dadajonov",
        "Uzbek",
        "15.08.1998",
        "(99) 436-46-15",
        "Elyor o’g’li",
      ],
    },
    {
      name: [
        "Name:",
        "Nationalities:",
        "Birth Date:",
        "Phone Number:",
        "Phone Number:",
      ],
      value: [
        "farhod dadajonov",
        "Uzbek",
        "15.08.1998",
        "(99) 436-46-15",
        "Elyor o’g’li",
      ],
    },
    {
      name: [
        "Name:",
        "Nationalities:",
        "Birth Date:",
        "Phone Number:",
        "Phone Number:",
      ],
      value: [
        "farhod dadajonov",
        "Uzbek",
        "15.08.1998",
        "(99) 436-46-15",
        "Elyor o’g’li",
      ],
    },
    {
      name: [
        "Name:",
        "Nationalities:",
        "Birth Date:",
        "Phone Number:",
        "Phone Number:",
      ],
      value: [
        "farhod dadajonov",
        "Uzbek",
        "15.08.1998",
        "(99) 436-46-15",
        "Elyor o’g’li",
      ],
    },
    {
      name: [
        "Name:",
        "Nationalities:",
        "Birth Date:",
        "Phone Number:",
        "Phone Number:",
      ],
      value: [
        "farhod dadajonov",
        "Uzbek",
        "15.08.1998",
        "(99) 436-46-15",
        "Elyor o’g’li",
      ],
    },
    {
      name: [
        "Name:",
        "Nationalities:",
        "Birth Date:",
        "Phone Number:",
        "Phone Number:",
      ],
      value: [
        "farhod dadajonov",
        "Uzbek",
        "15.08.1998",
        "(99) 436-46-15",
        "Elyor o’g’li",
      ],
    },
    {
      name: [
        "Name:",
        "Nationalities:",
        "Birth Date:",
        "Phone Number:",
        "Phone Number:",
      ],
      value: [
        "farhod dadajonov",
        "Uzbek",
        "15.08.1998",
        "(99) 436-46-15",
        "Elyor o’g’li",
      ],
    },
    {
      name: [
        "Name:",
        "Nationalities:",
        "Birth Date:",
        "Phone Number:",
        "Phone Number:",
      ],
      value: [
        "farhod dadajonov",
        "Uzbek",
        "15.08.1998",
        "(99) 436-46-15",
        "Elyor o’g’li",
      ],
    },
    {
      name: [
        "Name:",
        "Nationalities:",
        "Birth Date:",
        "Phone Number:",
        "Phone Number:",
      ],
      value: [
        "farhod dadajonov",
        "Uzbek",
        "15.08.1998",
        "(99) 436-46-15",
        "Elyor o’g’li",
      ],
    },
  ];
  const testDataObject = {
    name: [
      "Name:",
      "Nationalities:",
      "Birth Date:",
      "Phone Number:",
      "Phone Number:",
    ],
    value: [
      "farhod dadajonov",
      "Uzbek",
      "15.08.1998",
      "(99) 436-46-15",
      "Elyor o’g’li",
    ],
  };

  return (
    <>
      {/* Header section */}
      <MyDiv widthCenter spaceBetween margin="0 0 18px">
        <P>{lanAdmin.admin_info}</P>
        <MyButton
          svg={<EditSvg />}
          text={lanAdmin.edit_admin}
          onClick={() => setDialogOpen(true)}
        />
      </MyDiv>
      {/* Info section */}
      <MyDiv display="inline-block" width="100%">
        <MyDiv widthCenter block gap="17px">
          <UserImgStyle src={UserIcon} />
          <Info>
            {firstData.map((item) => {
              return (
                <Row key={item.th}>
                  <Td bold>{item.th}:</Td>
                  <Td>{item.td}</Td>
                </Row>
              );
            })}
          </Info>
        </MyDiv>
      </MyDiv>
      <MyDiv margin="12px 0 0 0">
        <MyInfo data={testData} />
      </MyDiv>
      {/* Dialog section */}
      <MyDialog
        title={lanAdmin.admin_info}
        body={<ProfileAdminDiaolog informs={data} />}
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default ProfileAettingsAdmin;
