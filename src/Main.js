import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Store from "./Store";
import Cart from "./Cart";



class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div className= "header">
          <h1>Dunham's Sports</h1>
          <h3>Big Names...Low Prices</h3>
        </div>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop By Department</NavLink></li>
            <li><NavLink to="/store">Find A Store</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
          </ul>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/store" component={Store}/>
            <Route path="/cart" component={Cart}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;