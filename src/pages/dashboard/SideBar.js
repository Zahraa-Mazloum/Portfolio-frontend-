import React, { Component } from "react";
import "./sidebar.css";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SideBar extends Component {
  
  render() {
    return (
      <div className="sidebar">
        <div className="profile">
          <img
            src="https://us.123rf.com/450wm/bsd555/bsd5551801/bsd555180100446/bsd555180100446.jpg?ver=6"
            alt="avatar"
          />
          <h3>ADMIN</h3>
        </div>
        <ul> 
          <li>
            <FontAwesomeIcon icon={faImage} /> PROJECT
          </li>
          {/* <li> */}
          {/* <FontAwesomeIcon icon={faImage} /> Add Project
          </li>
          <li>
            <FontAwesomeIcon icon={faGears} /> Category
          </li> */}
          
        </ul>
      </div>
    );
  }
}

export default SideBar;
