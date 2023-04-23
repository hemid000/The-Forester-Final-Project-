import React from "react";
import Forester from "./Forester/Forester";
import Story from "./Story/Story";
import Service from "./Service/Service";
import Gallery from "./Gallery/Gallery";
import Creative from "./Creative/Creative";
import Team from "./Team/Team";
import Counter from "./Counter/Counter";
import Reviews from "./Reviews/Reviews";
import Social from "./Social/Social";

const Home = () => {
  return (
    <>
      <Forester />
      <Story />
      <Service />
      <Gallery />
      <Creative />
      <Team />
      <Counter />
      <Reviews />
      <Social />
    </>
  );
};

export default Home;
