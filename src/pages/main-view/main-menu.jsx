import React, { useContext } from "react";
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
  return (
    <MyDiv height="100vh" position="relative">
      <Sidebar />
      <Header />
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
              <Route exact path="/students" component={Students} />
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
              <Route exact path="/tutors" component={Tutor} />
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
