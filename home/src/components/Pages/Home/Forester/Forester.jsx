import React from "react";
import "./../Forester/Forester.scss";
import background_img from "./../../../../assets/Home/Background_img/bg-1.jpg";

const Forester = () => {
  return (
    <section
      id="forester"
      style={{ backgroundImage: `url(${background_img})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="forester_header">
              <h5>Greetings, We Are</h5>
              <h1>FORESTER</h1>
              <h4>
                Unordinary digital agency crafting sophisticated and
                <br />
                eccentric stuff that will leave you speechless
              </h4>
              <div className="explore_now">
                <a>explore now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forester;
