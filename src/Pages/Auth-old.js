import React, { Component } from "react";
import "./css/home.css";
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
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 m-auto">
                            <h3 className="display-4 text-center">Аутентификация</h3>
                            <p className="text-center">Войдите в аккаунт на платформе asperanto</p>
                            <form onSubmit={this.onSubmit}>
                                {/*<div className="form-group">*/}
                                    {/*<input type="text"*/}
                                           {/*className={classnames('form-control form-control-lg', {'is-invalid': errors.organization})}*/}
                                           {/*placeholder="Организация"*/}
                                           {/*name="organization"*/}
                                           {/*value={this.state.organization}*/}
                                           {/*onChange={this.onChange}*/}
                                    {/*/>*/}
                                    {/*{ errors.organization &&  (<div className="invalid-feedback">{errors.organization}</div>) }*/}
                                {/*</div>*/}
                                <div className="form-group">
                                    <input type="email"
                                           className={classnames('form-control form-control-lg', {'is-invalid': errors.email})}
                                           placeholder="Адрес электронной почты"
                                           name="email"
                                           value={this.state.email}
                                           onChange={this.onChange}
                                    />
                                    { errors.email &&  (<div className="invalid-feedback">{errors.email}</div>) }
                                    <small className="form-text text-muted">This site uses Gravatar so if you want a
                                        profile image, use a Gravatar email
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className={classnames('form-control form-control-lg', {'is-invalid': errors.password})}
                                           placeholder="Пароль"
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.onChange}
                                    />
                                    { errors.password &&  (<div className="invalid-feedback">{errors.password}</div>) }
                                </div>
                                <input type="submit" className="bootstrap-inside btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}