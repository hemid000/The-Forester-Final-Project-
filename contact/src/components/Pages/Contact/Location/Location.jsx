import React from "react";
import "./Location.scss";
const Location = () => {
  return (
    <section id="location">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <iframe
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Storey%20Ave%20+()&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
