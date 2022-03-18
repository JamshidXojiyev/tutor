import React, { createContext, useEffect, useState } from "react";
import en from "./messages/en";
import ru from "./messages/ru";
import uz from "./messages/uz";
export const LanguagesContext = createContext();

function LanguagesProvider(props) {
  const [lan, setLan] = useState({
    lang: localStorage.getItem("lang"),
    value:
      localStorage.getItem("lang") === "uz"
        ? uz
        : localStorage.getItem("lang") === "ru"
        ? ru
        : en,
  });
  useEffect(() => {
    localStorage.setItem("lang", lan.lang);
    setLan({
      ...lan,
      value: lan.lang === "uz" ? uz : lan.lang === "ru" ? ru : en,
    });
  }, [lan.lang]);
  return (
    <LanguagesContext.Provider value={[lan, setLan]}>
      {props.children}
    </LanguagesContext.Provider>
  );
}

export default LanguagesProvider;
