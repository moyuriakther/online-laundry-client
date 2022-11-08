import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../media/logo.png'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconContext } from 'react-icons';
import './Footer.css';
import sslCommerce from '../../../media/ssl-commerce.png';

const Footer = () => {
    return (
       <div>
            <div className = "footer mt-0 py-4 text-white">
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-6 col-xl-4 col-sm-12 footer-logo">
                        <NavLink to = "/home">
                        <img style={{ height:"80px"}} src={logo} alt="logo"/> <h6>Online Laundry Service</h6>
                        </NavLink>
                        <p>Online Laundry is an on-demand web application providing the finest hassle-free and affordable laundry and dry-cleaning service in Dhaka. POWERED BY ONLINE LAUNDRY, We ensure a smooth journey right from placing your order to delivery</p>
                    </div>
                    <div className = "col-md-3 col-xl-4 col-sm-12 d-flex align-center-center justify-content-center py-2 mb-2">
                        <div className = "useful-links">
                            <h6>Usefull Links</h6>
                            <NavLink className="menu" to="/home">Home</NavLink> <br />
                            <NavLink className="menu" to="/aboutUs">About Us</NavLink> <br/>
                            <NavLink className="menu" to="/faq">FAQ</NavLink>   <br/>
                            <NavLink className="menu" to="/terms">Terms And Conditions</NavLink> <br />
                            <NavLink className="menu" to="/privacy">Privacy Policy</NavLink>
                       
                            <IconContext.Provider value={{className:"footer-Icons"}}>                           
                            <ul>
                                <li><a href="https://web.facebook.com/Online-Laundry-Service-102566725617011" target="_blank"><FaFacebook/></a></li>
                                <li><a href="https://github.com/" target="_blank"> <FaGithub/></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank"><FaLinkedin/></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><FaTwitter/></a></li>
                                <li><a href="https://www.youtube.com/" target="_blank"><FaYoutube/></a></li>
                            </ul>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className = "col-md-3 col-xl-4 col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
                        <div>
                           <img style={{width:"100%"}} src={sslCommerce} alt="sslCommerce"/>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <div className="footer-copyright d-flex justify-content-center align-items-center">
            <p>Copyright 2021 © Online Laundry Service. All Rights Reserved.</p>
        </div>
    </div>
    );
};

export default Footer;