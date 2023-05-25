import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./Counter.scss";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section id="counter">
      <div className="container">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="counter_box">
                <h2>
                  {counterOn && (
                    <CountUp start={0} end={696} duration={2} delay={0} />
                  )}
                </h2>
                <h5>Projects Completed</h5>
                <p>
                  We had a opportunity to work on wide variety of projects for
                  different clients around the world
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="counter_box">
                <h2>
                  {counterOn && (
                    <CountUp start={0} end={280} duration={2} delay={0} />
                  )}
                </h2>
                <h5>Satisfied Clients</h5>
                <p>
                  We had a opportunity to work on wide variety of projects for
                  different clients around the world
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="counter_box">
                <h2>
                  {counterOn && (
                    <CountUp start={0} end={14} duration={2} delay={0} />
                  )}
                </h2>
                <h5>awards</h5>
                <p>
                  We had a opportunity to work on wide variety of projects for
                  different clients around the world
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="counter_box">
                <h2>
                  {counterOn && (
                    <CountUp start={0} end={77} duration={2} delay={0} />
                  )}
                </h2>
                <h5>employees</h5>
                <p>
                  We had a opportunity to work on wide variety of projects for
                  different clients around the world
                </p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default Counter;
