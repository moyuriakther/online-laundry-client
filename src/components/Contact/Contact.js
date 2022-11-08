import React from 'react';
import { Form } from 'react-bootstrap';
import Map from "./Map"
import './Contact.css';
import { NavLink } from 'react-router-dom';
import { MdPhoneEnabled, MdEmail } from "react-icons/md";
import { IconContext } from 'react-icons';
import { FaMapMarkerAlt } from "react-icons/fa";
import ScrollArrow from '../Common/Scroll/ScrollArrow';

const Contact = () => {
    
    return (
       <div>
            <ScrollArrow/>
           <div className="breadcrumb-area">
               <div className="container">
                   <div className="row">
                       <div className="col-xl-12">
                           <div className="breadcrumb-content text-center">
                                {/* <h2>CONTACT US</h2> */}
                                <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href=""><NavLink to="/home">Home</NavLink></a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                                </nav>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="container">
           <div className="row my-5">
                <div className="col-md-6 col-sm-12 col-xs-12 col-xl-6 col-lg-6 address pl-4 p-4">
                    <h3>Our Address</h3>
                    <div className="mt-5">
                    <IconContext.Provider value={{color:"#c36341", size:"2rem"}}>
                        <p><FaMapMarkerAlt/>  <strong>Address: </strong>Panthapath, Dhaka-1215, Bangladesh</p>                    
                        <p><MdPhoneEnabled/>  +88 01794844364</p> 
                        <p>+88 01794844364</p>                  
                        <p><MdEmail/>  akthermoyuri@gmail.com</p>
                    </IconContext.Provider>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 col-xl-6 col-lg-6 p-2">
                <div className="d-flex justify-content-center form">                    
                    <Form  style={{width:'100%'}}>
                    <h3>Send Your Enquiry</h3>
                        <Form.Group controlId="formGroupName">
                            {/* <Form.Label> </Form.Label> */}
                            <Form.Control
                            style={{marginBottom:'5px', marginTop:'5px'}}
                            type="text"
                            placeholder="Enter Name"
                            name="name" 
                            required
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            {/* <Form.Label style={{color:'white'}}>Email Address</Form.Label> */}
                            <Form.Control
                            style={{marginBottom:'5px'}}
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupMessage">
                            {/* <Form.Label style={{color:'white'}}>Message</Form.Label> */}
                            <Form.Control
                            type="textarea"
                            placeholder="Message"
                            name="message"
                            as="textarea" rows={3}
                            required
                            />
                        </Form.Group>
                        <button style={{padding:"5px 30px"}} className="btn-main mt-2">Send</button>
                    </Form>                    
                </div>
            </div>
        </div>
    </div>
    <Map/>
</div>
    );
};

export default Contact;