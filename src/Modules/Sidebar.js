import React, { Component } from "react";
import './css/sidebar.css';
import {Link} from "react-router-dom";

export class Sidebar extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <section className={"sidebar"}>
                <div className={"sidebar-header"}>
                    <button className="" type="button" onClick={ this.props.sidebarUntoggle }>
                        <i className="fas fa-bars nav-icons"/>
                    </button>

                    <Link to="/" >Asperanto</Link>
                </div>
            </section>


        )
    }
}