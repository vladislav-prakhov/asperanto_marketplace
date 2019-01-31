import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import { Goods } from '../Pages/Goods.js';
import { Category } from '../Pages/Category.js';
import { Home } from '../Pages/Home.js';
import '../css/main.css';

export function Main() {
    return (
        <Switch>
            <main className="main">
                <Route exact path='/' component={Home} />
                <Route path='/base.html' component={Home} />
                <Route path='/goods' component={Goods} />
                <Route path='/category' component={Category} />
            </main>
        </Switch>
    );
}