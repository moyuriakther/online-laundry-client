import React from 'react';
import { Carousel } from "react-bootstrap";
import './ClientReview.css';

const ClientReview = () => {
    return (
        <div className="d-flex justify-content-center">           
            <Carousel className="carousel" variant="dark">
      <Carousel.Item>
      <div className="image">
        <img
          className=""
          src="https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg"
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <div className="carousel-caption">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="image">
        <img
          className=""
          src="https://medias.unifrance.org/medias/65/199/116545/format_page/media.jpg"
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <div className="carousel-caption">
            <h5>Second slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image">
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg"
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <div className="carousel-caption">
            <h5>Third slide label</h5>
            <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default ClientReview;