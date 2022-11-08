import React from "react";
import { MdPhoneEnabled, MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import "./TopBar.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="align-items-center">
      <div className="container">
        <div className="row topBar ">
          <div className="col-md-4 topbar-content col-sm-4 col-xl-4 col-lg-4">
            <NavLink className="login-register text-black" to="/login">
              Login / Register
            </NavLink>
          </div>
          <div className="address email-phone-address col-md-6 col-sm-6 col-xl-6 col-lg-6">
            <div className="d-flex">
              <p>Mirput 1, Dhaka </p>
              <IconContext.Provider value={{ color: "#c36341" }}>
                <p>
                  <MdPhoneEnabled /> +88 01794844364
                </p>{" "}
                <p>
                  <MdEmail /> akthermoyuri@gmail.com
                </p>
              </IconContext.Provider>
            </div>
          </div>
          <div className="cart-icon col-lg-2 col-md-2 col-xl-2 col-sm-1 d-flex justify-content-center align-items-center">
            <IconContext.Provider
              value={{ color: "#c36341", fontSize: "10px" }}
            >
              <FaShoppingCart />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
