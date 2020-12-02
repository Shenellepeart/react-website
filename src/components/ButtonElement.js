import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary, theme }) => (primary === "true" ? theme.primaryColor : theme.secondaryColor)};
  white-space: nowrap;
  padding: ${({ big }) => (big === "true" ? "14px 48px" : "12px 30px")};
  color: ${({ dark, theme }) => (dark === "true" ? theme.secondaryColor : theme.white)};
  font-size: ${({ fontBig }) => (fontBig === "true"? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary, theme }) => (primary === "true"? theme.white : theme.primaryColor)};
    color: ${({ primary, theme }) => (primary === "true"? theme.secondaryColor : theme.white)};
  }
`;
