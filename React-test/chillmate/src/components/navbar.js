import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import "./ChillMateLogo.png"

export default class Navbar extends React.Component {

    render() {
      return (
        <div>
          <body>
            <nav className="navbar">
              <ul>
                <li>
                  <a href="home.html">
                    <img src={require('./ChillMateLogo.png')} alt="Logo" width="50" height="50" />
                  </a>
                </li>
                <li>
                    <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="forum.html">Forum</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="resources.html">Resources</a>
                </li>
              </ul>
            </nav>
          </body>
        </div>
      );
    }
}


