import React, { Component } from "react";
import "./css/subproject.css";
import "./css/general.css";
import axios from "axios";
import {Link} from "react-router-dom";

export class Subproject extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="content">
                <div className="subproject-heading">
                    <div className="container">
                        <div className="row subproject-heading-row">
                            <div className="col subproject-heading-col">
                                <div className="subproject-heading-box">
                                    <div className="subproject-heading-breadcrumbs-box">
                                        <div className="subproject-heading-breadcrumbs-box-item">
                                            <a href="#">Проекты</a>
                                        </div>
                                        <div className="subproject-heading-breadcrumbs-box-item">
                                            <span>&gt;</span>
                                        </div>
                                        <div className="subproject-heading-breadcrumbs-box-item">
                                            <a href="#">Закупки на
                                            Ямал</a>
                                        </div>
                                        <div className="subproject-heading-breadcrumbs-box-item">
                                            <span>&gt;</span>
                                        </div>
                                        <div className="subproject-heading-breadcrumbs-box-item">
                                            <a href="#">Закупки Камаз</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col subproject-conversation-col">
                                <div className="subproject-conversations-box">
                                    <a href="#">
                                        <div className="subproject-one-conversation-box">
                                            <div className="subproject-one-conversation-box-status"/>
                                            <div className="subproject-one-conversation-box-conv-pic">
                                                <img src="https://i.ibb.co/JrJvzH9/478.jpg"/>
                                            </div>
                                            <div className="subproject-one-conversation-box-content">
                                                <h3>Ямал Петросервис</h3>
                                                <p>Спасибо, что воспользовались услугами нашей компании. Рады помочь</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="subproject-one-conversation-box">
                                            <div className="subproject-one-conversation-box-status yellow-status"/>
                                            <div className="subproject-one-conversation-box-conv-pic">
                                                <img src="https://i.ibb.co/m5RLt2T/Gazpromneft.png"/>
                                            </div>
                                            <div className="subproject-one-conversation-box-content">
                                                <h3>Газпром нефть. Ямал</h3>
                                                <p>Добрый день. Готовы ли инициировать сделку по ранним
                                                    договоренностям?</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="subproject-one-conversation-box">
                                            <div className="subproject-one-conversation-box-status yellow-status"/>
                                            <div className="subproject-one-conversation-box-conv-pic">
                                                <img src="https://i.ibb.co/fxrtLt6/saturn.png"/>
                                            </div>
                                            <div className="subproject-one-conversation-box-content">
                                                <h3>ОДК Сатурн</h3>
                                                <p>Хорошо, ждем</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}