import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
// import ProductPC from "./component/Main/Product/ProductPC/ProductPC";
// import ProductSP from "./component/Main/Product/ProductSP/ProductSP";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
import Login from "./component/Login/Login";
import HondaContainer from "./containers/HondaContainer";
import ToyotaContainer from "./containers/ToyotaContainer";
import CardContainer from "./containers/CardContainer";

import "./assets/sass/all.scss";
class App extends Component {
  render() {
    return (
      <Router>
        {/*------------Header-----------*/}
        <Header />
        {/*------------Header------------*/}

        <Switch>
          {/*------------Main------------*/}
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Main} />

          
          <Route path="/honda" component={HondaContainer} />
          <Route path="/toyota" component={ToyotaContainer} />
          

          {/*------------Main------------*/}
        </Switch>
          <CardContainer />
        {/*------------Footer------------*/}
        <Footer />
        {/*------------Footer------------*/}
      </Router>
    );
  }
}

export default App;
