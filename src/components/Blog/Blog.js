import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = (props) => {  
    // const {name, image} = props.blogInfo;
    console.log(props);  
    return (
        <div className="col-lg-4 my-2">
        <Card>
          <Card.Body >
            {/* <Card.Title style={{fontSize:"16px"}} className="d-flex justify-content-center">{name}</Card.Title>
            <Card.Img variant="top" style={{ height: "200px", width: "100%", margin: "5px"}} src={image} /> <br/> */}
          </Card.Body>
        </Card>
      </div>
    );
};

export default Blog;