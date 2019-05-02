import React, { Component } from "react";
import "./css/subproject.css";
import "./css/general.css";
import "./css/conversations.css"
import axios from "axios";
import {Link} from "react-router-dom";

export class Conversation extends Component {
    constructor (props) {
        super(props);

        this.state = {
            textMessageValue: "",
            errors: {},
        };

        this.handleTextMessageValueChange = this.handleTextMessageValueChange.bind(this);
        this.onSubmit = this.onSubmit(this);

    }

    handleTextMessageValueChange(event) {
        this.setState({textMessageValue: event.target.value});
    }
    onSubmit(e) {
        // e.preventDefault();

    }

    render () {
        return (
            <div className="conversation-messages-body">
                <div className="conversation-heading">
                    <div className="container">
                        <div className="row subproject-heading-row">
                            <div className="col-lg-10 m-auto">
                                <div className="subproject-heading-box">
                                    <div className="conversation-header-breadcrumbs-box">
                                        <div className="conversation-header-breadcrumbs-box-item"><a
                                            href="#">Проекты</a></div>
                                        <div className="conversation-header-breadcrumbs-box-item"><span>&gt;</span>
                                        </div>
                                        <div className="conversation-header-breadcrumbs-box-item"><a href="#">Общее -
                                            Поставщики продуктов</a></div>
                                    </div>
                                </div>
                                <div className="conversations-header-org-block">
                                    <div className="conversations-header-org-block-pic">
                                        <img src="https://www.roscosmos.ru/media/files/identity/roscosmos-logo-main.png"/>
                                    </div>
                                    <div className="conversations-header-org-block-info"><span>Акционерное общество Роскосмос</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-8 conversation-messages-col m-auto">
                                <div className="conversation-box">
                                    <div className="conversation-message-box-block">
                                        <a href="#">
                                            <div className="conversation-message-box">
                                                <div className="conversation-message-box-content">
                                                    <p>Здравствуйте. Нам необходимы ракеты протон-м для запуска
                                                        новейшего поколения спутников.&nbsp;Нам необходимы ракеты
                                                        протон-м для запуска новейшего поколения спутников.&nbsp;Нам
                                                        необходимы ракеты протон-м для
                                                        запуска новейшего поколения спутников</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="conversation-message-box-block">
                                        <a href="#">
                                            <div className="conversation-message-box">
                                                <div className="conversation-message-box-content">
                                                    <p>Как можно скорее</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="conversation-message-box-block">
                                        <a href="#">
                                            <div className="conversation-message-box your-message">
                                                <div className="conversation-message-box-content">
                                                    <p>Здравствуйте</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="conversation-message-box-block">
                                        <a href="#">
                                            <div className="conversation-message-box your-message">
                                                <div className="conversation-message-box-content">
                                                    <p>Как к вам можно обращаться?</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-8 conversation-messages-input-col m-auto">
                                <div className="conversation-message-input-block">
                                    <form className="message-input-form" onSubmit={this.onSubmit}>
                                        <div className="form-group add-to-message-button">
                                            <a className="send-message-button-form" href="#">
                                                <i className="fa fa-file"/>
                                            </a>
                                        </div>
                                        <div className="form-group message-text-input-form">
                                            <textarea
                                            className="form-control message-text-input-textarea"
                                            placeholder="Введите сообщение"
                                            type="text"
                                            value={this.state.textMessageValue}
                                            onChange={this.handleTextMessageValueChange}>
                                            </textarea>
                                        </div>
                                        <a className="send-message-button-form" type="submit">
                                            <i className="fa fa-play"/>
                                        </a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}