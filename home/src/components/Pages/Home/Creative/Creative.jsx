import React from "react";
import "./Creative.scss";
import { IoBulbOutline } from "react-icons/io5";
import { GiTie } from "react-icons/gi";
import { GiSportMedal } from "react-icons/gi";

const Creative = () => {
  return (
    <section id="creative">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="creative_box">
              <div className="creative_icon">
                <IoBulbOutline />
              </div>
              <div className="creative_details">
                <h5>we're creative</h5>
                <p>
                  Day handsome addition horrible sensible goodness two contempt.
                  Evening for married summies imperia
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="creative_box">
              <div className="creative_icon">
                <GiTie />
              </div>
              <div className="creative_details">
                <h5>we're eccentrics</h5>
                <p>
                  Day handsome addition horrible sensible goodness two contempt.
                  Evening for married summies imperia
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="creative_box">
              <div className="creative_icon">
                <GiSportMedal />
              </div>
              <div className="creative_details">
                <h5>we're awarded</h5>
                <p>
                  Day handsome addition horrible sensible goodness two contempt.
                  Evening for married summies imperia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
