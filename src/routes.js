import { Switch, Route } from "react-router-dom";
import Welcome from "./firstpage";
import Form from "./form";
import Display from "./display";

import React from "react";

export const myRoute = ( <
    Switch >
    <
    Route path = "/"
    exact component = { Welcome }
    /> <
    Route path = "/form"
    exact component = { Form }
    /> <
    Route path = "/display"
    component = { Display }
    /> <
    /Switch>
);
export default myRoute;