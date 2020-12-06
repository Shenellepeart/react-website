import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-3.svg';

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
//   lightTextDesc: false,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: svg1,
  alt: "Car",
  dark: "false",
  primary: "false",
  darkText: true,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: false,
  lightText: true,
//   lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgStart:true,
  img: svg2,
  alt: "Phone",
  dark: "true",
  primary: "true",
  darkText: false,
};

export const homeObjThree = {
  id: "signUp",
  lightBg: true,
  lightText: false,
//   lightTextDesc: true,
  topLine: "Join Our Team",
  headline: "Creating an account is extremely easy",
  description:
    "Account set up in under 10 minutes",
  buttonLabel: "Start Now",
  imgStart: false,
  img: svg3,
  alt: "Password",
  dark: "false",
  primary: "false",
  darkText: true,
};
