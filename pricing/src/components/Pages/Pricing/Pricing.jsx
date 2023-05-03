import React from "react";
import Services from "./Services/Services";
import Plan from "./Plan/Plan";
import Reviews from "./Reviews/Reviews";
import Get from "./Get/Get";
import Packages from "./Packages/Package";

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
