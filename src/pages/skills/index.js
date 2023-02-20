import React, { Component } from 'react'
import './skills.css'
import hand1 from '../../img/hand1.png'
import hand2 from '../../img/hand2.png'
import hand3 from '../../img/hand3.png'
import hand4 from '../../img/hand4.png'
import hand5 from '../../img/hand5.png'
import {Link} from 'react-router-dom';
import Navbar from '../../components/nav'
import { FaArrowLeft, FaArrowRight,FaTimes} from 'react-icons/fa';

const skillsData = [
  {
    id:1,
    title:'TITLE1',
    description:'Lorem1 ipsum dolor sit amet consectetur, adipisicing elit. Magni esse nesciunt neque ratione. Exercitationem autem sit quod similique? Facilis quae error consectetur, similique a asperiores sint eos in provident dolor',   
    image: hand1
  },
  {
    id:2,
    title:'TITLE2',
    description:'Lorem2 ipsum dolor sit amet consectetur, adipisicing elit. Magni esse nesciunt neque ratione. Exercitationem autem sit quod similique? Facilis quae error consectetur, similique a asperiores sint eos in provident dolor',   
    image: hand2
  },
  {
    id:3,
    title:'TITLE3',
    description:'Lorem3 ipsum dolor sit amet consectetur, adipisicing elit. Magni esse nesciunt neque ratione. Exercitationem autem sit quod similique? Facilis quae error consectetur, similique a asperiores sint eos in provident dolor',   
    image: hand3
  },
  {
    id:4,
    title:'TITLE4',
    description:'Lorem4 ipsum dolor sit amet consectetur, adipisicing elit. Magni esse nesciunt neque ratione. Exercitationem autem sit quod similique? Facilis quae error consectetur, similique a asperiores sint eos in provident dolor',   
    image: hand4
  },
  {
    id:5,
    title:'TITLE5',
    description:'Lorem5 ipsum dolor sit amet consectetur, adipisicing elit. Magni esse nesciunt neque ratione. Exercitationem autem sit quod similique? Facilis quae error consectetur, similique a asperiores sint eos in provident dolor',   
    image: hand5
  },
]


export class Skills extends Component {
  state = {
    currentIndex: 0
  };
  componentDidMount() {
    document.title = "Skills";
  }
  handlePrevious = () => {
    this.setState((prevState) => {
      let newIndex = prevState.currentIndex - 1;
      if (newIndex < 0) {
        newIndex = skillsData.length - 1;
      }
      return { currentIndex: newIndex };
    });
  };

  handleNext = () => {
    this.setState((prevState) => {
      let newIndex = prevState.currentIndex + 1;
      if (newIndex >= skillsData.length) {
        newIndex = 0;
      }
      return { currentIndex: newIndex };
    });
  };
  render() {
    const { currentIndex } = this.state;
    const { title, description, image } = skillsData[currentIndex];
    return (
      <>
      <Navbar />

      <div className='Landing-animated-page'>
              <div className='skill-package-holder'>
        <img src={image} alt="" className='handImg'/>
        <div className='skills-content'>
        <Link className='next-previous-btn' to="/"><FaTimes /></Link>
        <h1 className='skill-title'>{title}</h1>
            <p className='skill-desctiption'>
            {description}
            </p>
              <div className='arrow-button-group'>
                <button className='next-previous-btn' onClick={this.handlePrevious} ><FaArrowLeft /></button>
                <button className='next-previous-btn' onClick={this.handleNext} ><FaArrowRight /></button>
              </div> 
          </div>
        </div>           
      </div>
      </>
    )
  }
}

export default Skills