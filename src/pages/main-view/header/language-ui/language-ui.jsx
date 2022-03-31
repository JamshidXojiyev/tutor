import React, { useContext, useState } from "react";
import {
  ActivLanguage,
  CloseBlock,
  LangContainer,
  LanguageBlock,
} from "./language-ui.s";
import ImgEN from "../../../../assets/image/en.png";
import ImgUZ from "../../../../assets/image/uz.png";
import ImgRU from "../../../../assets/image/ru.png";
import { LanguagesContext } from "../../../../locale/languagesContext";

function LanguageUi(props) {
  const [languages, setLanguages] = useContext(LanguagesContext);
  const langData = [
    {
      lang: "en",
      name: "English",
      img: ImgEN,
    },
    {
      lang: "uz",
      name: "O’zbekcha",
      img: ImgUZ,
    },
    {
      lang: "ru",
      name: "Русский",
      img: ImgRU,
    },
  ];
  const [langType, setLangType] = useState(false);
  return (
    <LangContainer>
      {languages.lang === "uz" ? (
        <ActivLanguage none={langType} onClick={() => setLangType(true)}>
          O’zbekcha
          <img width="28px" height="28px" src={ImgUZ} />
        </ActivLanguage>
      ) : languages.lang === "ru" ? (
        <ActivLanguage none={langType} onClick={() => setLangType(true)}>
          Русский
          <img src={ImgRU} width="28px" height="28px" />
        </ActivLanguage>
      ) : (
        <ActivLanguage none={langType} onClick={() => setLangType(true)}>
          English
          <img src={ImgEN} width="28px" height="28px" />
        </ActivLanguage>
      )}
      {langType && (
        <>
          <CloseBlock onClick={() => setLangType(false)} />
          <LanguageBlock>
            {langData.map((item, index) => (
              <ActivLanguage
                disables={item.lang === languages.lang}
                key={index}
                onClick={() => {
                  setLanguages({ ...languages, lang: item.lang });
                  setLangType(false);
                }}
              >
                <p>{item.name}</p>
                <img src={item.img} width="28px" height="28px" />
              </ActivLanguage>
            ))}
          </LanguageBlock>
        </>
      )}
    </LangContainer>
  );
}

export default LanguageUi;
