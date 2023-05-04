import React from "react";
import "./Special.scss";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Special = () => {
  return (
    <section id="special">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="reviews_box">
                  <h2>
                    <em>“</em>A creative people are only motivated by a desire
                    to achieve success.
                    <em>”</em>
                  </h2>
                  <h5>- The Honshi Team</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviews_box">
                  <h2>
                    <em>“</em>A creative people are only motivated by a desire
                    to achieve success.
                    <em>”</em>
                  </h2>
                  <h5>- The Honshi Team</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="reviews_box">
                  <h2>
                    <em>“</em>
                    Design is about the perfect fusion of passion and knowledge.
                    <em>”</em>
                  </h2>
                  <h5>- The Honshi Team</h5>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
