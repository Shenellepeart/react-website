import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer 
    isOpen={isOpen}
    onClick={toggle}
    >
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>Discover</SideBarLink>
          <SideBarLink to="services" onClick={toggle}>Services</SideBarLink>
          <SideBarLink to="signUp" onClick={toggle}>Sign Up</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signIn">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
