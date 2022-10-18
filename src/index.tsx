
import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "./views/Index.js";
import Landing from "./views/examples/Landing.js";
import Login from "./views/examples/Login.js";
import Profile from "./views/examples/Profile.js";
import Register from "./views/examples/Register.js";
import Error from "./pages/error";
import Products from "@/pages/Layout/Product/index";
import Profolio from "@/pages/Layout/Protfolio/index";
import Details  from "@/pages/Layout/Product/components/Details";



export default function Indexin(){

  return (
    <>

  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />

      <Route
        path="/landing-page"
        exact
        render={(props) => <Landing {...props} />}
      />
      <Route
        path="/login-page"
        exact
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={(props) => <Register {...props} />}
      />


      <Route
        path="/products"
        exact
        render={(props) => <Products {...props} />}
      />
      <Route
        path="/protfolio"
        exact
        render={(props) => <Profolio {...props} />}
      />

      <Route
        path="/details"
        exact
        render={(props) => <Details {...props} />}
      />
  



      <Route
        path="/*"
        exact
        render={(props) => <Error {...props} />}
      />





      {/* <Redirect to="/" /> */}
      
    </Switch>
  </BrowserRouter>
  
  </>

  )
}