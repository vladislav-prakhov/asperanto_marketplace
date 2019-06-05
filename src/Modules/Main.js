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
import {Categories} from "../Pages/Categories";
import {Header} from "./Header";
import {Footer} from "./Footer";


export class Main extends Component {
    constructor(props) {
        super(props);
    }




    render() {
        console.log(this.props.organization);
        return (
            <main className="main">
                {/*{search}*/}
                {/*<Header/>*/}
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/categories'} component={Categories}/>
                    <Route exact path={'/organization/:orgUrlName'} component={Organization}/>
                    <Route path={'/suggestions'} component={Suggestions}/>
                    <Route exact path={'/auth'} component={Authentication}/>
                    <Route exact path={'/register'} component={Registration}/>
                    <Route exact path={'/products'} render={(props) => <Products {...props}
                                                     searchFieldValue={this.props.searchFieldValue} />}/>
                    <Route exact path={'/projects'} component={Projects}/>
                    <Route exact path={'/chat'} component={Conversation}/>
                    <Route exact path={'/subproject/:subprojectId'} component={Subproject}/>
                    {this.props.organization &&
                    <Route exact path={'/products/:productId'}
                        render={(props) => <ProductOrService {...props}
                        organization={this.props.organization} />}/>
                    }
                    {this.props.organization &&
                    <Route exact path={'/services/:serviceId'}
                        render={(props) => <ProductOrService {...props}
                        organization={this.props.organization} />}/>
                    }
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
                {/*<Footer/>*/}
            </main>
        )}
}