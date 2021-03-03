import React from "react";


const SubmitButton=({submitType})=>
{
    return (
        <React.Fragment>
    <div className="text-center">
   <button type="button " class="btn btn-success btn-lg button_info">{submitType}</button>
   </div>
        </React.Fragment>
    )
}


export default SubmitButton;