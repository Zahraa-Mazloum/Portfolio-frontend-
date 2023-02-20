import React, { Component } from 'react'
import axios from 'axios';
import './forgetpass.css'
export class Forgetpass extends Component {
  state = {
    email: '',
    message: ''
  }

  handleInputChange = e => {
    this.setState({
      email: e.target.value
    });
  }
  componentDidMount() {
    document.title = "Forgot password";
  }
  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.email)

    try {
      const res = await axios.post('http://localhost:5000/api/admin/forgotPassword', { email: this.state.email });
      this.setState({
        message: res.data
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="container-login-signup">
      <form onSubmit={this.handleSubmit}>
      {this.state.message && <p className='msgpass'>{this.state.message}</p>}
      <label className="emailreq">Enter your Email</label>

        <input type="email" 
        placeholder="Enter your email"
        className='emailadmin' 
        value={this.state.email} 
        onChange={this.handleInputChange} required /><br /><br />
        <button type="submit" className='reset'>Reset</button>
      </form>
   
      </div>
    );
  }
}

export default Forgetpass