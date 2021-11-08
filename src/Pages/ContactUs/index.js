import { Box } from "@material-ui/core";
import React from "react";
import HeroSection from "../../Components/HomeComponents/heroSection";
import sampleData from "../../Data/contactData.json";
// import Banner from "../../Components/ContactUsComponent/Banner";
import ContactSection from "../../Components/ContactUsComponent/ContactSection";
// import HeroComponent from "../../Components/ContactUsComponent/HeroComponent";
// import TabSection from "../../Components/ContactUsComponent/TabSection";
import { useHistory } from "react-router";
import * as ROUTES from "../../Constants/routesEndpoints";
function ContactUs() {
  const objectData = sampleData;
  const history = useHistory();
  return (
    <Box>
      <HeroSection
        title={objectData.title}
        content={objectData.content}
        image={objectData.image}
        buttonTitleLeft={objectData.buttonTitleLeft}
        buttonTitleRight={objectData.buttonTitleRight}
        onButtonClickLeft={() => history.push(ROUTES.FORSTARTUP)}
        onButtonClickRight={() => window.open("https://discord.gg/JPXv2KPPTE", "_self")}
      />
      {/* <Banner /> */}
      {/* <TabSection /> */}
      <ContactSection />
    </Box>
  );
}

export default ContactUs;
