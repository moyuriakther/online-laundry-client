import React from "react";
import { NavLink } from "react-router-dom";
import './Register.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class registeor extends React.Component {
 constructor() {
   super();
   this.state = {
     fullName: "",
     emailAddress: "",
     password: "",
     passwordConfirmation: "",
     firstNameError: "",
     emailAddressError: "",
     passwordError: "",
     passwordConfirmationError: "",
     isFormSubmitted: false
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleBlur = this.handleBlur.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.validateFullName = this.validateFullName.bind(this);
   this.validateEmailAddress = this.validateEmailAddress.bind(this);
   this.validatePassword = this.validatePassword.bind(this);
   this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
     this
   );
   this.validateField = this.validateField.bind(this);
 }
 handleChange(event) {
   const { name, value } = event.target;
   this.setState({
     [name]: value
   });
   return;
 }
 handleBlur(event) {
   const { name } = event.target;
   this.validateField(name);
   return;
 }
 handleSubmit(event) {
   event.preventDefault();
   let formFields = [
     "fullName",
     "emailAddress",
     "password",
     "passwordConfirmation"
   ];
   let isValid = true;
   formFields.forEach(field => {
     isValid = this.validateField(field) && isValid;
   });
   if (isValid) this.setState({ isFormSubmitted: true });
   else this.setState({ isFormSubmitted: false });
   return this.state.isFormSubmitted;
 }
 validateField(name) {
   let isValid = false;
    if (name === "fullName") isValid = this.validateFullName();
   else if (name === "emailAddress") isValid = this.validateEmailAddress();
   else if (name === "password") isValid = this.validatePassword();
   else if (name === "passwordConfirmation")
     isValid = this.validatePasswordConfirmation();
   return isValid;
 }
 validateFullName() {
   let fullNameError = "";
   const value = this.state.fullName;
   if (value.trim() === "") fullNameError = "Full Name is required";
   this.setState({
     fullNameError
   });
   return fullNameError === "";
 }
 validateEmailAddress() {
   let emailAddressError = "";
   const value = this.state.emailAddress;
   if (value.trim === "") emailAddressError = "Email Address is required";
   else if (!emailValidator.test(value))
     emailAddressError = "Email is not valid";
   this.setState({
     emailAddressError
   });
   return emailAddressError === "";
 }
 validatePassword() {
   let passwordError = "";
   const value = this.state.password;
   if (value.trim === "") passwordError = "Password is required";
   else if (!passwordValidator.test(value))
     passwordError =
       "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
   this.setState({
     passwordError
   });
   return passwordError === "";
 }
 validatePasswordConfirmation() {
   let passwordConfirmationError = "";
   if (this.state.password !== this.state.passwordConfirmation)
     passwordConfirmationError = "Password does not match Confirmation";
   this.setState({
     passwordConfirmationError
   });
   return passwordConfirmationError === "";
 }
 render() {
   return (
    <div className ="container my-5 d-flex justify-content-center">
     <div className="register" >
       <h3>SignUp Form</h3>
       {this.state.isFormSubmitted ? (
         <div className="details">
           <h3>Thanks for signing up, find your details below:</h3>
           <div>Full Name: {this.state.lastName}</div>
           <div>Email Address: {this.state.emailAddress}</div>
         </div>
       ) : (
         <div style={{textAlign:""}}>
         <form onSubmit={this.handleSubmit} >
           <input
             type="text"
             placeholder="Enter Your Full Name"
             name="fullName"
             value={this.state.fullName}
             onChange={this.handleChange}
             onBlur={this.handleBlur}
             autoComplete="off"
           />
           <br />
           {this.state.fullNameError && (
             <div className="errorMsg">{this.state.fullNameError}</div>
           )}
           <input
             type="email"
             placeholder="Enter Your Email Address"
             name="emailAddress"
             value={this.state.emailAddress}
             onChange={this.handleChange}
             onBlur={this.handleBlur}
             autoComplete="off"
           />
           <br />
           {this.state.emailAddressError && (
             <div className="errorMsg">{this.state.emailAddressError}</div>
           )}
           <input
             type="password"
             placeholder="Enter Your Password"
             name="password"
             value={this.state.password}
             onChange={this.handleChange}
             onBlur={this.handleBlur}
             autoComplete="off"
           />
           <br />
           {this.state.passwordError && (
             <div className="errorMsg">{this.state.passwordError}</div>
           )}
           <input
             type="password"
             placeholder="Confirm Password"
             name="passwordConfirmation"
             value={this.state.passwordConfirmation}
             onChange={this.handleChange}
             onBlur={this.handleBlur}
             autoComplete="off"
           />
           <br />
           {this.state.passwordConfirmationError && (
             <div className="errorMsg">
               {this.state.passwordConfirmationError}
             </div>
           )}
           <button className="btn-main register-btn">Signup</button>
           <NavLink to="/login">
                   <button className="btn-main login-btn">Login</button>
            </NavLink>
            <button className="btn-main social-google-login"> <span> <FcGoogle/> </span> Continue With Google</button> <br/>
            <button className="btn-main social-fb-login"><span><FaFacebookSquare/></span>  Continue With Facebook</button>
         </form>
         </div>
       )}
     </div>
    </div>
   );
 }
}
export default registeor;