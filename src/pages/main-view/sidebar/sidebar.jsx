import React, { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { LanguagesContext } from "../../../locale/languagesContext";
import {
  AvatarImageStyle,
  Circle,
  Email,
  LiStyle,
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

function Sidebar(props) {
  const location = useLocation();
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanSidebar = languages.value.sidebar;
  // globalState
  const [globalState, setGlobalState] = useContext(GlobalContext);
  return (
    <>
      <SidebarStyle openMenu={globalState.sidebarOpen}>
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
      </SidebarStyle>
    </>
  );
}

export default Sidebar;
