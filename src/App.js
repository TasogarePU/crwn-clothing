import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header-component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
