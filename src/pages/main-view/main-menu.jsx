import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/globalContext";
import { MyDiv } from "../../global-styles/my-div.s";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { Body } from "./main-menu.s";

function MainMenu(props) {
  // globalState
  const [globalState, setGlobalState] = useContext(GlobalContext);
  // select device - window innerWidth
  useEffect(() => {
    setGlobalState({
      ...globalState,
      sidebarOpen: !(window.innerWidth < 1100),
      mobileDevice: window.innerWidth < 700,
    });
  }, [window.innerWidth]);
  return (
    <MyDiv height="100vh" position="relative">
      <Sidebar />
      <Header />
      <Body openMenu={globalState.sidebarOpen}>
        <h1>lorem100</h1>
      </Body>
    </MyDiv>
  );
}

export default MainMenu;
