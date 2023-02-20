import React, { Component } from "react";
import "./contact.css";
import Navbar from '../../components/nav'
import videoSrc from "../../img/mail-unscreen.gif"
class Contact extends Component {
  componentDidMount() {
    document.title = "Contact";
  }
  render() {

    return (
      <>
      <Navbar />
      <section className="contactpage">
      
          <div className="videocomtact">
          <img src={videoSrc}  className="videocontact"/> 
          </div>
          <div className="contanierformcontact">
        <form action="https://formsubmit.co/zahraamazloum2001@gmail.com" method="POST" className="sendingemailform"> 

     <input type="text" id="name" placeholder="Enter your name" required className="nameuser"/>     <br /><br/>
<h1 className="contacttitle"> Get in touch </h1>
     <input
       type="email"
       id="email"
       placeholder="Enter your email"
       required
       className="emailuser"
     />
     <br /><br/>
     <input type="text" id="message" placeholder="message" 
     required className="subjectuser"/>
          <br /><br/>

     <button class="contactbutton" className="sendmsg">Send</button>
</form>  
</div>
  
             </section>
      </>
    );
  }
}

export default Contact;

