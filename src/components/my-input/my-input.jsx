import React, { useState } from "react";
import {
  Container,
  ErrorStyle,
  IconStyle,
  InputContainer,
  InputStyle,
  LabelStyle,
} from "./my-input.s";
import { ReactComponent as ShowIcon } from "./icons/show.svg";
import { ReactComponent as HideIcon } from "./icons/hide.svg";

function MyInput(props) {
  const [inputType, setInputType] = useState(
    props.password ? "password" : props.type
  );
  const [value, setValue] = useState(null);
  return (
    <Container>
      <LabelStyle>{props.label}</LabelStyle>
      <InputContainer>
        <InputStyle
          type={inputType}
          {...props}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* right button */}
        {props.rightIcon && (
          <IconStyle onClick={props.setValue && props.setValue(value)}>
            {props.rightIcon}
          </IconStyle>
        )}
        {/* input type password */}
        {props.password && (
          <IconStyle
            onClick={() =>
              setInputType(inputType === "password" ? "text" : "password")
            }
          >
            {inputType === "password" ? <ShowIcon /> : <HideIcon />}
          </IconStyle>
        )}
      </InputContainer>
      {props.errorMessage && <ErrorStyle>{props.errorMessage}</ErrorStyle>}
    </Container>
  );
}

export default MyInput;

// import React, { useState } from "react";
// import { MyDiv } from "../../global-styles/my-div.s";
// import {
//   ErrorStyle,
//   IconStyle,
//   InputContainer,
//   InputStyle,
//   LabelStyle,
// } from "./my-input.s";
// import { ReactComponent as ShowIcon } from "./icons/show.svg";
// import { ReactComponent as HideIcon } from "./icons/hide.svg";
// import { ReactComponent as SearchIcon } from "./icons/search.svg";
// function MyInput(props) {
//   const [typeBtn, setTypeBtn] = useState(
//     props.name === "password" ? true : false
//   );

//   return (
//     <MyDiv width={props.width ? props.width : "auto"}>
//       <LabelStyle>{props.label}</LabelStyle>
//       <InputContainer width={props.search && "230px"} position="relative">
//         <InputStyle type={typeBtn ? "password" : "text"} {...props} />
//         {props.icon && (
//           <IconStyle
//             onClick={() => {
//               !props.search && setTypeBtn(!typeBtn);
//             }}
//             type="button"
//           >
//             {props.search ? (
//               <SearchIcon />
//             ) : typeBtn ? (
//               <ShowIcon />
//             ) : (
//               <HideIcon />
//             )}
//           </IconStyle>
//         )}
//       </InputContainer>
//       {props.errorMessage && <ErrorStyle>{props.errorMessage}</ErrorStyle>}
//     </MyDiv>
//   );
// }

// export default MyInput;
