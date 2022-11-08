import React, { useEffect } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import logo from "../../../media/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth).then(() => {
      console.log("sign out");
    });
  };
  const animation = () => {
    const tabsNewAnim = $("#navbarSupportedContent");
    const activeItemNewAnim = tabsNewAnim.find(".active");
    const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    const itemPosNewAnimTop = activeItemNewAnim.position();
    const itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function(e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      const activeWidthNewAnimHeight = $(this).innerHeight();
      const activeWidthNewAnimWidth = $(this).innerWidth();
      const itemPosNewAnimTop = $(this).position();
      const itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  };
  useEffect(() => {
    animation();
    $(window).on("resize", function() {
      setTimeout(function() {
        animation();
      }, 500);
    });
  });
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <NavLink to="/home" className="navbar-brand navbar-logo">
          <img style={{ height: "80px" }} src={logo} alt="logo" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                HOME
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/orderService" exact>
                ORDER NOW
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/aboutUs" exact>
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/faq" exact>
                FAQ
              </NavLink>
            </li>
            {user && (
              <>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/addProduct" exact>
                    ADD PRODUCT
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/orders" exact>
                    ORDERS
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item active">
              {user ? (
                <NavLink
                  className="nav-link"
                  onClick={handleLogOut}
                  to="/"
                  exact
                >
                  LOGOUT
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="/login" exact>
                  LOGIN
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
