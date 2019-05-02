import React, { Component } from "react";
import "./css/auth.css";
import "./css/general.css";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import classnames from "classnames";
import { browserHistory } from 'react-router';


export class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // organization: '',
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            // organization: this.state.organization,
            email: this.state.email,
            password: this.state.password,
        };
        // console.log(newUser);

        // this.props.registerUser(newUser);

        axios.post('http://api.asperanto.com/api/accounts/login', newUser)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('auth_token', res.data.token);
                // const Router = require('react-router');
                this.props.history.push('/');
                window.location.reload();
            })
            .catch(err => this.setState({errors: err.response.data }));
        // this.setState({errors: err.response.data })
        // localStorage.setItem('auth_token', 'gol');
    }

    render() {
        const { errors } = this.state;
        // const errors = this.state.errors;

        return (
            <div className="auth">
                <div className="row auth-blocks">
                    <div className="col-md-8 col-xl-6 m-auto auth-header-column">
                        <div className="body-auth-header-block">
                            <div className="body-auth-header-block-name">
                                <h2>Авторизация</h2>
                                <p className="body-auth-under-header-name-text">Войдите в аккаунт на платформе
                                    asperanto</p>
                            </div>
                            <div className="body-auth-fields-block">
                                <form className="form-auth" onSubmit={this.onSubmit}>
                                    <div className="form-group auth-form-group">
                                        <input
                                            className={classnames('form-control form-control-lg form-auth', {'is-invalid': errors.email})}
                                            placeholder="Введите ваш корпоративный email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                        { errors.email &&  (<div className="invalid-feedback">{errors.email}</div>) }
                                    </div>
                                    <div className="form-group auth-form-group">
                                        <input type="password"
                                               className={classnames('form-control form-control-lg form-auth', {'is-invalid': errors.password})}
                                               placeholder="Пароль"
                                               name="password"
                                               value={this.state.password}
                                               onChange={this.onChange}
                                        />
                                        { errors.password &&  (<div className="invalid-feedback">{errors.password}</div>) }
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-auth-login" type="submit">Войти в
                                            аккаунт
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}