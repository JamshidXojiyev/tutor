import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

function sidebarType(params) {
  return !(window.innerWidth < 1100);
}
function mobileType(params) {
  return window.innerWidth < 700;
}

function GlobalState({ children }) {
  const [globalState, setGlobalState] = useState({
    sidebarOpen: sidebarType(),
    mobileDevice: mobileType(),
  });
  return (
    <GlobalContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
