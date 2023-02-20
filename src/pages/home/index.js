import React, { Component } from 'react'
import Button from '../../components/button'
import './home.css'
import LandingPageTitleAndDescription from './landing_page_animated'
 import '../../components/bullet/bullet.css'
 import Navbar from '../../components/nav'

class Home extends Component {
  state = {
    active: 'FristLanding',
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const activeComponents = ['FristLanding', 'SecondLanding', 'TirdLanding'];
      const currentIndex = activeComponents.indexOf(this.state.active);
      this.setState({ active: activeComponents[(currentIndex + 1) % activeComponents.length] });
    }, 5000);
      document.title = "Home";
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setActive = (active) => {
    clearInterval(this.interval);
    this.setState({ active });
  }

  render() {
    const { active } = this.state;

    return (
   <>
   <Navbar />
      <div className='Landing-animated-page'>
        <div className='Landing-page-content'>
       
          {active === "FristLanding" && <LandingPageTitleAndDescription title='HELLO! I AM ELIE' description='I AM A FULL-STACK SOFTWARE DEVELOPER CURRRENTLY WORKING AT BANK OF BEIRUT'/>}
          {active === "SecondLanding" && <LandingPageTitleAndDescription title='SEND ME HELLO!' description='CONTACT ME FROM HERE,I WILL BE GET BACK TO YOU WITHIN 48 HOURS'/>}
          {active === "TirdLanding" && <LandingPageTitleAndDescription title='EXPLORE MINDSET' description='MY INTRESTS AND MY FUTURE PLANS FOR JOINING WITH NEW INNOVATIVE MENTATILITES'/>}

          
           <Button />
           <div className='bullet-group'>
            <button onClick={() => this.setActive("FristLanding")} className='bullet-point' style={{backgroundColor: active === "FristLanding" ? 'white' : 'transparent'}}></button>
            <button onClick={() => this.setActive("SecondLanding")} className='bullet-point' style={{backgroundColor: active === "SecondLanding" ? 'white' : 'transparent'}}></button>
            <button  onClick={() => this.setActive("TirdLanding")} className='bullet-point' style={{backgroundColor: active === "TirdLanding" ? 'white' : 'transparent'}}></button>
           </div>
        </div>
      </div>
      </>
    )
  }
}

export default Home;








