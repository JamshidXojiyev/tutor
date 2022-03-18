import React, { useContext, useEffect } from "react";
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

function MainMenu(props) {
  // globalState
  const [globalState, setGlobalState] = useContext(GlobalContext);

  return (
    <MyDiv height="100vh" position="relative">
      <Sidebar />
      <Header />
      <Body openMenu={globalState.sidebarOpen}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile-settings" component={ProfileSettings} />

          <Route path="*">
            <Redirect to={"/dashboard"} />
          </Route>
        </Switch>
      </Body>
    </MyDiv>
  );
}

export default MainMenu;
