import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { FaMailBulk, FaUserLock, FaUserCircle } from 'react-icons/fa';
import { VscChromeClose} from "react-icons/vsc";
import './login.css';


class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    token: ''

  }
  componentDidMount() {
    document.title = "Login";
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;


 
  

    try {
      axios.post('http://localhost:5000/api/admin/login', { email, password })
        .then(response => {
          console.log(response.status) 
          if(response.status===200){
            const token = response.data.token;  
            this.setState({ token });
            localStorage.setItem('token', token);
            localStorage.setItem("authenticated", true);
            window.location.href = '/dashboard';
            
          }
        

        })
        .catch(error => {
          this.setState({ error: error.response.data.message });
        });
    } catch (error) {
      this.setState({ error: 'An unexpected error occurred. Please try again later.' });
    }
  };
  render() {
    const { email, password,error} = this.state;
    return (     <>
      <div className="container-login-signup">
        <form className='form-login-signup' onSubmit={this.handleSubmit}>
          {error && 
            <p className='msgs error'> 
              <button onClick={() => window.location.reload()} className='buttom'>
              <span className='xbutton'><VscChromeClose /></span>  
              </button>
              <span className='msg'>
                Invalid username or password
              </span>
            </p>
          }
          <div className="user">
            <FaUserCircle />
          </div>
          <label className="titlelogin">Login</label>
          <div className="input-container">
           
            <input
              className="infoemail"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              required
              onChange={this.handleChange}
              />
               <div className="iconemail">
              <FaMailBulk />
            </div>
          </div>
          <div className="input-container">
            <input
              className="infopass"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              required
              onChange={this.handleChange}
              />
  <div className="iconpass">
  <FaUserLock />
            </div>
          </div>
          <div><Link to='/forgetpass'><span className="forgetpasslink">Forgot Password?</span></Link></div>

          <button className="buttonlogin">
            <span className="txtlogin">Login </span>
          </button>
      
          <div className="signupsugg">Don't have an account? <Link to='/signup'><span className='linksignup'>Sign up</span></Link></div>
        </form>
      </div>
    </>
  );
}
}
export default Login;
