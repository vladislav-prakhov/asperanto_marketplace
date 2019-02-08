import React from "react";
import ReactDOM from "react-dom";
import App from "./Modules/App.js";
import "./base.css";

ReactDOM.render(<App/>, document.getElementById("root"));

if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef
}
