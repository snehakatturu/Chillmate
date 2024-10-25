import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import "./ChillMateLogo.png"
import Navbar from "./navbar";
import { Link } from "react-router-dom";

//don't forget to change the class name into something what the page is supposed to be
//for example if you want to create a forum page change the name from 'Home' to 'Forum'
export default class Resources extends React.Component {

    // example
    // put all the html code from the previous index to the return function
    // there will be some error since some html code does not fit React, so i recommend go to
    // chatgpt/ any ai to ask to change it to fit react code
    //also i think everything needs to be put in a div to work? i don't really know but just to make sure
    //put it in a div even if the div doesn't do anything
    render() {
      return (
        <div>
            <body>
                <Navbar />
                <div className="container" id="home">
                    <h1>Resources</h1>
                    
                </div>
            </body>
        </div>
      );
    }
}
