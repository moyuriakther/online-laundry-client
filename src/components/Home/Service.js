import React from "react";
import { Card} from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import {Navigate} from 'react-router-dom';

const Service = (props) => {
  const { category, img } = props.service;
  return (
    <div className="col-md-4 mb-3">
      <Card>
        <Card.Body >
          <Card.Title className="d-flex justify-content-center">{category}</Card.Title>
          <Card.Img variant="top" style={{ height: "200px", width: "100px auto", margin: "5px"}} src={img} /> <br/>
          {/* <NavLink to="/laundryService">
            <button style={{padding:"5px 30px", marginLeft:"100px"}} className="btn-main mt-2">Details</button>
          </NavLink> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
