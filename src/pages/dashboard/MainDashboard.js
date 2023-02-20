
import React, { Component } from "react";
import DashContent from "./DashContent";
import SideBar from "./SideBar";
import "./dashContent.css";

class MainDashboard extends Component {
  state = {
    page: "projects"
   };
  render() {
    return (
      <div className="mainDashboard">
        <SideBar page={this.state.page}/>
        <DashContent page={this.state.page}/>
      </div>
    );
  }
}

export default MainDashboard;
