import React from "react";
import "./Navbar.scss";

import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsVimeo } from "react-icons/bs";
import logo from "./../../../../src/assets/logo.png";

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <ul className="left_side">
              <li id="home_li">
                home <i class="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <li className="hover_lists_home hover_lists_home1">
                    Home one page
                    <i class="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li className="hover2_lists">Home main onepage</li>
                      <li className="hover2_lists">Home text slider onepage</li>
                      <li className="hover2_lists">Home youtube onepage</li>
                      <li className="hover2_lists">Home slider onepage</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Home multi page
                    <i class="fa-solid fa-angle-down"></i>
                  </li>
                </ul>
              </li>
              <li>
                pages <i class="fa-solid fa-angle-down"></i>
              </li>
              <li>
                portfolio <i class="fa-solid fa-angle-down"></i>
              </li>
              <li>
                shop <i class="fa-solid fa-angle-down"></i>
              </li>
              <li>
                blog <i class="fa-solid fa-angle-down"></i>
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
