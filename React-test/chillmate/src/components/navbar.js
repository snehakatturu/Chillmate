import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import "./ChillMateLogo.png"
import Login from "./login";
import { Link } from "react-router-dom";

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
                     {/* Link is basically the same thing as <a> in html so don't need to worry about it too much */}
                    <Link to="/login">Login</Link>
                    <a href={'/login'}></a>
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


