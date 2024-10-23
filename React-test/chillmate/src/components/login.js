import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import "./ChillMateLogo.png"

export default class Login extends React.Component {

    render() {
      return (
        <body className="login">
            <nav>
                <ul>
                    <li>
                        <a href="home.html">
                        <img src={require('./ChillMateLogo.png')} alt="Logo" width="50" height="50" />
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="login-container">
                <h2>Login</h2>
                    <form>
                        <input type="text" placeholder="Username" name="username" required />
                        <input type="password" placeholder="Password" name="password" required />
                        <button type="submit"><a href="index.html">Login</a></button>
                    </form>
                <p>Don't have an account? <a href="register.html">Register here</a></p>
            </div>

            <script src="scripts.js"></script>
        </body>
      );
    }
}


