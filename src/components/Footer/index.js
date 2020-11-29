import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signIn">How it works</FooterLink>
              <FooterLink to="/signIn">Testimonials</FooterLink>
              <FooterLink to="/signIn">Careers</FooterLink>
              <FooterLink to="/signIn">Investors</FooterLink>
              <FooterLink to="/signIn">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Column2</FooterLinkTitle>
              <FooterLink to="/signIn">How it works</FooterLink>
              <FooterLink to="/signIn">Testimonials</FooterLink>
              <FooterLink to="/signIn">Careers</FooterLink>
              <FooterLink to="/signIn">Investors</FooterLink>
              <FooterLink to="/signIn">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Column3</FooterLinkTitle>
              <FooterLink to="/signIn">How it works</FooterLink>
              <FooterLink to="/signIn">Testimonials</FooterLink>
              <FooterLink to="/signIn">Careers</FooterLink>
              <FooterLink to="/signIn">Investors</FooterLink>
              <FooterLink to="/signIn">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Column4</FooterLinkTitle>
              <FooterLink to="/signIn">How it works</FooterLink>
              <FooterLink to="/signIn">Testimonials</FooterLink>
              <FooterLink to="/signIn">Careers</FooterLink>
              <FooterLink to="/signIn">Investors</FooterLink>
              <FooterLink to="/signIn">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
