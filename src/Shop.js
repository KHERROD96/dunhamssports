import React, { Component } from "react";
import walkingboots from './images/walkingboots.png';
 
class Shop extends Component {
  render() {
    return (
      <div>
        <h2>Departments</h2>
        <br />
          <li><a href="">Footwear</a></li>
          <ul><img src={walkingboots} class="image2"/></ul>
          <ul>Walking Boots</ul>
          <ul>Price: $39.95</ul>
          <ul><button>Add to Cart</button></ul>
          <li><a href="">Apparel</a></li>
          <li><a href="">Sports</a></li>
          <li><a href="">Men</a></li>
          <li><a href="">Women</a></li>
          <li><a href="">Kids</a></li>
          <li><a href="">Fan Shop</a></li>
          <li><a href="">Outdoors/Recreational</a></li>
          <li><a href="">Accessories</a></li>
          <li><a href="">Deals</a></li>
          <li><a href="">Clearance</a></li>
        
      </div>
    );
  }
}
 
export default Shop;