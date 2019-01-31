import React, { Component } from "react";
import { Link } from "react-router-dom";
import "..\\css\\index.css";

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Link to="/category">Категории</Link>
            </div>
        );
    }
}