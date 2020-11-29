import React from "react";
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon 
          src={Icon1} 
          />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            Reduce fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon 
          src={Icon2} 
          />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>Access the platform anywhere</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon 
          src={Icon3} 
          />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Unlock special membership card</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
