import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about/">About Us</NavLink></li>
                    <li><NavLink to="/contact/">Contact Us</NavLink></li>
                    <li><NavLink to="/Courses/">Our Courses</NavLink></li>
                    <li><NavLink to="/community/">Join Our Community</NavLink></li>
                    <li><NavLink to="/Discussion/">Join Our Discussion forum</NavLink></li>

                </ul>
            </nav>
        );
    }
}
export default Navbar;