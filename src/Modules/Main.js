import React, { Component } from "react";
import {Link, Route, Switch} from "react-router-dom";
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

        if (this.props.searchBox.activated)
            search = <Search searchBox={this.props.searchBox} getAddInfo={this.props.getAddInfo}/>;
        else
            search = null;

        return (
            <Switch>
                <main className="main">
                    {search}
                    <Route exact path='/' component={Home} />
                    <Route path='/base.html' component={Home} />
                    <Route path='/goods' component={Goods} />
                    <Route path='/category' component={Category} />
                </main>
            </Switch>
        )};
}