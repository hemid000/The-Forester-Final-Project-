import React, { useState, useEffect } from "react";
import "./Product.scss";
import Slider from "@mui/material/Slider";
import "../../../../Mock/Shop/Cards/Product_card";
import Product_card from "../../../../Mock/Shop/Cards/Product_card";
const Product = () => {
  // Range Function
  const [range, setRange] = React.useState([0, 30]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  // Isotope Function
  const [items, setItems] = useState(Product_card);

  return (
    <section id="product">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <div className="card_left">
              <div className="sorting">
                <p>Showing all 6 results</p>
                <form action="#">
                  <select name="order" id="order">
                    <option value="default">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="average">Sort by average rating</option>
                    <option value="latest">Sort by latest</option>
                    <option value="low">Sort by price: low to high</option>
                    <option value="high">Sort by price: high to low</option>
                  </select>
                </form>
              </div>
              <div className="card_boxes">
                <div className="container">
                  <div className="row g-4">
                    {items &&
                      items.map((el) => (
                        <div className="col-lg-3" key={`box_id${el.id}`}>
                          <div className="box">
                            <div className="box_img">
                              <img src={el.img} alt="" />
                            </div>
                            <div className="box_details">
                              <h2>{el.name}</h2>
                              <span>
                                <del className="non_current_money">
                                  <span className="symbol_span">£</span>
                                  {el.deleting}
                                </del>
                                <span className="current_money">
                                  <span className="symbol_span">£</span>
                                  {el.current}
                                </span>
                              </span>
                              <div className="explore_now">
                                <a href="#">add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card_right">
              <div className="filter_by_price">
                <h2>filter by price</h2>
                <div id="range_simulator">
                  <Slider
                    value={range}
                    onChange={handleChanges}
                    valueLabelDisplay="auto"
                  />
                  {/* The selected range is {range[0]} - {range[1]} */}
                </div>
                <div className="explore_now">
                  <a>filter</a>
                  <span>
                    Price:
                    <span id="from">£{range[0]}</span>
                    <span> — </span>
                    <span id="to">£{range[1]}</span>
                  </span>
                </div>
              </div>
              <div className="products">
                <h2>products</h2>
                {Product_card &&
                  Product_card.map((el1) => (
                    <ul key={`ul_id${el1.id}`}>
                      <li>
                        <div>
                          <p>{el1.name}</p>
                          <span>
                            <del className="non_current_money">
                              <span className="symbol_span">£</span>
                              {el1.deleting}
                            </del>
                            <span className="current_money">
                              <span className="symbol_span">£</span>
                              {el1.current}
                            </span>
                          </span>
                        </div>
                        <img src={el1.img} alt="" />
                      </li>
                    </ul>
                  ))}
              </div>
              <div className="products">
                <h2>top rated products</h2>
                {Product_card &&
                  Product_card.slice(0, 3).map((el1) => (
                    <ul key={`ul2_id${el1.id}`}>
                      <li>
                        <div>
                          <p>{el1.name}</p>
                          <span>
                            <del className="non_current_money">
                              <span className="symbol_span">£</span>
                              {el1.deleting}
                            </del>
                            <span className="current_money">
                              <span className="symbol_span">£</span>
                              {el1.current}
                            </span>
                          </span>
                        </div>
                        <img src={el1.img} alt="" />
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
