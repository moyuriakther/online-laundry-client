import React from "react";
import { NavLink } from "react-router-dom";
import PageTitle from "../../Common/PageTitle/PageTitle";
import "../OrderService/Orderservice.css";

const Dhanmondi = () => {
  return (
    <div className="container my-5">
      <PageTitle title={"dhanmondi"} />
      <div className="row">
        <div className="col-lg-12 col-12 col-md-12 site-content">
          <div className="entry-content">
            <div className="row">
              <div className="col-sm-12 service-content">
                {/* <div className="service-area-subtitle text-center">Service Area</div> */}
                <div className="liner-container">
                  <h4 className="service-area-title text-center">
                    Select A Vendor
                  </h4>
                </div>
                <div className="service-area-after-title text-center">
                  Select A Vendor by Clicking on Vendor Button
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="row area-selection-button-area py-4">
              <div className="col-sm-6">
                <NavLink to="/laundryService">
                  {" "}
                  <button className="btn btn-success">Clean Up BD</button>
                </NavLink>
              </div>
              <div className="col-sm-6">
                <NavLink to="/laundryService">
                  <button className="btn btn-success">Laundry Express</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dhanmondi;
