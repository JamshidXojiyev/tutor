import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { LanguagesContext } from "../../../locale/languagesContext";
import {
  AvatarImageStyle,
  Circle,
  CloseSidebar,
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
import AvatarMale from "../../../assets/image/userMale.png";
import AvatarFemale from "../../../assets/image/userFemale.jpg";
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
import ExitImage from "../../../assets/image/exit.png";

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
  const [size, setSize] = useState("-272");
  let touch_scroll_x = "";
  let touch_scroll_y = "";
  let touchStartX = "";
  let touchStartY = "";
  let touchEndX = "";
  let touchEndY = "";
  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  });
  document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;
    touch_scroll_y =
      touchEndY > touchStartY
        ? touchEndY - touchStartY
        : touchStartY - touchEndY;
    touch_scroll_x =
      touchEndX > touchStartX
        ? touchEndX - touchStartX
        : touchStartX - touchEndX;
    if (touch_scroll_y < 50 && touchStartX < 100 && touch_scroll_x > 100) {
      setSize("0");
    }
    if (touch_scroll_y < 50 && touchStartX > touchEndX && touch_scroll_x > 20) {
      setSize("-272");
    }
  });

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
    // findSize();
  }, []);
  const role = getLocalStorage("role");
  return (
    <>
      <SidebarStyle sidebarSize={size} openMenu={globalState.sidebarOpen}>
        <MyDiv position="relative" height="100%">
          <User>
            {data.gender === "1" ? (
              <AvatarImageStyle src={AvatarFemale} />
            ) : (
              <AvatarImageStyle src={AvatarMale} />
            )}

            <MyDiv>
              <Name>
                {data.fullName} {data.lastname}
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
                  <Link
                    to={item.url}
                    key={index}
                    onClick={() => setSize("-272")}
                  >
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
                  <Link
                    to={item.url}
                    key={index}
                    onClick={() => setSize("-272")}
                  >
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
      {size === "0" && <CloseSidebar onClick={() => setSize("-272")} />}
      <MyDialog
        heightAuto
        title={lanSidebar.dialog_title}
        width="360px"
        body={
          <>
            <img src={ExitImage} width="100%" />
            <MyDiv gap="16px" display="flex">
              <MyButton
                width="50%"
                text={lanSidebar.dialog_yes}
                red
                onClick={signOutFunc}
              />
              <MyButton
                width="50%"
                text={lanSidebar.dialog_no}
                onClick={closeDialog}
              />
            </MyDiv>
          </>
        }
        open={dialogOpen}
        close={closeDialog}
      />
    </>
  );
}

export default Sidebar;
