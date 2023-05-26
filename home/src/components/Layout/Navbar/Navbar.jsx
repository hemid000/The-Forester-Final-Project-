import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsVimeo } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import logo from "./../../../../src/assets/Home/Logo_img/logo.png";
import Darkmode1 from "../../DarkMode/Darkmode1"
const Navbar = () => {


  const [btnState, setBtnState] = useState(false)

  function handleClick() {
    setBtnState(btnState => !btnState);
  }

  let toggleClassCheck = btnState ? ' toggle_class' : '';

  const [navbar, setNavbar] = useState(false)

  const changeBackgroundColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    }
    else setNavbar(false)
  }

  function OpenPages() {
    const Element = document.querySelector("#mob_page");
    const Pluse5Navbar = document.querySelector(".plus5_navbar");
    const Element_Section = document.querySelector(".pages_portfolio");
    Element_Section.style.height = "auto";
    Pluse5Navbar.style.rotate = "135deg";
    if (Element.classList.contains("nav_remove")) {
      Element.classList.remove("nav_remove");
      Pluse5Navbar.style.transform = "translateY(0px)";
      Element_Section.style.height = "auto";
    } else {
      Element.classList.add("nav_remove");
      Element_Section.style.height = "0";
      Pluse5Navbar.style.rotate = "0deg";
    }
  }
  function OpenPortfolio() {
    const Element = document.querySelector("#mob_port");
    const Element_Section = document.querySelector(".portfolio_portfolio");
    const PluseNavbar = document.querySelector(".plus2_navbar");
    Element_Section.style.height = "auto";
    PluseNavbar.style.rotate = "135deg";
    if (Element.classList.contains("nav_remove")) {
      Element.classList.remove("nav_remove");
      Element_Section.style.height = "auto";
      PluseNavbar.style.rotate = "135deg";
    } else {
      Element.classList.add("nav_remove");
      Element_Section.style.height = "0";
      PluseNavbar.style.rotate = "0deg";
    }
  }
  function OpenShop() {
    const Shop = document.querySelector("#mob_shop");
    const Element_Section = document.querySelector(".shop_portfolio");
    const Pluse3Navbar = document.querySelector(".plus3_navbar");
    Element_Section.style.height = "auto";
    Pluse3Navbar.style.rotate = "135deg";
    if (Shop.classList.contains("nav_remove")) {
      Shop.classList.remove("nav_remove");
      Element_Section.style.height = "auto";
      Pluse3Navbar.style.rotate = "135deg";
    } else {
      Shop.classList.add("nav_remove");
      Element_Section.style.height = "0";
      Pluse3Navbar.style.rotate = "0deg";
    }
  }
  function OpenBlog() {
    const Blog = document.querySelector("#mob_blog");
    const Element_Section = document.querySelector(".blog_portfolio");
    const PluseNavbar = document.querySelector(".plus4_navbar");
    Element_Section.style.height = "auto";
    PluseNavbar.style.rotate = "135deg";
    if (Blog.classList.contains("nav_remove")) {
      Blog.classList.remove("nav_remove");
      Element_Section.style.height = "auto";
      PluseNavbar.style.rotate = "135deg";
    } else {
      Blog.classList.add("nav_remove");
      Element_Section.style.height = "0";
      PluseNavbar.style.rotate = "0deg";
    }
  }
  window.addEventListener('scroll', changeBackgroundColor)
  return (
    <nav id="nav" className={navbar ? 'active' : ''}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <ul className="left_side">
              <li id="home_li">
                home <i className="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <li className="hover_lists_home hover_lists_home1">
                    Home one page
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li className="hover2_lists">Home main one page</li>
                      <li className="hover2_lists">Home text slider onepage</li>
                      <li className="hover2_lists">Home youtube onepage</li>
                      <li className="hover2_lists">Home slider onepage</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Home multi page
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li className="hover2_lists">Home main</li>
                      <li className="hover2_lists">Home slider</li>
                      <li className="hover2_lists">Home youtube</li>
                      <li className="hover2_lists">Home text slider</li>
                      <li className="hover2_lists">Home light bg</li>
                      <li className="hover2_lists">Home Youtube 2</li>
                      <li className="hover2_lists">Home dark</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="pages_li">
                pages <i className="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <li className="hover_lists_home">Team1</li>
                  <li className="hover_lists_home">Team2</li>
                  <Link to={'./pricing'} className="link">
                    <li className="hover_lists_home">
                      Pricing
                    </li>
                  </Link>
                  <Link to={'./branding'} className="link">
                    <li className="hover_lists_home">
                      Branding
                    </li>
                  </Link>
                  <li className="hover_lists_home">Web Design</li>
                  <Link to={'./contact'} className="link">
                    <li className="hover_lists_home">
                      Contact
                    </li>
                  </Link>
                </ul>
              </li>
              <li id="portfolio_li">
                portfolio <i className="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <li className="hover_lists_home hover_lists_home1">
                    Portfolio Filter Animation
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <Link to={'./fadeout'} className="link">
                        <li className="hover_lists_home">
                          Fadeout
                        </li>
                      </Link>
                      <li className="hover2_lists">Quicksand</li>
                      <li className="hover2_lists">Bounce Left</li>
                      <li className="hover2_lists">Bounce Top</li>
                      <li className="hover2_lists">Bounce Bottom</li>
                      <li className="hover2_lists">Move Left</li>
                      <li className="hover2_lists">Slide Left</li>
                      <li className="hover2_lists">Fade Out Top</li>
                      <li className="hover2_lists">Sequentially</li>
                      <li className="hover2_lists">Skew</li>
                      <li className="hover2_lists">Slide Delay</li>
                      <li className="hover2_lists">Rotate Slides</li>
                      <li className="hover2_lists">Flip Out Delay</li>
                      <li className="hover2_lists">Flip Out</li>
                      <li className="hover2_lists">Unfold</li>
                      <li className="hover2_lists">Fold Left</li>
                      <li className="hover2_lists">Scale Down</li>
                      <li className="hover2_lists">Front Row</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Portfolio Caption Animation
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li className="hover2_lists">Push Top</li>
                      <li className="hover2_lists">Push Down</li>
                      <li className="hover2_lists">Move Right</li>
                      <li className="hover2_lists">Overlay Bottom</li>
                      <li className="hover2_lists">Overlay Bottom Along</li>
                      <li className="hover2_lists">Overlay Right Along</li>
                      <li className="hover2_lists">Overlay Bottom Reveal</li>
                      <li className="hover2_lists">Minimal</li>
                      <li className="hover2_lists">Zoom</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Portfolio Layout Mode
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li className="hover2_lists">Slider Without Navigation</li>
                      <li className="hover2_lists">Slider With Navigation</li>
                      <li className="hover2_lists">Grid Custom Size</li>
                      <li className="hover2_lists">Mosaic</li>
                      <li className="hover2_lists">Mosaic Boxed</li>
                      <li className="hover2_lists">Grid Boxed 2 Column</li>
                      <li className="hover2_lists">Grid Boxed 3 Column</li>
                      <li className="hover2_lists">Grid Boxed 4 Column</li>
                      <li className="hover2_lists">Grid Fullwidth 2 Column</li>
                      <li className="hover2_lists">Grid Fullwidth 3 Column</li>
                      <li className="hover2_lists">Grid Fullwidth 4 Column</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="shop_li">
                shop <i className="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <Link to={'./shop'} className="link">
                    <li className="hover_lists_home">
                      Shop Page
                    </li>
                  </Link>
                  <Link to={'./single'} className="link">
                    <li className="hover_lists_home">
                      Shop Single
                    </li>
                  </Link>
                  <li className="hover_lists_home">Cart</li>
                  <li className="hover_lists_home">Checkout</li>
                  <li className="hover_lists_home">My account</li>
                </ul>
              </li>
              <li id="blog_li">
                blog <i className="fa-solid fa-angle-down"></i>
                <ul className="hover_ul_home">
                  <li className="hover_lists_home">
                    Boxed with Filter
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Blog 1 Column</li>
                      <li>Blog 2 Column</li>
                      <li>Blog 3 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Fullwidth with Filter
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Fullwidth 2 Column</li>
                      <li>Fullwidth 3 Column</li>
                      <li>Fullwidth 4 Column</li>
                      <li>Fullwidth 5 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Boxed No Filter
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Boxed 2 Column</li>
                      <li>Boxed 3 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Fullwidth No Filter
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Fullwidth 2 Column</li>
                      <li>Fullwidth 3 Column</li>
                      <li>Fullwidth 4 Column</li>
                      <li>Fullwidth 5 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Boxed Slider
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Slider 2 Column</li>
                      <li>Slider 3 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Fullwidth Slider
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Slider 2 Column</li>
                      <li>Slider 3 Column</li>
                      <li>Slider 4 Column</li>
                      <li>Slider 5 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Boxed with Hero
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Boxed 2 Column</li>
                      <li>Boxed 3 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Fullwidth with Hero
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Fullwidth 2 Column</li>
                      <li>Fullwidth 3 Column</li>
                      <li>Fullwidth 4 Column</li>
                      <li>Fullwidth 5 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">
                    Fullwidth Slider with Hero
                    <i className="fa-solid fa-angle-down"></i>
                    <ul className="hover2_ul">
                      <li>Slider 2 Column</li>
                      <li>Slider 3 Column</li>
                      <li>Slider 4 Column</li>
                      <li>Slider 5 Column</li>
                    </ul>
                  </li>
                  <li className="hover_lists_home">Blog Classic</li>
                  <li className="hover_lists_home">Single Post</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="nav_logo">
              <Link to={'./'} className="link">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="nav_bar">
              <HiBars3 onClick={handleClick} />
              <Darkmode1 />
              <div className={`nav1_mobile${toggleClassCheck}`}>
                <ul>
                  <li>Home</li>
                  <li id="mob_page" className="nav_remove" onClick={OpenPages}>
                    Pages
                    <AiOutlinePlus className="plus5_navbar" />
                  </li>
                  <ul className="pages_portfolio">
                    <li></li>
                    <li>Team1</li>
                    <li>Team2</li>
                    <li>Pricing</li>
                    <li>Branding</li>
                    <li>Web Design</li>
                    <li>Contact</li>
                  </ul>
                  <li id="mob_port" onClick={OpenPortfolio}>
                    Portolio
                    <AiOutlinePlus className="plus_navbar plus2_navbar" />
                  </li>
                  <ul className="portfolio_portfolio">
                    <li></li>
                    <li>Fadeout</li>
                  </ul>
                  <li id="mob_shop" className="nav_remove" onClick={OpenShop}>
                    Shop
                    <AiOutlinePlus className="plus3_navbar" />
                  </li>
                  <ul className="shop_portfolio">
                    <li></li>
                    <li>Shop Page</li>
                    <li>Shop Single</li>
                    <li>Cart</li>
                    <li>Checkout</li>
                    <li>My account</li>
                  </ul>
                  <li id="mob_blog" className="nav_remove" onClick={OpenBlog}>
                    Blog
                    <AiOutlinePlus className="plus4_navbar" />
                  </li>
                  <ul className="blog_portfolio">
                    <li></li>
                    <li>Blog Classic</li>
                    <li>Single Post</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <ul className="right_side">
              <div className="social_network">
                <ImFacebook />
                <li>facebook</li>
              </div>
              <div className="social_network">
                <BsTwitter />
                <li>twitter</li>
              </div>
              <div className="social_network">
                <AiOutlineInstagram />
                <li>instagram</li>
              </div>
              <div className="social_network">
                <BsVimeo />
                <li>vimeo</li>
              </div>
              <div className="nav_dark">
                <Darkmode1 />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
