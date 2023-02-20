import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
        <nav>
          <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="skills">Skills</a>
            </li>
            <li>
              <a href="project">Projects</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </nav>
    );
  }
}
export default Navbar;

