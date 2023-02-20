import React, { Component } from "react";
import "./about.css";
import overlay1 from "./overlay1-large.png";
import overlay2 from "./overlay2-large.png";
import overlay3 from "./overlay3-large.png";
import overlay4 from "./overlay4-large.png";
import overlay5 from "./overlay5-large.png";
import head from "./head.png";
import hand from "./hand.png";
import heart from "./heart.png";
import brain from "./brain.png";
import handoverlay from "./hand-overlay.png";
import heartoverlay from "./heart-overlay.png";
import brainoverlay from "./brain-overlay.png";
import Navbar from '../../components/nav'
export class About extends Component {
  componentDidMount() {
    document.title = "About";
  }
  render() {
    return (
      <>
      <Navbar />
      <section className="aboutpage">
        <div>
          <div className="heartimg">
          <a href="contact">

              <img className="heart" src={heart} alt="heart" />
              <img
                className="heartoverlay"
                src={heartoverlay}
                alt="heartoverlay"
              />
            </a>
          </div>
          <div className="brainimg">
            <a href="project">
              <img className="brain" src={brain} alt="brain" />
              <img
                className="brainoverlay"
                src={brainoverlay}
                alt="brainoverlay"
              />
            </a>
          </div>
          <div className="handimg">
          <a href="skills">

              <img className="hand" src={hand} alt="hand" />
              <img
                className="handoverlay"
                src={handoverlay}
                alt="handoverlay"
              />
            </a>
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default About;

{
  /* <div>
          <img src={head} alt="person head" />
          <button className="aboutbutton">explore</button>
        </div> */
}
{
  /* <div
          class="head-seg-overlays-css-animator"
        >
          <img
            class="h-s-overlay"
            src={overlay1}
          />
          <img
            class="h-s-overlay"
            src={overlay2}
          />
          <img
            class="h-s-overlay"
            src={overlay3}
          />
          <img
            class="h-s-overlay"
            src={overlay4}
          />
          <img
            class="h-s-overlay"
            src={overlay5}
          />
        </div>  */
}
