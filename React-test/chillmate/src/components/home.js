import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import "./ChillMateLogo.png"

export default class Home extends React.Component {

    render() {
      return (
        <div>
            <body>
                <div className="container" id="home">
                    <h1>ChillMate</h1>
                    <p>
                    Our stress management app is designed for San Francisco State University students and faculty, offering essential tools to combat stress: <br /><br />
            
                    <ul className="a">
                        <li>Chatbot Support: Get 24/7 personalized assistance and coping strategies.</li>
                        <li>Journal: Track your thoughts and emotions to enhance well-being.</li>
                        <li>Forum: Connect with peers for support and advice.</li>
                        <li>Resources: Access a library of articles and techniques on mindfulness and relaxation.</li>
                        <li>Task List: Stay organized and manage your responsibilities effectively.</li>
                    </ul>
            
                    <br />Join us in fostering a healthier academic environment! <br /><br />
                    </p>
                    <button><a href="register.html">Register Now!</a></button>
                </div>
            </body>
        </div>
      );
    }
}


