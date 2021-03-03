import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputArea from "./components/inputArea";
import SubmitButton from "./components/submitButton";
import {Link } from "react-router-dom";
const Signup=()=>
{
    return (
        <React.Fragment>
        <div className="container background mt-3">
       <h1 className="pt-5 text-center">Sign Up</h1>
       <InputArea  label="Username:" placeholder="Enter Username"/>
       <InputArea label="Email:" placeholder="Enter your Email"/>
       <InputArea label="Password:" placeholder="Enter password"/>
       <SubmitButton submitType="Signup"/>
       <div className="link_info">
       <Link to="/signin" >Signin</Link>
       </div>
       
        </div>
        </React.Fragment>
    )
}
export default Signup;