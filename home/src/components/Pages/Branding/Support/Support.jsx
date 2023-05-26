import React from "react";
import "./Support.scss";
import { TfiSupport } from "react-icons/tfi";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoPlayOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { TfiBrushAlt } from "react-icons/tfi";
import { TfiGift } from "react-icons/tfi";

const Support = () => {
  return (
    <section id="creative">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="creative_box">
              <div className="creative_icon">
                <TfiSupport />
              </div>
              <div className="creative_details">
                <h5>support</h5>
                <p>
                  Suspendisse imperdiet elementum bibendum. Fusce eu facilisis
                  velit. Mauris at dapibus ligula. Mauris mauris lectus dominis
                  elemusan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="creative_box">
              <div className="creative_icon">
                <TfiShoppingCart />
              </div>
              <div className="creative_details">
                <h5>order</h5>
                <p>
                  Suspendisse imperdiet elementum bibendum. Fusce eu facilisis
                  velit. Mauris at dapibus ligula. Mauris mauris lectus dominis
                  elemusan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="creative_box">
              <div className="creative_icon">
                <IoPlayOutline />
              </div>
              <div className="creative_details">
                <h5>responsive</h5>
                <p>
                  Suspendisse imperdiet elementum bibendum. Fusce eu facilisis
                  velit. Mauris at dapibus ligula. Mauris mauris lectus dominis
                  elemusan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="creative_box">
              <div className="creative_icon">
                <TfiCup />
              </div>
              <div className="creative_details">
                <h5>awarded</h5>
                <p>
                  Suspendisse imperdiet elementum bibendum. Fusce eu facilisis
                  velit. Mauris at dapibus ligula. Mauris mauris lectus dominis
                  elemusan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="creative_box">
              <div className="creative_icon">
                <TfiBrushAlt />
              </div>
              <div className="creative_details">
                <h5>creative</h5>
                <p>
                  Suspendisse imperdiet elementum bibendum. Fusce eu facilisis
                  velit. Mauris at dapibus ligula. Mauris mauris lectus dominis
                  elemusan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="creative_box">
              <div className="creative_icon">
                <TfiGift />
              </div>
              <div className="creative_details">
                <h5>giveaway</h5>
                <p>
                  Suspendisse imperdiet elementum bibendum. Fusce eu facilisis
                  velit. Mauris at dapibus ligula. Mauris mauris lectus dominis
                  elemusan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
