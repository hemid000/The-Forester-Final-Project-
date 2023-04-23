import React from "react";
import "./Get.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HiOutlineMapPin } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
const Get = () => {
  const notify = () =>
    toast.success("Message was sent!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <section id="get">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="get_left">
              <h2>Get In Touch</h2>
              <ul>
                <li>
                  <HiOutlineMapPin />
                  <div className="get_details">
                    <h5>OUR OFFICE</h5>
                    <p>3 Byron Ave, Yonkers NY</p>
                  </div>
                </li>
                <li>
                  <CiMail />
                  <div className="get_details">
                    <h5>OUR OFFICE</h5>
                    <p>3 Byron Ave, Yonkers NY</p>
                  </div>
                </li>
                <li>
                  <IoCallOutline />
                  <div className="get_details">
                    <h5>OUR OFFICE</h5>
                    <p>3 Byron Ave, Yonkers NY</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="get_right">
              <form action="#">
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your message"
                ></textarea>
              </form>
              <div className="explore_now">
                <a onClick={notify}>send message</a>
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Get;
