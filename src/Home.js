import React, { Component } from "react";
import homeImage from './images/homeImage.png';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Get in the game at Dunham's Sports, where our big names bring you in and our low prices bring you back!</h2>
    
        <p>Our motto at Dunham's Sports is <b>Big Names...Low Prices</b>. That is what we do everyday, give our customers the choice of the name brands that they want at the lowest prices possible. </p>
        
        <h2>What do we offer</h2>
        
        <p>Dunham's Sports offers a full line of traditional sporting goods and athletic equipment as well as a wide variety of active and casual sports apparel and footwear. Take advantage of our <b>FREE CURBSIDE</b> or <b>IN-STORE PICK-UP</b> and deals that you won't want to miss out on!  </p>
        
        <img src={homeImage} class="image1"/>
      </div>
    );
  }
}
 
export default Home;