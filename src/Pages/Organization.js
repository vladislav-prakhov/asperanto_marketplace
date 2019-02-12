import React, { Component } from 'react';
import './css/organization.css';

export class Organization extends Component {
    render() {
        return (
            <div className={ "main-organization" }>
                <nav className={"nav-organization"}>
                    <a href={"#"}>Описание</a>

                    <a href={"#"}>Товары</a>

                    <a href={"#"}>Контакты</a>
                </nav>

                <div className={"description-organization"}>
                    Хуемое
                </div>

                <div className={"quick-info-organization"}>
                    <div className={"quick-info-image"}/>

                </div>
            </div>
        )
    }
}