import React, { createContext, useState } from "react";
export const TutorContext = createContext();

function TutorState({ children }) {
  const [tutor, setTutor] = useState({
    header: ["name", "phoneNumber", "region", "birth date"],
    body: [],
    order: ["name", "group", "region", "birth_date"],
    thisData: null,
  });
  return (
    <TutorContext.Provider value={[tutor, setTutor]}>
      {children}
    </TutorContext.Provider>
  );
}

export default TutorState;
