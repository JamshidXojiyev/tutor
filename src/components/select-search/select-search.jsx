import React from "react";
import {
  DatalistStyle,
  ErrorStyle,
  LabelStyle,
  OptionStyle,
  SearchInputStyle,
  SelectSearchContainer,
} from "./select-search.s";

function SelectSearch(props) {
  return (
    <SelectSearchContainer width={props.width}>
      <LabelStyle>{props.label}</LabelStyle>
      <SearchInputStyle width={props.width} list={props.name} {...props} />
      <DatalistStyle width={props.width} id={props.name}>
        {props.values.map((item, index) => (
          <OptionStyle value={item} key={index} />
        ))}
      </DatalistStyle>
      {props.error && <ErrorStyle>{props.error}</ErrorStyle>}
    </SelectSearchContainer>
  );
}

export default SelectSearch;

// values = ["jon","dou","alisa"]
// values = [
//   {
//     id: 1,
//     ...
//     value: "jon",
//   },
//   {
//     id: 2,
//     ...
//     value: "alisa",
//   },
// ]
