import React from "react";
import "./Story.scss";

const Story = () => {
  return (
    <section id="story">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="story_items">
              <h5>our story</h5>
              <h2>
                Unordinary digital agency crafting sophisticated and eccentric
                stuff that will leave you speechless, we had opportunity to work
                on wide variety of projects for different clients around the
                world, we're responsible and our client is our priority
              </h2>
              <div className="read_more">
                <p className="story_p">
                  Interested in our story and want to meet us even better?
                </p>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
