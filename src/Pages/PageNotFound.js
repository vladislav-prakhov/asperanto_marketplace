import React from "react";
// import { Suggestions } from './Suggestions';
import "./css/general.css";
import "./css/404page.css"
import {Link} from "react-router-dom";

export function PageNotFound() {
    return (
        <div className="content">
            <div className="container">
                <div className="row account-column-names">
                    <div className="col-xl-12 header-column">
                        <div className="body-header-block">
                            <div className="body-header-block-name">
                                <h2>404</h2>
                                <p className="body-under-header-name-text">Кажется, данной страницы не существует.
                                    Перейдите по <Link to={'/'}>ссылке</Link> на главную страницу</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}