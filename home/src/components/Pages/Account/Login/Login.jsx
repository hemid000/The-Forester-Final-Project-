import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <section id="login">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="login_box">
              <h2>Login</h2>
              <form action="#">
                <label htmlFor="username" className="label">
                  Username or email address *
                </label>
                <input type="text" required />
                <label htmlFor="password">Password *</label>
                <input type="text" required />
                <label htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <span>Remember me </span>
                </label>
                <div className="explore_now">
                  <a>log in</a>
                </div>
                <p>Lost your password?</p>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="login_box">
              <h2>Register</h2>
              <form action="#">
                <label htmlFor="username" className="label">
                  Email address *
                </label>
                <input type="text" required />
                <label htmlFor="password">Password *</label>
                <input type="text" required />
                <div className="explore_now">
                  <a>register</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
