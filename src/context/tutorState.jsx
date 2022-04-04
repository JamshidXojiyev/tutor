import React, { createContext, useState } from "react";
export const TutorContext = createContext();

function TutorState({ children }) {
  const [tutor, setTutor] = useState({
    header: [
      "",
      "fullname",
      "username",
      "email",
      "phone number",
      "birth date",
      "",
    ],
    body: [],
    order: [
      "view",
      "fullname",
      "username",
      "email",
      "phone_number",
      "birth_date",
      "btn",
    ],
  });
  return (
    <TutorContext.Provider value={[tutor, setTutor]}>
      {children}
    </TutorContext.Provider>
  );
}

export default TutorState;
