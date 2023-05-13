import React from "react";
import "./Touch.scss";
import { HiPhone } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";

const Touch = () => {
  return (
    <section id="touch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="touch_header">
              <h5>touch us</h5>
              <h2>
                <HiPhone />
                (899) 999 99-009
              </h2>
            </div>
            <div className="touch_details">
              <div className="touch_left">
                <p>
                  <CiMail />
                  support@forester.com
                </p>
              </div>
              <div className="touch_right">
                <p>
                  <AiFillHome />
                  support@forester.com
                </p>
              </div>
            </div>
            <form action="#">
              <input type="text" placeholder="Your Name *" required />
              <input type="text" placeholder="Your Email *" required />
              <input type="text" placeholder="Subject" required />
              <textarea
                name="message"
                id="message"
                cols="40"
                rows="10"
                placeholder="Your message... *"
              ></textarea>
            </form>
            <div className="explore_now">
              <a href="">submit</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Touch;
