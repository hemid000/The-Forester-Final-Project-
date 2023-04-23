import React from "react";
import "./Location.scss";
const Location = () => {
  return (
    <section id="location">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <iframe
              height="402"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=926&amp;height=402&amp;hl=en&amp;q=%20London+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
