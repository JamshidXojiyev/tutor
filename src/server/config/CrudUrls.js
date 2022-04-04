import { CreateFunc, DeleteFunc, GetFunc, EditFunc } from ".";

//Login section
export const LoginConfig = (data) => {
  return CreateFunc("api/auth/signin", data);
};
export const RefreshTokenConfig = (data) => {
  return CreateFunc("api/auth/refresh-token", data);
};
//User section
export const GetUserByIdConfig = (id) => {
  return GetFunc(`api/user/${id}`);
};
export const EditUserConfig = (id, data) => {
  return EditFunc(`api/user/${id}`, data);
};
//Admin Tutor section
export const GetTutorStudentConfig = () => {
  return GetFunc(`admin/api/tutor/students`);
};
export const GetTutorByIdConfig = (id) => {
  return GetFunc(`admin/api/tutor/${id}`);
};
export const GetTutorConfig = () => {
  return GetFunc("admin/api/tutor");
};
export const EditTutorConfig = (id, data) => {
  return EditFunc(`admin/api/tutor/${id}`, data);
};
export const DeleteTutorConfig = (id) => {
  return DeleteFunc(`admin/api/tutor/${id}`);
};
export const CreateTutorConfig = (data) => {
  return CreateFunc("admin/api/tutor", data);
};
//Tutor Student section
export const GetTutorPersonalInfo = () => {
  return GetFunc("api/tutor/personalInfo");
};
export const GetStudentsSearchConfig = (query = "") => {
  return GetFunc(`tutor/api/student/search/?search=${query}`);
};
export const GetStudentsByGroupConfig = (query = "") => {
  return GetFunc(`api/student/group/students?groupName=${query}`);
};
export const GetTutorGroupsConfig = () => {
  return GetFunc(`tutor/api/student/groups`);
};
export const GetStudentByIdConfig = (id) => {
  return GetFunc(`tutor/api/student/${id}`);
};
export const GetStudentConfig = () => {
  return GetFunc("tutor/api/student");
};
export const EditStudentConfig = (id, data) => {
  return EditFunc(`tutor/api/student/${id}`, data, "PATCH");
};
export const DeleteStudentConfig = (id) => {
  return DeleteFunc(`tutor/api/student/${id}`);
};
export const CreateStudentConfig = (data) => {
  return CreateFunc("tutor/api/student", data);
};
