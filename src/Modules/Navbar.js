import React from "react";
import { Link } from "react-router-dom";
import { Sidebarinit } from "./Sidebar";
import '../css/navbar.css'

export function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <button className="" type="button" onClick={ Sidebarinit }>
                    <i className="fas fa-bars nav-icons"></i>
                </button>

                <Link to="/" >
                    Asperanto
                </Link>
            </div>

            <div className="center">
                <form action="" method="get">
                    <input type="text" placeholder="Найти"></input>
                    <button type="button"><i className="fas fa-search nav-icons"></i></button>
                </form>
            </div>

            <div className="navbar-right">
                <a href="#">
                    <div className="circle-nav"></div>
                    <span className="nickname-nav">А.И. Гайдамака</span>
                </a>
            </div>

            <div className="categories">
                <a className="categories-all">Все категории</a>

                <a>Промышленность</a>

                <a>Категория 2</a>

                <a>Категория 3</a>

                <a>Категория 4</a>

                <a>Категория 5</a>
            </div>
        </div>
)}