import React from "react";
import "./Brand.scss";
import { Link } from "react-router-dom";
import background_img from "./../../../../assets/Background/background.jpg";
const Brand = () => {
  return (
    <section id="brand" style={{ backgroundImage: `url(${background_img})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand_header">
              <h2>Branding</h2>
              <p>
                The Forester / <span>Branding</span>
              </p>
              <div className="explore_now">
                <Link to={'./'}>
                  back to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
