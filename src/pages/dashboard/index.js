import React, { Component } from 'react'
import './dashboard.css'
import MainDashboard from './MainDashboard'
import NavbarDash from './dashNavbar'




export class Dashboard extends Component {
  render() {
    return (<div className='dashBody'>
    <NavbarDash/>
    <MainDashboard />
    </div>
    )
  }
}

export default Dashboard