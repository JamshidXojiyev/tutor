import React, { useContext } from "react";
import { LanguagesContext } from "../../locale/languagesContext";
import { H1 } from "./profile-settings.s";

function ProfileSettings(props) {
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanSidebar = languages.value.profileSettings;

  return (
    <>
      <H1>{lanSidebar.full_name}</H1>
      <h1>profile settings page</h1>
    </>
  );
}

export default ProfileSettings;
