import React from "react";
import "../style.css"
const InputArea=({label,placeholder})=>
{
    return (
    <React.Fragment>
    <label><h2>{label}</h2></label>
    <input type="text" class="form-control border_input" placeholder={placeholder}></input>
   </React.Fragment>
    )
}


export default InputArea;