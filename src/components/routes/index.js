import React, { Component } from 'react'
import { Route, Routes} from 'react-router-dom';

import About from '../../pages/about';
import Changepass from '../../pages/changepass';
import Contact from '../../pages/contact';
import Dashboard from '../../pages/dashboard';
import Forgetpass from '../../pages/forgetpass';
import Home from '../../pages/home';
import Login from '../../pages/login';
import Project from '../../pages/project';
import Signup from '../../pages/signup';
import Skills from '../../pages/skills';

export class AllRoutes extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/changepass/:id/:token" element={<Changepass />}/>
            <Route path="/forgetpass" element={<Forgetpass />}/>
            <Route path="/dashboard" element={<Dashboard />}/>     
        </Routes>
      </div>
    )
  }
}

export default AllRoutes;