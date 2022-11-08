import React from "react";
import { Card} from "react-bootstrap";

const LaundryService = ({ product , clickToAdd }) => {
  console.log(product)
  return (
    <div className="col-md-4 my-3">
      <Card>
        <Card.Img variant="top" src={product.image} style={{ MaxHeight: "8rem" }} />
        <Card.Body style={{ padding: "0px 0px 15px 0px", textAlign: "center" }}>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            ৳{product.Price}
          </Card.Text>
          <button onClick={() => clickToAdd(product)} className="btn-main px-5">Add To Cart</button>
        </Card.Body>
      </Card>
    </div> 
  );
};

export default LaundryService;
