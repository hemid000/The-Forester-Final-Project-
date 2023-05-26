import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { ImHome3 } from "react-icons/im";
import logo from "./../../../assets/Home/Logo_img/logo.png";
const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-6 col-sm-12">
            <div className="footer_left">
              <ul>
                <Link to={'./'} className="link">
                  <li className="hover_lists_home">
                    Home
                  </li>
                </Link>
                <li>services</li>
                <li>portfolio</li>
                <li>team</li>
                <Link to={'./contact'} className="link">
                  <li className="hover_lists_home">
                    Contact
                  </li>
                </Link>
              </ul>
              <ul>
                <p>
                  <IoMdCall /> (633) 926-316
                </p>
                <p>
                  <IoMdMail /> info@saulsforester.com
                </p>
                <p>
                  <ImHome3 /> 3 Byron Ave, Yonkers NY
                </p>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer_right">
              <img src={logo} alt="" />
              <p className="footer_p">
                Copyright © Ninetheme The Forester.
                <br />
                All rights reserved. Privacy Policy
              </p>
              <a href="https://ninetheme.com/?utm_source=forester_footer_link&utm_campaign=forester_footer_link">
                ninetheme.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
