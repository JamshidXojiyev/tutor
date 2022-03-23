import React, { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { MyDiv } from "../../../global-styles/my-div.s";
import { Date, HeaderStyle, UserName } from "./header.s";
import Language from "./language-ui/language-ui";
function Header(props) {
  // globalState
  const [globalState, setGlobalState] = useContext(GlobalContext);
  const date = window.Date().replace(/[()]/g, "").split(" ");
  return (
    <HeaderStyle openMenu={globalState.sidebarOpen}>
      <MyDiv>
        <UserName>Hello Sierra Ferguson</UserName>
        <Date>{`${date[6]} - ${date[2]} ${date[1]} ${date[3]}`}</Date>
      </MyDiv>
      <MyDiv>
        <Language />
      </MyDiv>
    </HeaderStyle>
  );
}

export default Header;
