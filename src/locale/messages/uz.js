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
    nation1: "O'zbek",
    nation2: "Rus",
    nation3: "Qozoq",
    nation4: "Tojik",
    nation5: "Qirg`iz",
    nation6: "Tatar",
    nation7: "Turkman",
    nation8: "Boshqa",
    needy: "Kam taminlanganligi",
    needyTrue: "Kam taminlangan",
    needyFalse: "Kam taminlanmagan",
    familyStatus: "Oilaviy holati",
    familyStatusTrue: "Turmush qurgan",
    familyStatusFalse: "Turmush qurmagan",
    parentsName: "Ota-onasining ismi",
    address: "Ota-onasining manzili",
    parents_number: "Ota-onasining telefon raqami",
    orphanStudent: "Boquvchisini yo'qotganligi",
    orphanFalse: "Ota-onasi bor",
    orphanMom: "Yolg`iz ona farzandi",
    orphanDad: "Yolg`iz ota farzandi",
    orphanParent: "Chin yetim",
    parentsRetiree: "Ota-onasi nafaqadorlar",
    retireFalse: "Nafaqador emas",
    retireDad: "Otasi nafaqador ",
    retireMom: "Onasi nafaqador",
    retireParent: "Ota-onasi nafaqador",
    invalidStudent: "Nogironligi",
    invalidFalse: "Nogironligi yo'q",
    invalid1: "1-guruh",
    invalid2: "2-guruh",
    invalid3: "3-guruh",
    invalid4: "Ko`zi ojiz",
    invalid5: "Harakatida nuqsoni bor",
    invalid6: "Eshitishida nuqsoni bor",
    invalid7: "Gapirishda nuqsoni bor",
    invalidParents: "Ota-onasining nogironligi",
    invalidMom: "Onasi nogiron",
    invalidDad: "Otasi nogiron",
    invalidParent: "Ota-onasi nogiron",
    course: "Kursi",
    cours: "kurs",
    speciality: "Mutahasisligi",
    groupName: "Guruh nomi",
    university: "Universitet nomi",
    educationType: "Ta'lim turi",
    paymentType: "To'lov turi",
    paymentType1: "To'lov shartnoma asosida",
    paymentType2: "Davlat grandi asosida",
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
  },
  profileSettings: {
    tutor_info: "Tutor ma'lumotlari",
    edit_tutor: "Ma'lumotlarni tahrirlash",
  },
};

export default uz;
