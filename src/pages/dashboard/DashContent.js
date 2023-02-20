import React, { Component } from "react";
import Form from "./Form";
import Popup from "./PopUp";
import ProjectsTable from "./ProjectsTable";

class DashContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPop: false,
      dataFromChild: false
    };
  }
  componentDidMount() {
    document.title = "Dashboard";
  }

  handleChildClick = (Pop, data) => {
    // Update the state with the data from the child component
    this.setState({
      showPop: Pop,
      dataFromChild: data
    });
  };
  handleClosePopup = () => {
    this.setState({
      showPop: false,
      dataFromChild: {}
    });
  }
  render() {
        const authenticated = localStorage.getItem('authenticated');
        if(!authenticated){
          console.log('authenticated')
          window.location.href = '/login';

        }
        else{
    return (
      
      <div className="dashContent">
        <Form />
        <ProjectsTable showPopup={this.handleChildClick} />
        {this.state.showPop && <Popup data={this.state.dataFromChild} closePopup={this.handleChildClick} />}

      </div>
    );
  }
}}

export default DashContent;
