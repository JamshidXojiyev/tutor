import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

function GlobalState({ children }) {
  const [globalState, setGlobalState] = useState({
    sidebarOpen: true,
    mobileDevice: false,
  });
  return (
    <GlobalContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
