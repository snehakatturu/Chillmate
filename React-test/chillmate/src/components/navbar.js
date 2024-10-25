import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import "./ChillMateLogo.png"
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {

                

    render() {
      return (
        <div>
          <body>
            <nav className="navbar">
              <ul>
                <li>
                  <Link to = "/">
                    <img src={require('./ChillMateLogo.png')} alt="Logo" width="50" height="50" />
                  </Link>
                </li>
                <li>
                  <Link to="/forum">Forum</Link>
                </li>
                <li>
                  <Link to="/chatbot">Chatbot</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                
                <li>
                     {/* Link is basically the same thing as <a> in html so don't need to worry about it too much */}
                    <Link to="/login">Login</Link>
                    <a href={'/login'}></a>
                </li>
              </ul>
            </nav>
          </body>
        </div>
      );
    }
}


