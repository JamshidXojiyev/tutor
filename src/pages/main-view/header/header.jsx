import React, { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { HeaderStyle } from "./header.s";

function Header(props) {
  // globalState
  const [globalState, setGlobalState] = useContext(GlobalContext);

  return <HeaderStyle openMenu={globalState.sidebarOpen}></HeaderStyle>;
}

export default Header;
