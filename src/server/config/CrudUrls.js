import { CreateFunc, DeleteFunc, GetFunc, EditFunc } from ".";

//Login section
export const LoginConfig = (data) => {
  return CreateFunc("api/auth/signin", data);
};
export const RefreshTokenConfig = (data) => {
  return CreateFunc("api/auth/refresh-token", data);
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
  return GetFunc("admin/api/tutor", data);
};
//Tutor Student section
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
  return GetFunc("tutor/api/tutor", data);
};
