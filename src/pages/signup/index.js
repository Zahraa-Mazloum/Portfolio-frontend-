import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { FaMailBulk, FaUserLock, FaUserCircle } from 'react-icons/fa';
import { VscChromeClose ,VscCheck} from "react-icons/vsc";
import './signup.css';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
      success: false,
    };
  }
  componentDidMount() {
    document.title = "Sign up";
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;



    try {
      const res = await axios.post('http://localhost:5000/api/admin', { email, password });
      this.setState({ success: true });     
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { email, password, error, success } = this.state;
    return (
      <>

        <div className="container-login-signup">
          <form className='form-login-signup' onSubmit={this.handleSubmit}>
          {error && 
          
            <p className='msgs errorsignup'> 
                        <button  onClick={() => window.location.reload() } className='buttom'><VscChromeClose/></button>
<span className='msg'>
             Admin Already exist </span>
          
            </p>
          
}
            {success && 
            <p className='msgs succes'>
            <button  onClick={() => window.location.reload() } className='buttomsuccess'><VscCheck/></button>
Successful sign up!         <Link to='/login' className='loginpage'>click here to login</Link>

            </p>
            
}
            <div className="user">
              <FaUserCircle />
            </div>
            <label className="titlesign">Sign up</label>
            <div className="input-container">
              <input
                className="infoemail"
                type="email"
                name="email"
                value={email}
                placeholder="example@example.com"
                required
                onChange={this.handleInputChange}
              />
                <div className="iconsign">
                <FaMailBulk />
              </div>
            </div>
            <div className="input-container">
              <input
                className="infopass"
                type="password"
                name="password"
                value={password}
                placeholder="Enter a strong password"
                required
                onChange={this.handleInputChange}
              />
                <div className="iconpass">
                <FaUserLock />
              </div>
            </div>
            <button className="buttonsignup">
              <span className="txtsign">Sign Up</span>
            </button>
        
            <div className="loginsugg">Already have an account? <Link to='/login'><span className='linklogin'> Login </span></Link></div>
          </form>
        </div>
      </>
    );
  }
}
export default Signup;