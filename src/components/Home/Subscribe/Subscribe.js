import React from 'react';
import { NavLink } from 'react-router-dom';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div>
            <div className="subscribe-area">
               <div className="container">
                   <div className="row">
                       <div className="col-xl-6 offset-xl-3 col-lg-8 offset-xl-2 col-md-8 offset-md-2 col-12">
                           <div className="Subscribe-content text-center">
                                <h3>Subscribe To Our Laundry</h3>
                                <h6>Do Not Miss Anything From Online Laundry System</h6>
                               <form action="" className="subscribe-form">
                                    <input type="email"  name="subscribe" placeholder="Enter Your E-mail" className="my-3"/>
                                    <button type="submit">Subscribe</button>
                                </form> 
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Subscribe;