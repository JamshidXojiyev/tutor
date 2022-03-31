import { ReactComponent as Dashboard } from "../../assets/icon/menu-icons/Dashboard.svg";
import { ReactComponent as Students } from "../../assets/icon/menu-icons/Students.svg";
import { ReactComponent as ProfileSettings } from "../../assets/icon/menu-icons/Profile-settings.svg";
const uz = {
  form: {
    cancel: "Bekor qilish",
    edit: "Tahrirlash",
    create: "Qo'shish",
    delete: "O'chirish",
    full_name: "To'liq ismi",
    father_name: "Otasining ismi",
    birth_date: "Tug'ulgan sanasi",
    phone_number: "Telefon raqami",
    gender: "Jinsi",
    gender0: "Erkak",
    gender1: "Ayol",
    passportData: "Pasport ma'lumotlari",
    country: "Mamlakat",
    region: "Viloyat",
    district: "Tuman",
    description: "To'liq manzil",
    firstname: "Ismi",
    lastname: "Familiyasi",
    nationality: "Millati",
    nation0: "O'zbek",
    nation1: "Rus",
    nation2: "Qozoq",
    nation3: "Tojik",
    nation4: "Qirg`iz",
    nation5: "Tatar",
    nation6: "Turkman",
    nation7: "Boshqa",
    needy: "Kam taminlanganligi",
    needy0: "Kam taminlangan",
    needy1: "Kam taminlanmagan",
    familyStatus: "Oilaviy holati",
    familyStatus0: "Turmush qurgan",
    familyStatus1: "Turmush qurmagan",
    parentsName: "Ota-onasining ismi",
    address: "Ota-onasining manzili",
    parents_number: "Ota-onasining telefon raqami",
    orphanStudent: "Boquvchisini yo'qotganligi",
    orphan0: "Ota-onasi bor",
    orphan1: "Yolg`iz ona farzandi",
    orphan2: "Yolg`iz ota farzandi",
    orphan3: "Chin yetim",
    parentsRetiree: "Ota-onasi nafaqadorlar",
    retire0: "Otasi nafaqador ",
    retire1: "Onasi nafaqador",
    retire2: "Ota-onasi nafaqador",
    retire3: "Nafaqador emas",
    invalidStudent: "Nogironligi",
    invalid0: "Nogironligi yo'q",
    invalid1: "1-guruh",
    invalid2: "2-guruh",
    invalid3: "3-guruh",
    invalid4: "Ko`zi ojiz",
    invalid5: "Harakatida nuqsoni bor",
    invalid6: "Eshitishida nuqsoni bor",
    invalid7: "Gapirishda nuqsoni bor",
    invalidParents: "Ota-onasining nogironligi",
    invalidParent0: "Nogironligi yo'q",
    invalidParent1: "Onasi nogiron",
    invalidParent2: "Otasi nogiron",
    invalidParent3: "Ota-onasi nogiron",
    course: "Kursi",
    course0: "1-kurs",
    course1: "2-kurs",
    course2: "3-kurs",
    course3: "4-kurs",
    speciality: "Mutahasisligi",
    groupName: "Guruhi",
    university: "Universitet nomi",
    educationType: "Ta'lim turi",
    paymentType: "To'lov turi",
    paymentType0: "To'lov shartnoma asosida",
    paymentType1: "Davlat grandi asosida",
    university: "Universitet",
    firstname_required_err: "Ismini kiriting",
    lastname_required_err: "Familayani kiriting",
    fatherName_required_err: "Sharifini kiriting",
    university_required_err: "Universitet nomini kiriting",
    educationType_required_err: "Ta'lim turini kiriting",
    speciality_required_err: "Mutahasislikni kiriting",
    groupName_required_err: "Guruhini tanlang",
    faculty: "Fakultet",
    level: "Ilmiy darajasi",
    description1: "Qo'shimcha ma'lumot",
    category: "Toifasi",
  },
  signin: {
    signin: "Tizimga kirish",

    email: "E-pochta manzili",
    email_placeholder: "E-mail manzilni kiriting",
    email_required_err: "Elektron pochtani kiritishingiz kerak.",
    email_email_err: "Elektron pochta manzili noto'g'ri kiritilgan.",

    password: "Parol",
    password_placeholder: "Parolni kiriting",
    password_required_err: "Parolni kiritishingiz kerak.",

    min_err: "Minimal uzunlik 5 belgisi.",
    username: "Foydalanuvchi nomi",
    username_required_err: "Foydalanuvchi nomini kiriting.",
  },
  sidebar: {
    hello: "Salom",
    dialog_title: "Tizimdan chiqmoqchimisz?",
    dialog_yes: "Ha",
    dialog_no: "Yo'q",
    sign_out_text: "Tizimdan chiqish",
    menus: [
      {
        name: "Boshqaruv paneli",
        icon: Dashboard,
        url: "/dashboard",
      },
      {
        name: "Talabalar",
        icon: Students,
        url: "/students",
      },
      {
        name: "Profil sozlamalari",
        icon: ProfileSettings,
        url: "/profile-settings",
      },
    ],
    menusAdmin: [
      {
        name: "Boshqaruv paneli",
        icon: Dashboard,
        url: "/dashboard",
      },
      {
        name: "Tutorlar",
        icon: Students,
        url: "/tutors",
      },
      {
        name: "Profil sozlamalari",
        icon: ProfileSettings,
        url: "/profile-settings",
      },
    ],
  },
  profileSettings: {
    tutor_info: "Tutor ma'lumotlari",
    edit_tutor: "Ma'lumotlarni tahrirlash",
  },
  students: {
    list_of_student: "Talabalar ro'yxati",
    users: "Foydalanuvchilar",
    search_by_name: "Nom orqali qidirish",
    group_name: "Gruh nomi",
    add_student: "Yangi student qo'shish",
    student_info: "Student ma'lumotari",
    import: "Yuklab olish",
  },
  admin: {
    admin_info: "Admin ma'lumotlari",
    edit_admin: "Ma'lumotlarni tahrirlash",
    list_of_tutor: "Tutorlar listi",
    add_tutor: "Yangi tutor qo'shish",
    tutor_info: "Tutor ma'lumotari",
    delete_warning: "Rostdan o'chirmoqchimisz?",
  },
};

export default uz;
