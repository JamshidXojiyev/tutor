import React, { useContext, useEffect, useState } from "react";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import { MyDiv } from "../../global-styles/my-div.s";
import { PageTitle, TotalUsers } from "../../global-styles/page.s";
import { ReactComponent as AddIcon } from "../../assets/icon/add.svg";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import MyDialog from "../../components/my-dialog/my-dialog";
import MyTable from "../../components/my-table/my-table";
import TutorDiaolog from "./tutor-diaolog";
import {
  DeleteTutorConfig,
  GetTutorConfig,
} from "../../server/config/CrudUrls";
import { LanguagesContext } from "../../locale/languagesContext";
import { TutorContext } from "../../context/tutorState";
import { ReactComponent as EditIcon } from "../../assets/icon/table/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/table/delete.svg";
import { ReactComponent as MoreIcon } from "../../assets/icon/more.svg";
import TutorInfo from "./tutor-info";

function Tutor() {
  //Language section
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanStudent = languages.value.students;
  const lanTutor = languages.value.admin;
  const lanSidebar = languages.value.sidebar;
  //Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);
  //Close dialogs
  const closeDialog = () => {
    setDialogOpen(false);
    setObj(null);
  };
  const closeDialogDelete = () => {
    setDialogDelete(false);
  };
  //Render state
  const [render, setRender] = useState(0);
  // Tutor api functions
  const [tutorData, setTutorData] = useContext(TutorContext);
  const [thisObj, setObj] = useState(null);
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  //Get tutor
  const getTutorFunc = () => {
    setLoading(true);
    GetTutorConfig()
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res);
          const data = res.data.map((item) => {
            const subData = {
              view: (
                <>
                  <MyButton
                    onClick={() => {
                      setStudentInfoOpen(true);
                      setStudentInfo(item);
                    }}
                    icon
                    tableIcon
                    svg={<MoreIcon />}
                  />
                </>
              ),
              fullname: `${item.user.userProfile.firstname}  ${item.user.userProfile.lastname}`,
              username: item.user.username,
              email: item.user.email,
              phone_number: item.user.userProfile.phoneNumber,
              birth_date: item.user.userProfile.birthDate,
              id: item.id,
              btn: (
                <MyDiv center>
                  <MyButton
                    onClick={() => {
                      setObj(item);
                      setDialogOpen(true);
                    }}
                    icon
                    tableIcon
                    svg={<EditIcon />}
                  />
                  <MyButton
                    onClick={() => {
                      setDialogDelete(true);
                      // setTutorData({ ...tutorData, thisData: item });
                    }}
                    icon
                    tableIcon
                    svg={<DeleteIcon />}
                  />
                </MyDiv>
              ),
            };
            return subData;
          });
          setTutorData({ ...tutorData, body: data });
          setEmpty(false);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getTutorFunc();
  }, [render]);
  //Delete tutor
  const deleteTutorFunc = () => {
    DeleteTutorConfig(tutorData.thisData.id).then((res) => {
      console.log(res);
    });
  };
  // student info
  const [studentInfoOpen, setStudentInfoOpen] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  if (studentInfoOpen) {
    return (
      <TutorInfo
        studentInfo={studentInfo}
        close={(e) => setStudentInfoOpen(e)}
        closeRender={(e) => {
          setRender(render + 1);
          setStudentInfoOpen(e);
        }}
      />
    );
  }
  return (
    <>
      <MyDiv margin="0 0 16px 0" spaceBetween>
        <MyDiv widthCenter>
          <PageTitle>{lanTutor.list_of_tutor}</PageTitle>
          <TotalUsers>{`274 ${lanStudent.users}`}</TotalUsers>
          <MyInput
            search
            placeholder={lanStudent.search_by_name}
            height="48px"
            rightIcon={<SearchIcon />}
            setValue={(e) => console.log(e)}
          />
        </MyDiv>
        <MyDiv widthCenter gap="12px">
          <MyButton
            svg={<AddIcon />}
            text={lanTutor.add_tutor}
            onClick={() => setDialogOpen(true)}
          />
        </MyDiv>
      </MyDiv>
      <MyDiv id="touchId" width="100%" block display="inline-block">
        <MyTable
          data={tutorData}
          table_empty={empty}
          total="123"
          loading={loading}
          width="100%"
        />
      </MyDiv>
      <MyDialog
        title={lanTutor.tutor_info}
        body={
          <TutorDiaolog
            setDialog={closeDialog}
            renderFunc={() => setRender(render + 1)}
            objTutor={thisObj}
          />
        }
        open={dialogOpen}
        close={closeDialog}
      />
      <MyDialog
        title={lanTutor.delete_warning}
        width="400px"
        body={
          <MyDiv gap="15px" display="flex">
            <MyButton text={lanSidebar.dialog_yes} onClick={deleteTutorFunc} />
            <MyButton text={lanSidebar.dialog_no} onClick={closeDialogDelete} />
          </MyDiv>
        }
        open={dialogDelete}
        close={closeDialogDelete}
      />
    </>
  );
}

export default Tutor;
