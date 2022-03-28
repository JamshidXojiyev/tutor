import React, { useEffect, useState, useContext } from "react";
import { LanguagesContext } from "../../locale/languagesContext";
import MyInput from "../../components/my-input/my-input";
import MyTable from "../../components/my-table/my-table";
import { MyDiv } from "../../global-styles/my-div.s";
import { PageTitle, TotalUsers } from "../../global-styles/page.s";
import { ReactComponent as SearchIcon } from "../../assets/icon/search.svg";
import { GroupName } from "./students.s";
import MySelect from "../../components/my-select/my-select";
import MyButton from "../../components/my-button/my-button";
import { ReactComponent as ImportIcon } from "../../assets/icon/import.svg";
import { ReactComponent as AddIcon } from "../../assets/icon/add.svg";
import { studentsData } from "./filter-data";
import MyDialog from "../../components/my-dialog/my-dialog";
import StudentDialog from "./student-diaolog";
import {
  GetStudentConfig,
  GetTutorGroupsConfig,
} from "../../server/config/CrudUrls";

function Students() {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanStudent = languages.value.students;
  const getStudents = () => {
    GetStudentConfig().then((res) => {
      console.log(res);
    });
  };
  const getGroups = () => {
    GetTutorGroupsConfig().then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    getStudents();
    getGroups();
  }, []);

  const [dialogOpen, setDialogOpen] = useState(false);
  const data = {
    header: [
      "first name",
      "last name",
      "father name",
      "age",
      "birth day",
      "group",
      "invalid",
    ],
    body: [
      {
        first_name: "doniyor",
        last_name: "farmonov",
        father_name: "jsur",
        age: 20,
        birth_day: "21.05.2001",
        group: "202-group",
        special: "geodeziya va geoinformatika",
      },
    ],
    order: [
      "first_name",
      "last_name",
      "father_name",
      "age",
      "birth_day",
      "group",
      "special",
    ],
  };

  return (
    <>
      <MyDiv margin="0 0 16px 0" spaceBetween>
        <MyDiv widthCenter>
          <PageTitle>{lanStudent.list_of_student}</PageTitle>
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
          <GroupName>{lanStudent.group_name}:</GroupName>
          <MySelect option={["All", "101-group", "102-group"]} />
          <MyButton white svg={<ImportIcon />} text={lanStudent.import} />
          <MyButton
            svg={<AddIcon />}
            text={lanStudent.add_student}
            onClick={() => setDialogOpen(true)}
          />
        </MyDiv>
      </MyDiv>
      <MyDiv width="100%" block display="inline-block">
        <MyTable data={studentsData()} total="123" loading={false} />
      </MyDiv>
      <MyDialog
        title={lanStudent.student_info}
        body={<StudentDialog closeDialog={(e) => setDialogOpen(e)} />}
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
    </>
  );
}

export default Students;
