import React, { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { HeaderStyle } from "./header.s";

function Header(props) {
  // globalState
  const [globalState, setGlobalState] = useContext(GlobalContext);

  return (
    <HeaderStyle openMenu={globalState.sidebarOpen}>
      <button
        onClick={() => {
          setGlobalState({
            ...globalState,
            sidebarOpen: !globalState.sidebarOpen,
          });
        }}
        // icon={<MenuIcon />}
      >
        asd
      </button>
    </HeaderStyle>
  );
}

export default Header;
