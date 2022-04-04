import React, { createContext, useState } from "react";

export const StudentsContext = createContext();

function StudentsState({ children }) {
  // context state
  const [stud, setStud] = useState({
    header: [
      "",
      "student",
      "father name",
      "birth day",
      "course",
      "group name",
      "specialization",
      "",
    ],
    body: [],
    order: [
      "view",
      "student",
      "father_name",
      "birth_day",
      "course",
      "group",
      "special",
      "btn",
    ],
  });
  return (
    <StudentsContext.Provider value={[stud, setStud]}>
      {children}
    </StudentsContext.Provider>
  );
}

export default StudentsState;
