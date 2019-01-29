import React, { Component} from "react";
import { hot } from "react-hot-loader";
import { Navbar } from './Navbar.js';
import { Footer } from './Footer.js';
import { Main } from './Main.js';


class App extends Component{
    render(){
        return (
            <div className="wrapper">
                <Navbar/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}




export default hot(module)(App);