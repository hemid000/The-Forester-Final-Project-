import React from "react";
import "./Navbar.scss";

import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsVimeo } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import logo from "./../../../../src/assets/Home/Logo_img/logo.png";

import MockNav_home1 from "../../../Mock/Navbar/MockNav_home/MockNav_home1";
import MockNav_home2 from "../../../Mock/Navbar/MockNav_home/MockNav_home2";
import MockNav_portfolio1 from "../../../Mock/Navbar/MockNav_portfolio/MockNav_portfolio1";
import MockNav_portfolio2 from "../../../Mock/Navbar/MockNav_portfolio/MockNav_portfolio2";
import MockNav_portfolio3 from "../../../Mock/Navbar/MockNav_portfolio/MockNav_portfolio3";

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <ul className="left_side">
              <li id="home_li">
                home <i className="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <li className="hover_lists_home hover_lists_home1">
                    Home one page
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      {MockNav_home1 &&
                        MockNav_home1.map((element) => (
                          <li
                            className="hover2_lists"
                            key={`navbar_id${element.id}`}
                          >
                            {element.name}
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Home multi page
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      {MockNav_home2 &&
                        MockNav_home2.map((element) => (
                          <li
                            className="hover2_lists"
                            key={`navbar_id${element.id}`}
                          >
                            {element.name}
                          </li>
                        ))}
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="pages_li">
                pages <i className="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <li className="hover_lists_home">Team1</li>
                  <li className="hover_lists_home">Team2</li>
                  <li className="hover_lists_home">Pricing</li>
                  <li className="hover_lists_home">Branding</li>
                  <li className="hover_lists_home">Web Design</li>
                  <li className="hover_lists_home">Contact</li>
                </ul>
              </li>
              <li id="portfolio_li">
                portfolio <i className="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <li className="hover_lists_home hover_lists_home1">
                    Portfolio Filter Animation
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      {MockNav_portfolio1 &&
                        MockNav_portfolio1.map((element) => (
                          <li
                            className="hover2_lists"
                            key={`navbar_id${element.id}`}
                          >
                            {element.name}
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Portfolio Caption Animation
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      {MockNav_portfolio2 &&
                        MockNav_portfolio2.map((element) => (
                          <li
                            className="hover2_lists"
                            key={`navbar_id${element.id}`}
                          >
                            {element.name}
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Portfolio Layout Mode
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      {MockNav_portfolio3 &&
                        MockNav_portfolio3.map((element) => (
                          <li
                            className="hover2_lists"
                            key={`navbar_id${element.id}`}
                          >
                            {element.name}
                          </li>
                        ))}
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="shop_li">
                shop <i className="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <li className="hover_lists_home">Shop Page</li>
                  <li className="hover_lists_home">Shop Single</li>
                  <li className="hover_lists_home">Cart</li>
                  <li className="hover_lists_home">Checkout</li>
                  <li className="hover_lists_home">My account</li>
                </ul>
              </li>
              <li id="blog_li">
                blog <i className="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <li className="hover_lists_home">
                    Boxed with Filter
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Blog 1 Column</li>
                      <li>Blog 2 Column</li>
                      <li>Blog 3 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Fullwidth with Filter
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Fullwidth 2 Column</li>
                      <li>Fullwidth 3 Column</li>
                      <li>Fullwidth 4 Column</li>
                      <li>Fullwidth 5 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Boxed No Filter
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Boxed 2 Column</li>
                      <li>Boxed 3 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Fullwidth No Filter
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Fullwidth 2 Column</li>
                      <li>Fullwidth 3 Column</li>
                      <li>Fullwidth 4 Column</li>
                      <li>Fullwidth 5 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Boxed Slider
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Slider 2 Column</li>
                      <li>Slider 3 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Fullwidth Slider
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Slider 2 Column</li>
                      <li>Slider 3 Column</li>
                      <li>Slider 4 Column</li>
                      <li>Slider 5 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Boxed with Hero
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Boxed 2 Column</li>
                      <li>Boxed 3 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Fullwidth with Hero
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Fullwidth 2 Column</li>
                      <li>Fullwidth 3 Column</li>
                      <li>Fullwidth 4 Column</li>
                      <li>Fullwidth 5 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Fullwidth Slider with Hero
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Slider 2 Column</li>
                      <li>Slider 3 Column</li>
                      <li>Slider 4 Column</li>
                      <li>Slider 5 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">Blog Classic</li>
                  <li className="hover_lists_home">Single Post</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="nav_logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-5">
            <ul className="right_side">
              <div className="social_network">
                <ImFacebook />
                <li>facebook</li>
              </div>
              <div className="social_network">
                <BsTwitter />
                <li>twitter</li>
              </div>
              <div className="social_network">
                <AiOutlineInstagram />
                <li>instagram</li>
              </div>
              <div className="social_network">
                <BsVimeo />
                <li>vimeo</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
