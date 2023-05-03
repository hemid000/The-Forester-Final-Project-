import React from "react";
import Packages from "./Packages/Packages";
import Services from "./Services/Services";
import Plan from "./Plan/Plan";
import Reviews from "./Reviews/Reviews";
import Get from "./Get/Get";

const Pricing = () => {
  return (
    <>
      <Packages />
      <Services />
      <Plan />
      <Reviews />
      <Get />
    </>
  );
};

export default Pricing;
