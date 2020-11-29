import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary }) => (primary === "true" ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big === "true" ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark === "true" ? "#010606" : "#ffffff")};
  font-size: ${({ fontBig }) => (fontBig === "true"? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary === "true"? "#ffffff" : "#01bf71")};
    color: ${({ primary }) => (primary === "true"? "#010606" : "#ffffff")};
  }
`;
