import { ReactComponent as Dashboard } from "../../assets/icon/menu-icons/Dashboard.svg";
import { ReactComponent as Students } from "../../assets/icon/menu-icons/Students.svg";
import { ReactComponent as ProfileSettings } from "../../assets/icon/menu-icons/Profile-settings.svg";
import { ReactComponent as SignOut } from "../../assets/icon/menu-icons/Sign-Out.svg";
const uz = {
  form: {
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
    groupName: "Guruh nomi",
    university: "Universitet nomi",
    educationType: "Ta'lim turi",
    paymentType: "To'lov turi",
    paymentType0: "To'lov shartnoma asosida",
    paymentType1: "Davlat grandi asosida",
  },
  signin: {
    signin: "Sign In",

    email: "Email address",
    email_placeholder: "Enter your email address",
    email_required_err: "You must enter your email.",
    email_email_err: "Your email was entered incorrectly.",

    password: "Password",
    password_placeholder: "Enter your password",
    password_required_err: "You must enter your password.",

    min_err: "Minimum length 3 symbol.",
  },
  sidebar: {
    title: "MAIN MENU",
    menus: [
      {
        name: "Dashboard",
        icon: Dashboard,
        url: "/dashboard",
      },
      {
        name: "Students",
        icon: Students,
        url: "/students",
      },
      {
        name: "Profile settings",
        icon: ProfileSettings,
        url: "/profile-settings",
      },
      {
        name: "Sign Out",
        icon: SignOut,
        url: "/sign-out",
      },
    ],
    menusAdmin: [
      {
        name: "Tutors",
        icon: Students,
        url: "/tutors",
      },
    ],
  },
  profileSettings: {
    tutor_info: "Tutor ma'lumotlari",
    edit_tutor: "Ma'lumotlarni tahrirlash",
  },
};

export default uz;
