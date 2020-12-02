import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import svg1 from "../images/svg-1.svg";
import svg2 from "../images/svg-2.svg";
import svg3 from "../images/svg-3.svg";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} logoOnClick={toggleHome} />
      <HeroSection />
      {/* Can't access image from homeObjOne */}
      <InfoSection {...homeObjOne} srcImage={svg1} />
      <InfoSection {...homeObjTwo} srcImage={svg2} />
      <Services />
      <InfoSection {...homeObjThree} srcImage={svg3} />
      <Footer logoOnClick={toggleHome} />
    </>
  );
};

export default Home;
