import React, { Component } from "react";
import "./css/home.css";

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="main-home">
                <a><h1>Категории</h1></a>
            </div>
        );
    }
}