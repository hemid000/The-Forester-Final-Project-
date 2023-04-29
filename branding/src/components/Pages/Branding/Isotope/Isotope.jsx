import React, { useState, useEffect } from "react";
import "./Isotope.scss";
import { IoClose } from "react-icons/io5";
import Isotope_cards from "../../../../Mock/Isotope/Isotope_cards";

const Isotope = () => {
  const [items, setItems] = useState(Isotope_cards);
  const filterItem = (categItem) => {
    const updatedItems = Isotope_cards.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };
  return (
    <section id="isotope">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="isotope_header">
              <p>
                We are forester, a creative digital agency situated in New York.
                Crafting things people love, need and enjoy the most. We
                established a dozen of satisfied clients around the globe and
                earned ourself a reputation of most innovative digital agency in
                New York. Ut ut lectus id massa rhoncus commodo. Nulla sed
                aliquet orci. Integer et nisi lobortis, efficitur arcu dictum,
                elementum felis. Nullam vulputate risus diam
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <ul className="gallery_lists">
              <li onClick={() => setItems(Isotope_cards)}>all</li>
              <li onClick={() => filterItem("branding")}>branding</li>
              <li onClick={() => filterItem("digital")}>digital</li>
              <li onClick={() => filterItem("print")}>print</li>
            </ul>
          </div>
        </div>
        <div className="row g-3">
          {items &&
            items.map((el) => (
              <div className="col-lg-4" key={`isotope_id${el.id}`}>
                <div className="gallery_card">
                  <img src={el.img} alt="" />
                  <div className="gallery_details">
                    <div className="gallery_desc">
                      <IoClose />
                      <h3>{el.name}</h3>
                      <h4>{el.desc}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Isotope;
