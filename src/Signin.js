import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import InputArea from "./components/inputArea";
import SubmitButton from "./components/submitButton";
import {Link } from "react-router-dom";
const Signin=()=>
{
    return (
        <React.Fragment>
        <div className="container background mt-3">
       <h1 className="pt-5 text-center">Sign In</h1>
       <InputArea  label="Username:" placeholder="Enter Username"/>
       <InputArea label="Password:" placeholder="Enter password"/>
       <SubmitButton submitType="Signin"/>
       <div className="link_info">
       <Link to="/" >Signup</Link>
       </div>
        </div>
        </React.Fragment>
    )
}

export default Signin;