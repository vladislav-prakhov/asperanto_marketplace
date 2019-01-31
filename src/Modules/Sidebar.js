import React, { Component } from "react";
import '../css/sidebar.css';

export function Sidebarinit() {
    let body = document.getElementsByClassName('wrapper')[0];

    if(body !== undefined) {
        body.className = 'wrapper-sidebar-toggled';
    }
    else {
        body = document.getElementsByClassName('wrapper-sidebar-toggled')[0];

        body.className = 'wrapper';
    }
}

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">

            </div>
        )
    }
}