import React from "react";
import "./Social.scss";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsVimeo } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
const Social = () => {
  return (
    <section id="social">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="social_header">
              <h5>READY TO COLLABORATE?</h5>
              <h2>Social</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="social_box">
              <AiOutlineInstagram />
              <h5>instagram</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="social_box">
              <ImFacebook />
              <h5>facebook</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="social_box">
              <BsTwitter />
              <h5>twitter</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="social_box">
              <BsVimeo />
              <h5>vimeo</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
