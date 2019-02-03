import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="main-home">
                <Link to="/category"><h1>Категории</h1></Link>
            </div>
        );
    }
}