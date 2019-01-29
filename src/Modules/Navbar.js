import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar">
        <div className="navbar-left">
            <button className="collapsed" type="button" data-toggle="collapse" data-target="#leftBar">
                <i className="fas fa-bars nav-icons"></i>
            </button>

            <Link to="/" >
                Asperanto
            </Link>
        </div>

        <div className="search_width">
            <form action="" method="get">
                <input type="search" placeholder="Найти"></input>
                <button type="button"><i className="fas fa-search nav-icons"></i></button>
            </form>
        </div>

        <div className="navbar-right">
            <a href="#">
                <div className="circle-nav"></div>
                <span className="nickname-nav">А.И. Гайдамака</span>
            </a>
        </div>

    </div>
)}