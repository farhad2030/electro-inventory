import React from "react";
import FaqSection from "../../Sections/FaqSection/FaqSection";
import InventorySectio from "../../Sections/InventorySectio/InventorySectio";
import OurClint from "../../Sections/OurClint/OurClint";

const Home = () => {
  return (
    <div>
      <img style={{ width: "100vw" }} src="hero.png" />
      <InventorySectio />
      <OurClint />
      <FaqSection />
    </div>
  );
};

export default Home;
