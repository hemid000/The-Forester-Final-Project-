import React from "react";
import "./Plan.scss";
const Plan = () => {
  return (
    <section id="plan">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="plan_header">
              <h5>our plans</h5>
              <h2>Packages</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="plan_box">
              <div className="plan_money">
                <h3>$ 15</h3>
                <h5>Per Month</h5>
              </div>
              <div className="plan_name">
                <h2>Basic</h2>
              </div>
              <ul className="plan_lists">
                <li>eCommerce Ready</li>
                <li>Free Visual Composer</li>
                <li>Creative Portfolio</li>
              </ul>
              <div className="explore_now">
                <a href="#">purchase now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="plan_box">
              <div className="plan_money">
                <h3>$ 30</h3>
                <h5>Per Month</h5>
              </div>
              <div className="plan_name">
                <h2>Standard</h2>
              </div>
              <ul className="plan_lists">
                <li>eCommerce Ready</li>
                <li>Free Visual Composer</li>
                <li>Creative Portfolio</li>
                <li>Regular Updates</li>
              </ul>
              <div className="explore_now">
                <a href="#">purchase now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="plan_box">
              <div className="plan_money">
                <h3>$ 60</h3>
                <h5>Per Month</h5>
              </div>
              <div className="plan_name">
                <h2>Premium</h2>
              </div>
              <ul className="plan_lists">
                <li>eCommerce Ready</li>
                <li>Free Visual Composer</li>
                <li>Creative Portfolio</li>
              </ul>
              <div className="explore_now">
                <a href="#">purchase now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
