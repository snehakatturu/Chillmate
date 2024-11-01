import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import "./ChillMateLogo.png"
import Navbar from "./navbar";
import { Link } from "react-router-dom";

export default class Register extends React.Component {

    render() {
      return (
        <body className="register">
                <nav>
                    <ul>
                    <li>
                        <Link to="/">
                        <img src={require('./ChillMateLogo.png')} alt="Logo" width="50" height="50" />
                        </Link>
                    </li>
                    </ul>
                </nav>

        <div className="register-container">
            <h2>Register</h2>
            <form action="register.php" method="POST">
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required   
            />
            <span id="passwordError" className="error">
                Password must be at least 8 characters long and contain at least one uppercase letter.
            </span>
            <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm Password"
                required
            />
            <span id="confirmPasswordError" className="error">
                Passwords do not match.
            </span>
            <input
                type="number"
                name="SFSU id"
                placeholder="SFSU ID"
                required
            />
            <button type="submit"><a href="login.html">Create Account</a></button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
        </body>
      );
    }
}


