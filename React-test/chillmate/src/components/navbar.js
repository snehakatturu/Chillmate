import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class Navbar extends React.Component {
  
    render() {
      return (
        <div className="navbar">
            <nav>
                <ul>
                    <li style={{ verticalAlign: 'super' }}><a href="login.html">Login</a></li>
                    <li style={{ verticalAlign: 'super' }}><a href="forum.html">Forum</a></li>
                    <li style={{ verticalAlign: 'super' }}><a href="about.html">About</a></li>
                    <li style={{ verticalAlign: 'super' }}><a href="resources.html">Resources</a></li>
                    <li style={{ verticalAlign: 'super' }}><a href="#" id="logout">Logout</a></li>
                </ul>
            </nav>
        </div>
      );
    }
}


