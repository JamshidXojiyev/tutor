import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { LanguagesContext } from "../../../locale/languagesContext";
import {
  AvatarImageStyle,
  Circle,
  Email,
  LiStyle,
  MenuButton,
  Name,
  SidebarStyle,
  Title,
  UlStyle,
  User,
} from "./sidebar.s";
import { MyDiv } from "../../../global-styles/my-div.s";
import AvatarImage from "../../../assets/image/avatar.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as BottomIcon } from "../../../assets/icon/bottom.svg";

function Sidebar(props) {
  const location = useLocation();
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanSidebar = languages.value.sidebar;
  // globalState
  const [globalState, setGlobalState] = useContext(GlobalContext);

  // mobile open sidebar
  let startX = "";
  let moveX = "";
  window.addEventListener("touchstart", (ev) => {
    startX = ev.changedTouches[0].pageX;
  });
  window.addEventListener("touchend", (ev) => {
    moveX = ev.changedTouches[0].pageX;
    let size = +(moveX - startX).toString().split(".")[0];
    if (size > 50) {
      setGlobalState({
        ...globalState,
        sidebarOpen: true,
      });
    }
    if (size < -50) {
      setGlobalState({
        ...globalState,
        sidebarOpen: false,
      });
    }
  });

  return (
    <>
      <SidebarStyle openMenu={globalState.sidebarOpen}>
        <MyDiv position="relative" height="100%">
          <User>
            <AvatarImageStyle src={AvatarImage} />
            <MyDiv>
              <Name>Sierra Ferguson</Name>
              <Email>s.ferguson@gmail.com</Email>
            </MyDiv>
          </User>
          {globalState.mobileDevice ? (
            globalState.sidebarOpen ? (
              <Title>MENU</Title>
            ) : (
              ""
            )
          ) : (
            <Title>MENU</Title>
          )}
          <UlStyle>
            {lanSidebar.menus.map((item, index) => (
              <Link to={item.url} key={index}>
                <LiStyle
                  openMenu={globalState.sidebarOpen}
                  activ={!location.pathname.search(item.url)}
                >
                  <item.icon />
                  {item.name}
                  {!location.pathname.search(item.url) && <Circle />}
                </LiStyle>
              </Link>
            ))}
          </UlStyle>
          <MenuButton
            sidebarType={globalState.sidebarOpen}
            onClick={() => {
              setGlobalState({
                ...globalState,
                sidebarOpen: !globalState.sidebarOpen,
              });
            }}
          >
            <BottomIcon />
          </MenuButton>
        </MyDiv>
      </SidebarStyle>
    </>
  );
}

export default Sidebar;
