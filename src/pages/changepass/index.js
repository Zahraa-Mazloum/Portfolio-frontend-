import React, { Component } from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom';

import './changepass.css'
export class Changepass extends Component {
  state = {
    password: '',
    message: ''
  }

  handleChange = event => {
    this.setState({ password: event.target.value });
  }
  componentDidMount() {
    document.title = "Change Password";
  }
  handleSubmit = async event => {
    event.preventDefault();
    const currentUrl = window.location.href;
    console.log(currentUrl);
    var urlArray = currentUrl.split("/");
    var id = urlArray[4];
    var token = urlArray[5];

   console.log(id);
   console.log(token);
    
    const { password } = this.state;

    try {
      const response = await axios.put(`http://localhost:5000/api/admin/resetPassword/${id}/${token}`, { password });

      this.setState({ message: response.data.message });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
      <div className="container-login-signup">
      <form onSubmit={this.handleSubmit}>
        {this.state.message && <p className='updatedsucc'>{this.state.message} <br/><span>
        Go back to <Link to='/login'>Login</Link></span></p>}
        <label className="emailreq">Enter new password</label>

        <input type="password" 
        className='newpasswordd' 
        value={this.state.password} 
        onChange={this.handleChange} 
        placeholder="new password"/>
        <button type="submit" className='updatepassword'>Change Password</button>
      </form>  
      </div>
      </>

    );
  }
}
export default Changepass