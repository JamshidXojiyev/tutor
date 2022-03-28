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
import MyDialog from "../../components/my-dialog/my-dialog";
import StudentDialog from "./student-diaolog";
import {
  GetStudentConfig,
  GetTutorGroupsConfig,
} from "../../server/config/CrudUrls";
import { StudentsContext } from "../../context/students-context";
import { ReactComponent as EditIcon } from "../../assets/icon/table/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/table/delete.svg";

function Students() {
  // languages
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanStudent = languages.value.students;
  // get students
  const [tableData, setTableData] = useContext(StudentsContext);
  const getStudents = () => {
    GetStudentConfig().then((res) => {
      const data = res.data?.map((item) => {
        const subData = {
          student: `${item.firstname}  ${item.lastname}`,
          father_name: item.fatherName,
          birth_day: item.birthDate,
          course: item.studyInfo.course,
          group: item.group.groupName,
          special: item.studyInfo.speciality,
          btn: (
            <>
              <MyButton
                onClick={() => setTableData({ ...tableData, thisData: item })}
                icon
                svg={<EditIcon />}
              />
              <MyButton icon svg={<DeleteIcon />} />
            </>
          ),
        };
        return subData;
      });
      setTableData({ ...tableData, body: data });
    });
  };
  // get tutor groups
  const [tutorGroup, setTutorGroup] = useState([]);
  const getGroups = () => {
    setLoading(true);
    GetTutorGroupsConfig()
      .then((res) => {
        const groups = res.data.map((item) => `${item.groupName} - group`);
        setTutorGroup(["All", ...groups]);
      })
      .finally((err) => setLoading(false));
  };
  // states
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStudents();
    getGroups();
  }, []);

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
          <MySelect option={tutorGroup} />
          <MyButton white svg={<ImportIcon />} text={lanStudent.import} />
          <MyButton
            svg={<AddIcon />}
            text={lanStudent.add_student}
            onClick={() => setDialogOpen(true)}
          />
        </MyDiv>
      </MyDiv>
      <MyDiv width="100%" block display="inline-block">
        <MyTable data={tableData} total="123" loading={true} width="100%" />
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
