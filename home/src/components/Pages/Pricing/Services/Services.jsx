import React, { useState } from "react";
import "./Services.scss";
import Service_cards from "../../../../Mock/Pricing/Services/Service_cards";
import service_card_img from "./../../../../assets/Pricing/Service_cards/services.jpg";
import { TfiRulerPencil } from "react-icons/tfi";
const Service = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="service_header">
              <h5>what we do</h5>
              <h2>Services</h2>
              <h5 id="special_h5">
                Top quality services executed by our devoted,
                <br />
                yet creative team. We are focused on making you stand out.
              </h5>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {Service_cards &&
            Service_cards.slice(0, visible).map((element) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={`service_id${element.id}`}>
                <div className="service_box">
                  <div className="service_img">
                    <img src={service_card_img} alt="" />
                    <div className="service_ruler">
                      <TfiRulerPencil />
                    </div>
                  </div>
                  <div className="service_details">
                    <h3>{element.name}</h3>
                    <p>{element.desc}</p>
                    <h5>read more</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-3">
            <div className="explore_now">
              <a onClick={showMoreItems}>load more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
