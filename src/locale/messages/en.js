import { ReactComponent as Dashboard } from "../../assets/icon/menu-icons/Dashboard.svg";
import { ReactComponent as Students } from "../../assets/icon/menu-icons/Students.svg";
import { ReactComponent as ProfileSettings } from "../../assets/icon/menu-icons/Profile-settings.svg";

const en = {
  deleteInfo: "Do you really delete the user?",
  form: {
    cancel: "Cancel",
    edit: "Edit",
    create: "Add",
    delete: "Delete",
    full_name: "Full Name",
    father_name: "Father Name",
    birth_date: "Birth Date",
    phone_number: "Phone Number",
    gender: "Gender",
    gender0: "Male",
    gender1: "Female",
    passportData: "Passport Data",
    country: "Country",
    region: "Region",
    district: "District",
    description: "Full address",
    firstname: "First name",
    lastname: "Lastname",
    nationality: "Nationality",
    nation0: "Uzbek",
    nation1: "Rus",
    nation2: "Kazakh",
    nation3: "Tojik",
    nation4: "Kyrgyz",
    nation5: "Tatar",
    nation6: "Turkman",
    nation7: "Other",
    needy: "Neediest",
    needy0: "Needy",
    needy1: "Not Needy",
    familyStatus: "Family Status",
    familyStatus0: "Married",
    familyStatus1: "Not married",
    parentsName: "Parents Name",
    address: "Parent's address",
    parents_number: "Parent's phone number",
    orphanStudent: "Orphan Student",
    orphan0: "Have parents",
    orphan1: "A single mother is a child",
    orphan2: "An only father is a child",
    orphan3: "A real orphan",
    parentsRetiree: "Parents Retiree",
    retire0: "Father is retired",
    retire1: "Mother is retired",
    retire2: "Parents are retired",
    retire3: "Not retired",
    invalidStudent: "Disability",
    invalid0: "Has no disability",
    invalid1: "1-group",
    invalid2: "2-group",
    invalid3: "3-group",
    invalid4: "Blind",
    invalid5: "Something is wrong with the move",
    invalid6: "Has a hearing problem",
    invalid7: "There is a defect in speech",
    invalidParents: "Parental disability",
    invalidParent0: "He has no disability",
    invalidParent1: "Mother disabled",
    invalidParent2: "Father disabled",
    invalidParent3: "Parents disabled",
    course: "Course",
    course0: "1-course",
    course1: "2-course",
    course2: "3-course",
    course3: "4-course",
    speciality: "Speciality",
    groupName: "Group Name",
    university: "University Name",
    educationType: "Education Type",
    paymentType: "Payment Type",
    paymentType0: "Payment is by contract",
    paymentType1: "On the basis of a state grant",
    university: "University",
    firstname_required_err: "Please, enter the name",
    lastname_required_err: "Please, enter the lastname",
    fatherName_required_err: "Please, enter the name of father",
    university_required_err: "Please, enter the name of universitet",
    educationType_required_err: "Please, enter the type of education",
    speciality_required_err: "Please, enter the speciality",
    groupName_required_err: "Please, select the group",
    faculty: "Faculty",
    level: "Academic degree",
    description1: "Additional Information",
    category: "Category",
    creativePotential: "Information about the creative potential of students",
    music: "Interests in music",
    art: "Interests in art and literature",
    sport: "Интересы к спорту",
    science: "Interests in scientific activities",
    other: "Ability in other areas",
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

    min_err: "Minimum length 5 symbol.",
    username: "Username",
    username_required_err: "You must enter username",
  },
  sidebar: {
    hello: "Hello",
    dialog_title: "Do you want to log out?",
    dialog_yes: "Yes",
    dialog_no: "No",
    sign_out_text: "Sign out",
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
    ],
    menusAdmin: [
      {
        name: "Dashboard",
        icon: Dashboard,
        url: "/dashboard",
      },
      {
        name: "Tutors",
        icon: Students,
        url: "/tutors",
      },
      {
        name: "Profile Settings",
        icon: ProfileSettings,
        url: "/profile-settings",
      },
    ],
  },
  profileSettings: {
    tutor_info: "Tutor info",
    edit_tutor: "Edit Tutor",
  },
  students: {
    // students header
    list_of_student: "Students list",
    users: "Users",
    search_by_name: "Search by Name",
    group_name: "Group Name",
    add_student: "Add New Student",
    student_info: "Student info",
    import: "Import",
    // students table
    first_name: "first name",
    last_name: "last name",
    father_name: "father name",
    age: "age",
    birth_day: "birth day",
    group: "group",
    special: "invalid",
  },
  admin: {
    admin_info: "Admin info",
    edit_admin: "Edit Admin",
    list_of_tutor: "Tutors list",
    add_tutor: "Add New Tutor",
    tutor_info: "Tutor info",
    delete_warning: "Do you really want to delete it?",
    delete_soon: "This section will be added soon!",
  },
};

export default en;
