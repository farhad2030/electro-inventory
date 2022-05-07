import React from "react";
import InventorySectio from "../../Sections/InventorySectio/InventorySectio";
import OurClint from "../../Sections/OurClint/OurClint";

const Home = () => {
  return (
    <div>
      <img style={{ width: "100vw" }} src="hero.png" />
      <InventorySectio />
      <OurClint />
    </div>
  );
};

export default Home;
