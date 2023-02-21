import React, { Component } from 'react'
import './project.css'
import Card from '../../components/card/card'
import Navbar from '../../components/nav'

const baseURL= "https://portfolio-backend-vert-tau.vercel.app/api/admin/"
export class Project extends Component {
  componentDidMount() {
    document.title = "Project";
  }
  render() {
    
    return (
<>   <Navbar />
     <Card />   </>
 
    )
  }
}

export default Project