import React, { Component } from "react";
import { Suggestions } from '../Pages/Suggestions';
import { Category } from '../Pages/Category.js';
import { Home } from '../Pages/Home.js';
import { Search } from '../Components/Search';
import { Organization } from '../Pages/Organization';
import './css/main.css';
import { Switch, Route } from "react-router-dom";
import { Authentication } from '../Pages/Auth';
import { Registration } from '../Pages/Register';
import { Products } from '../Pages/Products';
import {Projects} from "../Pages/Projects";
import {ProductOrService} from "../Pages/ProductOrService";
import {Subproject} from "../Pages/Subproject";
import {PageNotFound} from "../Pages/PageNotFound";
import {Conversation} from "../Pages/Conversation";


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

                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/categories'} component={Category}/>
                    <Route exact path={'/organization/:orgUrlName'} component={Organization}/>
                    <Route path={'/suggestions'} component={Suggestions}/>
                    <Route exact path={'/auth'} component={Authentication}/>
                    <Route exact path={'/register'} component={Registration}/>
                    <Route exact path={'/products'} component={Products}/>
                    <Route exact path={'/projects'} component={Projects}/>
                    <Route exact path={'/chat'} component={Conversation}/>
                    <Route exact path={'/subproject'} component={Subproject}/>
                    <Route exact path={'/products/:productId'} component={ProductOrService}/>
                    <Route exact path={'/services/:serviceId'} component={ProductOrService}/>
                    {/*<Route path={'/developments/:developmentId'} component={ProductOrService}/>*/}



                    {/*Category Routes*/}
                    <Route path={'/categories/mining'} component={Category}/>
                    <Route path={'/categories/oil-gas'} component={Category}/>
                    <Route path={'/categories/metallurgy'} component={Category}/>
                    <Route path={'/categories/agriculture'} component={Category}/>
                    <Route path={'/categories/aviation'} component={Category}/>
                    <Route path={'/categories/space-industry'} component={Category}/>


                    <Route path='*' component={PageNotFound}/>

                </Switch>

            </main>
        )}
}