import React, { Component } from "react";
import "./css/subproject.css";
import "./css/general.css";
import axios from "axios";
import {Link} from "react-router-dom";

export class Subproject extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: {},
            errors: {}
        }
    }

    componentDidMount() {
        const authToken = localStorage.getItem('auth_token');
        const subprojectId = this.props.match.params.subprojectId;
        console.log(subprojectId);
        let query = `http://api.asperanto.com/api/subprojects/` + subprojectId;
        axios.get(query, {headers: { Authorization: authToken}})
            .then(res => {
                const data = res.data;
                this.setState({data});
            })
            .catch(err => this.setState({errors: err.response.data}));
        }

    render () {
        if (this.state.data) {
            let requests = this.state.data;
            console.log(requests);
        }
        if (Object.keys(this.state.errors).length > 0) {
            return (
                <div className="content">
                    <div className="container">
                        <div className="row account-column-names">
                            <div className="col-xl-12 header-column">
                                <div className="body-header-block">
                                    <div className="body-header-block-name">
                                        <h2>404</h2>
                                        <p className="body-under-header-name-text">Кажется, такого подпроекта не существует.
                                            Перейдите по <Link to={'/'}>ссылке</Link> на главную страницу</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.data.tradeRequests) {
            return (
                <div className="content">
                    <div className="subproject-heading">
                        <div className="container">
                            <div className="row subproject-heading-row">
                                <div className="col subproject-heading-col">
                                    <div className="subproject-heading-box">
                                        <div className="subproject-heading-breadcrumbs-box">
                                            <div className="subproject-heading-breadcrumbs-box-item">
                                                <Link to="/projects">Проекты и подпроекты</Link>
                                            </div>
                                            <div className="subproject-heading-breadcrumbs-box-item">
                                                <span>&gt;</span>
                                            </div>
                                            <div className="subproject-heading-breadcrumbs-box-item">
                                                {this.state.data.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="container">
                            {Object.keys(this.state.data.tradeRequests).length > 0 &&
                            <div className="row">
                                <div className="col subproject-conversation-col">
                                    <div className="subproject-conversations-box">
                                        {this.state.data.tradeRequests.map((request, request_index) =>
                                            <a href="#">
                                                <div className="subproject-one-conversation-box">
                                                    <div
                                                        className="subproject-one-conversation-box-status yellow-status"/>
                                                    <div className="subproject-one-conversation-box-conv-pic">
                                                        <img src={request.provider.avatar}/>
                                                    </div>
                                                    <div className="subproject-one-conversation-box-content">
                                                        <h3>{request.provider.name}</h3>
                                                        <p>Добрый день. Готовы ли инициировать сделку по ранним
                                                            договоренностям?</p>
                                                    </div>
                                                </div>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            }
                            {Object.keys(this.state.data.tradeRequests).length === 0 &&
                            <div className="no-requests-box">
                                <h3>В данном подпроекте пока нет заявок</h3>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            )}
        else {
            return (
                <div className="content">
                    <div className="container"/>
                </div>
            )
        }
    }
}