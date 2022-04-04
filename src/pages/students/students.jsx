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
  GetStudentsSearchConfig,
  GetStudentsByGroupConfig,
} from "../../server/config/CrudUrls";
import { StudentsContext } from "../../context/students-context";
import { ReactComponent as EditIcon } from "../../assets/icon/table/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/table/delete.svg";
import DeleteUi from "../../components/delete-ui/delete-ui";
import StudentInfo from "./student-info";
import { ReactComponent as MoreIcon } from "../../assets/icon/more.svg";

function Students() {
  // languages
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanStudent = languages.value.students;
  // get students
  const [tableData, setTableData] = useContext(StudentsContext);
  const getStudents = () => {
    setLoading(true);
    GetStudentConfig()
      .then((res) => {
        makeData(res.data);
      })
      .finally((err) => setLoading(false));
  };
  //Make data
  const makeData = (arr) => {
    if (arr.length > 0) {
      setTableEmpty(false);
      const data = arr.map((item) => {
        const subData = {
          view: (
            <MyButton
              onClick={() => {
                setStudentInfoOpen(true);
                setStudentInfo(item);
              }}
              icon
              tableIcon
              svg={<MoreIcon />}
            />
          ),
          student: `${item.firstname}  ${item.lastname}`,
          id: item.studentId,
          father_name: item.fatherName,
          birth_day: item.birthDate,
          course: item.studyInfo.course,
          group: item.group.groupName,
          special: item.studyInfo.speciality,
          btn: (
            <>
              <MyButton
                onClick={() => {
                  setThisData(item);
                  setDialogOpen(true);
                }}
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
    } else setTableEmpty(true);
  };
  // get tutor groups
  const [tutorGroup, setTutorGroup] = useState([]);
  const [groups, setGroups] = useState([]);
  const getGroups = () => {
    GetTutorGroupsConfig().then((res) => {
      const groups = res.data.map((item) => item.groupName);
      setTutorGroup(["All", ...groups]);
      setGroups([...groups]);
    });
  };
  const changeGroup = (e) => {
    console.log(e.target.value);
    e.target.value === "All"
      ? getStudents()
      : GetStudentsByGroupConfig(e.target.value).then((res) => {
          console.log(res);
        });
  };
  // student search
  const [value, setValue] = useState("");
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const getStudentSearch = () => {
    setLoading(true);
    GetStudentsSearchConfig(value)
      .then((res) => {
        makeData(res.data);
      })
      .finally(() => setLoading(false));
  };
  const searchFunc = () => {
    console.log(value);
    value.length === 0 ? getStudents() : getStudentSearch();
  };
  // states
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tableEmpty, setTableEmpty] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [thisData, setThisData] = useState(null);

  useEffect(() => {
    getStudents();
    getGroups();
  }, [refresh]);

  // student info
  const [studentInfoOpen, setStudentInfoOpen] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  if (studentInfoOpen) {
    return (
      <StudentInfo
        groups={groups}
        studentInfo={studentInfo}
        close={(e) => setStudentInfoOpen(e)}
      />
    );
  }
  return (
    <>
      <MyDiv margin="0 0 16px 0" spaceBetween>
        <MyDiv widthCenter>
          <PageTitle>{lanStudent.list_of_student}</PageTitle>
          <TotalUsers>{`${tableData.body.length} ${lanStudent.users}`}</TotalUsers>
          <MyInput
            search
            placeholder={lanStudent.search_by_name}
            height="42px"
            width="210px"
            rightIcon={<SearchIcon />}
            onChange={changeValue}
            setValue={searchFunc}
          />
        </MyDiv>
        <MyDiv widthCenter gap="12px">
          <GroupName>{lanStudent.group_name}:</GroupName>
          <MySelect option={tutorGroup} onChange={changeGroup} default_value />
          <MyButton white svg={<ImportIcon />} text={lanStudent.import} />
          <MyButton
            svg={<AddIcon />}
            text={lanStudent.add_student}
            onClick={() => {
              setDialogOpen(true);
              setThisData(null);
            }}
          />
        </MyDiv>
      </MyDiv>
      <MyDiv id="notTouch" width="100%" block display="inline-block">
        <MyTable
          data={tableData}
          total="123"
          loading={loading}
          table_empty={tableEmpty}
          width="100%"
          setItem={(item) => console.log(item)}
        />
      </MyDiv>
      <MyDialog
        title={lanStudent.student_info}
        body={
          <StudentDialog
            closeDialog={(e) => setDialogOpen(e)}
            refresh={(e) => setRefresh(refresh + e)}
            thisData={thisData}
            groups={groups}
          />
        }
        open={dialogOpen}
        close={(e) => setDialogOpen(e)}
      />
      <MyDialog
        height="550px"
        heightAuto
        title={languages.value.deleteInfo}
        body={<DeleteUi close={(e) => setDeleteDialogOpen(e)} />}
        open={deleteDialogOpen}
        close={(e) => setDeleteDialogOpen(e)}
      />
    </>
  );
}

export default Students;
