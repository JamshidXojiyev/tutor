import React, { useState } from "react";
import MyButton from "../../components/my-button/my-button";
import { MyDiv } from "../../global-styles/my-div.s";
import {
  Body,
  BottomBtn,
  Header,
  Item,
  ItemBlock,
  MenuName,
  Sidebar,
  SubItem,
  SubItemBlock,
  User,
  UserEmail,
  UserImg,
  UserName,
} from "./main-menu.s";
import { useLocation } from "react-router-dom";
import { NavigationData } from "./navigation-data";

import { ReactComponent as MenuIcon } from "../../assets/icon/menu.svg";
import AvatarImage from "../../assets/image/avatar.png";

function MainMenu(props) {
  const location = useLocation();
  const [positionMenu, setPositionMenu] = useState(true);
  const [subItemType, setSubItemType] = useState(true);
  return (
    <MyDiv height="100vh" position="relative">
      <Header position={positionMenu}>
        <MyButton
          onClick={() => {
            setSubItemType(!positionMenu && subItemType ? true : false);
            setPositionMenu(!positionMenu);
          }}
          icon={<MenuIcon />}
          shadowAnime
        />
        <MenuName>Dashboard</MenuName>
      </Header>

      <Sidebar position={positionMenu}>
        <User position={positionMenu}>
          <UserImg src={AvatarImage} />
          <MyDiv padding="5px 0 0 0">
            <UserName>Sierra Ferguson</UserName>
            <UserEmail>s.ferguson@gmail.com</UserEmail>
          </MyDiv>
        </User>
        {NavigationData.map((item, index) => (
          <ItemBlock key={index}>
            <Item
              position={positionMenu}
              onClick={() => {
                if (item.parent) {
                  setSubItemType(!subItemType);
                  setPositionMenu(true);
                }
              }}
              to={item.url}
              activ={location.pathname === item.url ? true : false}
            >
              {item.icon && item.icon}

              {item.name}
              {item.parent && <BottomBtn position={subItemType} />}
            </Item>
            {item.parent && (
              <SubItemBlock position={subItemType} positionMenu={positionMenu}>
                {item.parent?.map((subItem, subIndex) => (
                  <SubItem
                    to={subItem.url}
                    key={subIndex}
                    activ={location.pathname === subItem.url ? true : false}
                  >
                    {subItem.name}
                  </SubItem>
                ))}
              </SubItemBlock>
            )}
          </ItemBlock>
        ))}
      </Sidebar>
      <Body position={positionMenu}>
        <h1>I`ts mee</h1>
      </Body>
    </MyDiv>
  );
}

export default MainMenu;
