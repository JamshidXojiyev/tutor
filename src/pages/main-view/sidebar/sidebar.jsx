import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { LanguagesContext } from "../../../locale/languagesContext";
import {
  AvatarImageStyle,
  Circle,
  Email,
  LiStyle,
  MenuButton,
  Name,
  SidebarStyle,
  Title,
  UlStyle,
  User,
} from "./sidebar.s";
import { MyDiv } from "../../../global-styles/my-div.s";
import AvatarImage from "../../../assets/image/avatar.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as BottomIcon } from "../../../assets/icon/bottom.svg";
import { ReactComponent as SignOut } from "../../../assets/icon/menu-icons/Sign-Out.svg";
import {
  deleteLocalStorage,
  getLocalStorage,
} from "../../../functions/useLocalStorage";
import MyDialog from "../../../components/my-dialog/my-dialog";
import MyButton from "../../../components/my-button/my-button"; 

function Sidebar({ data }) {
  const location = useLocation();
  // language data
  const [languages, setLanguages] = useContext(LanguagesContext);
  const lanSidebar = languages.value.sidebar;
  // globalState
  const [globalState, setGlobalState] = useContext(GlobalContext);
  // dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  // mobile open sidebar
  const [size, setSize] = useState("0");
  const findSize = () => {
    if (window.innerWidth > 500) {
      setSize("0");
    } else setSize(-255);
  };
  let startX = "";
  let moveX = "";
  window.addEventListener("touchstart", (ev) => {
    startX = ev.changedTouches[0].pageX;
  });
  window.addEventListener("touchend", (ev) => {
    moveX = ev.changedTouches[0].pageX;
    let size = +(moveX - startX).toString().split(".")[0];
    if (size > 100 && window.innerWidth < 500) {
      openSidebar();
    } else if (size < -100 && window.innerWidth < 500) {
      closeSidebar();
    }
  });
  window.addEventListener("resize", () => {
    if (500 < window.innerWidth < 505) {
      setSize(0);
    }
  });
  const openSidebar = () => {
    setSize("0");
  };
  const closeSidebar = () => {
    if (window.innerWidth < 500) setSize("-255");
  };
  // SigOut section
  const closeDialog = () => {
    setDialogOpen(false);
  };
  const signOutFunc = () => {
    closeDialog();
    deleteLocalStorage("token");
    deleteLocalStorage("refresh_token");
    deleteLocalStorage("role");
    window.location.href = "/";
  };
  useEffect(() => {
    findSize();
  }, []);
  const role = getLocalStorage("role");
  return (
    <>
      <SidebarStyle
        style={{ position: "fixed", left: `${size}px`, top: 0 }}
        openMenu={globalState.sidebarOpen}
      >
        <MyDiv position="relative" height="100%">
          <User>
            <AvatarImageStyle src={AvatarImage} />
            <MyDiv>
              <Name>
                {data.fullName} 
              </Name>
              <Email>{data.email}</Email>
            </MyDiv>
          </User>
          {globalState.mobileDevice ? (
            globalState.sidebarOpen ? (
              <Title>MENU</Title>
            ) : (
              ""
            )
          ) : (
            <Title>MENU</Title>
          )}
          <UlStyle>
            {role === "ROLE_TUTOR"
              ? lanSidebar.menus.map((item, index) => (
                  <Link to={item.url} key={index} onClick={closeSidebar}>
                    <LiStyle
                      openMenu={globalState.sidebarOpen}
                      activ={!location.pathname.search(item.url)}
                    >
                      <item.icon />
                      {item.name}
                      {!location.pathname.search(item.url) && <Circle />}
                    </LiStyle>
                  </Link>
                ))
              : role === "ROLE_ADMIN"
              ? lanSidebar.menusAdmin.map((item, index) => (
                  <Link to={item.url} key={index} onClick={closeSidebar}>
                    <LiStyle
                      openMenu={globalState.sidebarOpen}
                      activ={!location.pathname.search(item.url)}
                    >
                      <item.icon />
                      {item.name}
                      {!location.pathname.search(item.url) && <Circle />}
                    </LiStyle>
                  </Link>
                ))
              : ""}
            <LiStyle
              openMenu={globalState.sidebarOpen}
              onClick={() => setDialogOpen(true)}
            >
              <SignOut />
              {lanSidebar.sign_out_text}
            </LiStyle>
          </UlStyle>
          <MenuButton
            sidebarType={globalState.sidebarOpen}
            onClick={() => {
              setGlobalState({
                ...globalState,
                sidebarOpen: !globalState.sidebarOpen,
              });
            }}
          >
            <BottomIcon />
          </MenuButton>
        </MyDiv>
      </SidebarStyle>
      <MyDialog
        title={lanSidebar.dialog_title}
        width="400px"
        body={
          <MyDiv gap="15px" display="flex">
            <MyButton text={lanSidebar.dialog_yes} onClick={signOutFunc} />
            <MyButton text={lanSidebar.dialog_no} onClick={closeDialog} />
          </MyDiv>
        }
        open={dialogOpen}
        close={closeDialog}
      />
    </>
  );
}

export default Sidebar;
