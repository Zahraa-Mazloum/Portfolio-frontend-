  import React, { Component } from "react";
import axios from 'axios';


class Navbardash extends Component {
  handleLogout = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    {
      const currentValue = localStorage.getItem('authenticated');
      const newValue = currentValue === 'true' ? 'false' : 'true';
      localStorage.setItem('authenticated', newValue);
        localStorage.removeItem("token");
        console.log(`Successfully logged out`);
        window.location.href = '/login';

    } 
  }



  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img
            src="https://www.seekpng.com/png/detail/111-1112824_picture-my-portfolio-logo-png.png"
            alt="logo"
          />
        </div>
        <div className="navButtons">
          <button className="logbutton"  onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Navbardash;
