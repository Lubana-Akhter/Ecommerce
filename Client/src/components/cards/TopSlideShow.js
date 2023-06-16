import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import p1 from '../../assets/images/slide1.jpg';
import p2 from '../../assets/images/slide2.jpg';
import p3 from '../../assets/images/slide3.jpg';


import { Link } from 'react-router-dom';

export default class ClientReview extends Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows:false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Fragment>
        <Container fluid={true} className="topSlideDiv mt-4 p-0">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <Carousel autoplay={true} infinite={true} >
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 " src={p1} />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 "
                    src={p2}
                    alt="Second slide"
                  />

                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img className="d-block w-100 " src={p3} />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
