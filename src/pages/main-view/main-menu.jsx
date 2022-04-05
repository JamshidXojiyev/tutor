import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/globalContext";
import { MyDiv } from "../../global-styles/my-div.s";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { Body } from "./main-menu.s";
import ProfileSettings from "../profile-settings/profile-settings";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Students from "../students/students";
import { useHistory } from "react-router-dom";
import {
  deleteLocalStorage,
  getLocalStorage,
} from "../../functions/useLocalStorage";
import Tutor from "../tutor/tutor";
import ProfileAettingsAdmin from "../profile-settings/profile-settings-admin";
import TutorState from "../../context/tutorState";
import StudentsState from "../../context/students-context";
import {
  GetTutorPersonalInfo,
  GetUserByIdConfig,
} from "../../server/config/CrudUrls";

function MainMenu(props) {
  const history = useHistory();
  if (!getLocalStorage("token")) {
    history.push("/signin");
    deleteLocalStorage("token");
    deleteLocalStorage("refresh_token");
  }
  // globalState
  const [globalState, setGlobalState] = useContext(GlobalContext);
  const role = getLocalStorage("role");
  //Get user informations
  const [data, setData] = useState({});
  const getUserFunc = () => {
    role === "ROLE_TUTOR" &&
      GetTutorPersonalInfo().then((res) => {
        setData({
          email: res.data.email,
          fullName: res.data.userProfile.firstname,
          lastname: res.data.userProfile.lastname,
          gender: res.data.userProfile.gender,
        });
      });
    role === "ROLE_ADMIN" &&
      GetUserByIdConfig(getLocalStorage("userId")).then((res) => {
        setData({
          email: res.data.email,
          fullName: res.data.userProfile.firstname,
          lastname: res.data.userProfile.lastname,
          gender: res.data.userProfile.gender,
        });
      });
  };
  useEffect(() => {
    getUserFunc();
  }, []);
  return (
    <MyDiv height="100vh" position="relative">
      <Sidebar data={data} />
      <Header data={data} />
      <Body openMenu={globalState.sidebarOpen}>
        <Switch>
          {role === "ROLE_TUTOR" ? (
            <>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route
                exact
                path="/profile-settings"
                component={ProfileSettings}
              />
              <StudentsState>
                <Route exact path="/students" component={Students} />
              </StudentsState>
              <Route path="*">
                <Redirect to={"/dashboard"} />
              </Route>
            </>
          ) : role === "ROLE_ADMIN" ? (
            <>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route
                exact
                path="/profile-settings"
                component={ProfileAettingsAdmin}
              />
              <TutorState>
                <Route exact path="/tutors" component={Tutor} />
              </TutorState>
              <Route path="*">
                <Redirect to={"/dashboard"} />
              </Route>
            </>
          ) : (
            ""
          )}
        </Switch>
      </Body>
    </MyDiv>
  );
}

export default MainMenu;
