import React from "react";
import "./Team.scss";
import Fade from 'react-reveal/Fade';
import team1_img from "./../../../../assets/Home/Team/team-1.jpg";
import team2_img from "./../../../../assets/Home/Team/team-2.jpg";
import team3_img from "./../../../../assets/Home/Team/team-3.jpg";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsVimeo } from "react-icons/bs";
import { BsWordpress } from "react-icons/bs";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="team_header">
              <h5>the crew</h5>
              <h2>Team</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Fade top distance="10%" duration={1500}>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team_box">
                <img src={team1_img} alt="" />
                <div className="team_details">
                  <div className="team_small_box">
                    <h2>Mike Rose</h2>
                    <h5>designer</h5>
                    <p>
                      Your team is important and we know it. With this element you
                      can highlight the crew.
                    </p>
                    <div className="team_social">
                      <BsVimeo />
                      <ImFacebook />
                      <BsTwitter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team_box">
                <img src={team2_img} alt="" />
                <div className="team_details">
                  <div className="team_small_box">
                    <h2>Guy Honshi</h2>
                    <h5>designer</h5>
                    <p>
                      Your team is important and we know it. With this element you
                      can highlight the crew.
                    </p>
                    <div className="team_social">
                      <BsVimeo />
                      <BsWordpress />
                      <ImFacebook />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team_box">
                <img src={team3_img} alt="" />
                <div className="team_details">
                  <div className="team_small_box">
                    <h2>Luke Sky</h2>
                    <h5>designer</h5>
                    <p>
                      Your team is important and we know it. With this element you
                      can highlight the crew.
                    </p>
                    <div className="team_social">
                      <BsWordpress />
                      <ImFacebook />
                      <BsTwitter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Team;
