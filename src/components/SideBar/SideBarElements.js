import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${({theme})=>theme.sideBarBg};
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
  
`;

export const CloseIcon = styled(FaTimes)`
color: ${({theme})=>theme.white};
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SideBarWrapper = styled.div`
color: ${({theme})=>theme.white};
`;
export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
}
`;


export const SideBarLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: ${({theme})=>theme.white};
cursor: pointer;
-webkit-tap-highlight-color: transparent;
&:hover{
    color: ${({theme})=>theme.primaryColor};
    transition: 0.2s ease-in-out; 
}
`;

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;

export const SideBarRoute = styled(LinkRoute)`
border-radius: 50px;
background:  ${({theme})=>theme.primaryColor};
white-space: nowrap;
padding: 16px 64px;
color: ${({theme})=>theme.secondaryColor};
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
-webkit-tap-highlight-color: transparent;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({theme})=>theme.white};
    color: ${({theme})=>theme.secondaryColor};
}
`;


