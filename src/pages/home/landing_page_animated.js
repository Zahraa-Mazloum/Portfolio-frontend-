

import React, { Component } from 'react'

import './home.css'
export class LandingPageTitle extends Component {
  render() {
    const {title,description} = this.props
    return (
      <>
        <h1 className='animated-text'>{title}</h1>
        <h4 className='description_landing_page'>{description}</h4> 
        </>
    )
  }
}

export default LandingPageTitle;
