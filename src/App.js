import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import { Route, Switch} from "react-router-dom";
const App=()=>
{
    console.log("hiii");
    return (
        <React.Fragment>
            <Switch>
            <Route exact path="/" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
            </Switch>
          
           
        </React.Fragment>
    )
}
export default App;



