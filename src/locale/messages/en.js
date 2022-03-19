import { ReactComponent as Dashboard } from "../../assets/icon/menu-icons/Dashboard.svg";
import { ReactComponent as Students } from "../../assets/icon/menu-icons/Students.svg";
import { ReactComponent as ProfileSettings } from "../../assets/icon/menu-icons/Profile-settings.svg";
import { ReactComponent as SignOut } from "../../assets/icon/menu-icons/Sign-Out.svg";

const en = {
  form: {
    full_name: "Full Name",
    father_name: "Father Name",
    birth_date: "Birth Date",
    phone_number: "Phone Number",
    gender: "Gender",
    passportData: "Passport Data",
    country: "Country",
    region: "Region",
    district: "District",
    description: "Description",
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
    tutor_info: "Tutor info",
    edit_tutor: "Edit Tutor",
  },
};

export default en;
