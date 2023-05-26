import React, { useState } from "react";
import "./Holiday.scss";
import Holiday_cards from "../../../../Mock/Holiday/Holiday_cards";
const Holiday = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = Holiday_cards.slice(firstIndex, lastIndex)
  const npage = Math.ceil(Holiday_cards.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id) {
    setCurrentPage(id)
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <section id="holiday">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            {records &&
              records.map((el) => (
                <div className="holiday_left" key={`holiday_id${el.id}`}>
                  <div className="holiday_header">
                    <h5>{el.type}</h5>
                    <h2>{el.name}</h2>
                  </div>
                  <div className="holiday_img">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="holiday_text">
                    <p>
                      So insisted received is occasion advanced honoured. Among
                      ready to which up. Attacks smiling and may out assured
                      moments man nothing outward. Thrown any behind afford
                      either the set depend one temper. Instrument melancholy.{" "}
                    </p>
                  </div>
                  <div className="view">
                    <p>
                      Posted by
                      <h5>admin</h5>
                    </p>
                    <div className="explore_now">
                      <a href="#">view post</a>
                    </div>
                    <p>
                      Posted on March 9,
                      <br />
                      2017
                    </p>
                  </div>
                </div>
              ))}
            <ul className="pagination">
              <li className="page_item">
                <a onClick={prePage} className="page_link">Prev</a>
              </li>
              {
                numbers.map((n, i) => (
                  <li className={`page_item ${currentPage === n ? 'active' : ''}`} key={i}>
                    <a onClick={() => changeCPage(n)} className="page_link">{n}</a>
                  </li>
                ))
              }
              <li className="page_item">
                <a onClick={nextPage} className="page_link">Next</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className="holiday_right">
              <form action="#">
                <input type="text" placeholder="Search" />
                <input type="submit" />
              </form>
              <div className="archive_part">
                <div></div>
                <span>Archives</span>
              </div>
              <p>March 2017</p>
              <div className="archive_part">
                <div></div>
                <span>Recent Posts</span>
              </div>
              <div className="recent_boxes">
                <img
                  src="https://f8g8b9p5.rocketcdn.me/themes/forester/wp-content/uploads/2017/03/post-2-200x200.jpg"
                  alt=""
                />
                <p>Nepenthe, For Real</p>
              </div>
              <div className="recent_boxes">
                <img
                  src="https://f8g8b9p5.rocketcdn.me/themes/forester/wp-content/uploads/2017/03/post-3-200x200.jpg"
                  alt=""
                />
                <p>How To Cut Tomato In Perfect Slices, Easy</p>
              </div>
              <ul>
                <div className="archive_part">
                  <div></div>
                  <span>Categories</span>
                </div>
                <li>Health</li>
                <li>Lifestyle</li>
                <li>Photography</li>
                <li>Travel </li>
              </ul>
              <ul>
                <div className="archive_part">
                  <div></div>
                  <span>Meta</span>
                </div>
                <li>Log In</li>
                <li>Entries Feed</li>
                <li>Comments Feed</li>
                <li>WordPress.Org</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Holiday;
