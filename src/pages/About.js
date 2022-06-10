import React, { Component } from 'react';
import "./About.css";
import huaImage from "../assets/huaImage.PNG";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={huaImage} // Image goes here
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Hua Chen</div>
          <div className="brief_description">
            Hi, I'm Hua! I am a Junior studying Computer Science at Lehigh University!
          </div>
        </div>
      </div>
    </div>
  
      
    )
  }
}