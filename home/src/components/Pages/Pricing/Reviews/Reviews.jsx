import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Reviews.scss";
import logo from "../../../../assets/Pricing/Reviews/reviews-back.jpg";
const Reviews = () => {
  return (
    <section
      id="reviews"
      style={{
        backgroundImage: `url(${logo})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="reviews_header">
              <h5>TESTIMONIALS</h5>
              <h2>Reviews</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="col-lg-6">
                <div className="reviews_box">
                  <h2>
                    “ Fast and versatile, Leone team executed each service that
                    we requested rapidly. Very pleasant collective, looking
                    forward to collaborate with them.”
                  </h2>
                  <p>Lenny Potter</p>
                  <h5>Manager</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-6">
                <div className="reviews_box">
                  <h2>
                    “ Fast and versatile, Leone team executed each service that
                    we requested rapidly. Very pleasant collective, looking
                    forward to collaborate with them.”
                  </h2>
                  <p>Sophie Robben</p>
                  <h5>designer</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-6">
                <div className="reviews_box">
                  <h2>
                    “ Fast and versatile, Leone team executed each service that
                    we requested rapidly. Very pleasant collective, looking
                    forward to collaborate with them.”
                  </h2>
                  <p>Gabriel Jorge</p>
                  <h5>our client</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
