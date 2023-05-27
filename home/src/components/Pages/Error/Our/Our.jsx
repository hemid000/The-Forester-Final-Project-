import React from "react";
import "./Our.scss";
import { Link } from "react-router-dom";
import background_img from "./../../../../assets/Background/background.jpg";
const Our = () => {
    return (
        <section id="our" style={{ backgroundImage: `url(${background_img})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand_header">
                            <h2>404 PAGE</h2>
                            <p>
                                404 Page / <span>404</span>
                            </p>
                            <div className="explore_now">
                                <Link to={'/'}>
                                    back to homepage
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Our;
