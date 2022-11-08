import React from "react";
import { NavLink } from "react-router-dom";
import PageTitle from "../../Common/PageTitle/PageTitle";
import "./Orderservice.css";

const OrderService = () => {
  return (
    <div className="container my-5">
      <PageTitle title={"order now"} />
      <div className="row">
        <div className="col-lg-12 col-12 col-md-12 site-content">
          <div className="entry-content">
            <div className="row">
              <div className="col-sm-12 service-content">
                <div className="service-area-subtitle text-center">
                  Service Area
                </div>
                <div className="liner-container">
                  <h4 className="service-area-title text-center">
                    Select Your Area
                  </h4>
                </div>
                <div className="service-area-after-title text-center">
                  Select your Area by clicking on the Area Button
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="row area-selection-button-area py-4">
              <div className="col-sm-6">
                <NavLink to="/dhanmondi">
                  <button className="btn btn-success">Dhanmondi</button>
                </NavLink>
              </div>
              <div className="col-sm-6">
                <NavLink to="/mirpur">
                  <button className="btn btn-success">Mirpur</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderService;
