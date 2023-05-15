import React, { useState } from "react";
import "./Service.scss";
import Fade from 'react-reveal/Fade';
import Service_cards from "../../../../Mock/Home/Service/Service_cards";
import { TfiRulerPencil } from "react-icons/tfi";
import { AiOutlineSearch } from "react-icons/ai";
const Service = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const [search, setSearch] = useState("");
  // console.log(search);

  return (
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="service_header">
              <h5>our expertise</h5>
              <h2>Services</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="service_input">
              <form action="#">
                <input
                  onChange={(el) => setSearch(el.target.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                />
                <span>
                  <AiOutlineSearch />
                </span>
              </form>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {Service_cards &&
            Service_cards.slice(0, visible)
              .filter((e) => {
                return search.toLowerCase() === ""
                  ? e
                  : e.name.toLowerCase().includes(search);
              })
              .map((element) => (
                <Fade bottom distance="10%" duration={1500} key={`service_id${element.id}`}>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="service_box">
                      <div className="service_img">
                        <img src={element.img} alt="" />
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
                </Fade>
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
