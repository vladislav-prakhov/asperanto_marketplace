import React, { Component } from "react";
import { Goods } from '../Pages/Goods.js';
import { Category } from '../Pages/Category.js';
import { Home } from '../Pages/Home.js';
import { Search } from '../Components/Search';
import './css/main.css';


export class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let search;

        if (this.props.state.searchBox.activated)
            search = <Search state={this.props.state} getAddInfo={this.props.getAddInfo}/>;
        else
            search = null;

        return (
            <main className="main">
                {search}

                <Home/>
            </main>
        )};
}