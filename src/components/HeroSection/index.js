import {useState} from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroElements";
import {Button} from '../ButtonElement';
import Video from "../../video/video.mp4";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

const onHover = ()=>{
    setHover(!hover);
}

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign Up for a new account today and receive a $250 in credit towards
          your next payment
        </HeroP>
        <HeroBtnWrapper>
  <Button
  primary="true"
  dark="true"
  to="signUp"
  onMouseEnter={onHover} onMouseLeave={onHover}
  >Get Started 
  {hover ? <ArrowForward/> : <ArrowRight/>}
  </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
