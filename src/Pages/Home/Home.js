import React from "react";
import Topnavbar from "../../Components/Topnavbar/Topnavbar";
import InventorySectio from "../../Sections/InventorySectio/InventorySectio";

const Home = () => {
  return (
    <div>
      <img style={{ width: "100vw" }} src="hero.png" />
      <InventorySectio />
    </div>
  );
};

export default Home;
