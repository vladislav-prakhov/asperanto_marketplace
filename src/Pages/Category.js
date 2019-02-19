import React from "react";
import { Suggestions } from './Suggestions';
import "./css/category-template.css";

export function Category() {
    return (
        <div className="main-categories">
            <div className="category">
                <div className="wrap-category">
                    <h1><span>Нефтегазовая промышленность</span></h1>
                </div>
            </div>

            <div className="navbar-products">
                <a className="link">
                    Бурение
                </a>
                <a className="link">
                    Георазведка
                </a>
                <a className="link">
                    Сервисные услуги
                </a>
                <a className="link">
                    Логистика
                </a>
            </div>

            <div className="category-products">
                <Suggestions shrinked={false} typeOfPage={'goods'}/>
            </div>
        </div>
    );
}