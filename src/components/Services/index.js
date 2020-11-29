import React from "react";
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
        //   src={Icon1} 
          />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon 
        //   src={Icon2} 
          />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>Access the platform anywhere</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon 
        //   src={Icon3} 
          />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Unlock special membership card</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
