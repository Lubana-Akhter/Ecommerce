import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaFacebookSquare, FaYoutube, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";

import { Link } from "react-router-dom";
// import Logo from '../../asset/images/vpmlogo.png';
import Logo from '../assets/images/ecomlogo.jpg';

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='before-footer-part'>
                    <Container>
                        <Row>
                            <Col lg={12} md={6} sm={12}>
                                <h2 className='fs-3 mt-2 text-light fw-bold text-center'>ShopSmart: Your Trusted Partner for Hassle-Free Online Shopping</h2>
                            </Col>
                           
                        </Row>
                    </Container>
                </Container>
                <Container fluid={true} className="footerSection " >



                    <div>
                        <Container>
                            <Row>
                                <Col lg={3} md={6} sm={12} className="mt-3 ">
                                    <Link to="/"><img className="logoImageFooter" title="VPM" src={Logo} /></Link>
                                    <div>
                                        <p style={{ color: "white" }}><span><strong>Let’s Stay in Touch.</strong></span></p>
                                        <div className="footerLinkDiv mt-3">
                                            <a href="#" className="footerSocialLink"><FaLinkedin className='footerfontAwsome' /></a>
                                            <a href="#"  className='footerSocialLink' ><FaFacebookSquare className='footerfontAwsome' /></a><br />
                                            <a href="#"  className='footerSocialLink' ><FaYoutube className='footerfontAwsome' /></a>

                                        </div>
                                        <p className="fs-5 mt-3" style={{ color: '#DBDCDF' }}><FaEnvelope /> <strong>info@shopsmart.com</strong> </p>
                                       
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12} className="mt-5">
                                    <h2 class="FooterTitle"><span>About</span></h2>
                                    <div><ul className='footerUl'>
                                        <Link to="/" className='aColor'><li><FaCheck className="iconBullet" /> About us</li></Link>
                                        <Link to="/" className='aColor'><li> <FaCheck className="iconBullet" /> Privacy</li></Link>
                                        <Link to="/" className='aColor'><li> <FaCheck className="iconBullet" /> Terms and Condition</li></Link>
                                        <Link to="/" className='aColor'><li> <FaCheck className="iconBullet" /> Why Shop With Us</li></Link>

                                    </ul>
                                    </div>
                                </Col>

                                <Col lg={3} md={6} sm={12} className="mt-5 text-justify">
                                    <h2 class="FooterTitle"><span>GENERAL</span></h2>
                                    <div>
                                        <ul className='footerUl'>
                                            <Link to="/" className='aColor'> <li><FaCheck className="iconBullet" /> Payment</li></Link>
                                            <Link to="/" className='aColor'> <li><FaCheck className="iconBullet" /> Shipping</li></Link>
                                            <Link to="/" className='aColor'> <li><FaCheck className="iconBullet" /> Return</li></Link>
                                            <Link to="/" className='aColor'> <li><FaCheck className="iconBullet" /> Support</li></Link>

                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={12} className="  mt-5">
                                    <div><h2 class="FooterTitle">Office address</h2>
                                        <ul className='footerUl'>
                                            <li className='liOfficeAddress'>  <p>Dhaka,
                                                BANGLADESH</p></li>
                                            <hr className="hrFooter" style={{ bordertop: 'dotted 2px' }} />


                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container fluid={true} className="text-center copyrightSec">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <p >
                                Copyright &copy; 2023 ShopSmart. All rights reserved.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
