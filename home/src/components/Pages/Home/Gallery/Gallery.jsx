import React, { useState, useEffect } from "react";
import "./Gallery.scss";
import Zoom from 'react-reveal/Zoom';
import { IoClose } from "react-icons/io5";
import Gallery_cards from "../../../../Mock/Home/Gallery/Gallery.cards";

const Gallery = () => {
  const [items, setItems] = useState(Gallery_cards);
  const filterItem = (categItem) => {
    const updatedItems = Gallery_cards.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <section id="gallery">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="gallery_header">
              <h5>our portfolio</h5>
              <h2>Gallery</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <ul className="gallery_lists">
              <li onClick={() => setItems(Gallery_cards)}>all</li>
              <li onClick={() => filterItem("branding")}>branding</li>
              <li onClick={() => filterItem("digital")}>digital</li>
              <li onClick={() => filterItem("print")}>print</li>
            </ul>
          </div>
        </div>
        <div className="row g-2">
          {items &&
            items.map((el) => (
              <Zoom bottom distance="90%" duration={1000} key={`gallery_id${el.id}`}>
                <div className="col-lg-6">
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
              </Zoom>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
