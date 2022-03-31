import { toast } from "react-toastify";

export const toastAdd = (text) => {
  toast.success(`Yangi ${text} qo'shildi`, { autoClose: 2000 });
};

export const toastEdit = (text) => {
  toast.warning(`${text} tahrirlandi`, { autoClose: 2000 });
};

export const toastDel = (text) => {
  toast.info(`${text} o'chirildi`, { autoClose: 2000 });
};

// export const toastErr = () => {
//   toast.error("Xatolik yuz berdi, qayta urunib ko'ring", { autoClose: 2000 });
// };
