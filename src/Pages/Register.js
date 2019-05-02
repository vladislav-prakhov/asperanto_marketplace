import React, {Component} from 'react';
import axios from 'axios';
import classnames from 'classnames';

//import { connect } from 'react-redux';
//import { registerUser } from "../../actions/authActions";

export class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            nickname: '',
            email: '',
            password: '',
            password2: '',
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            middleName: this.state.middleName,
            nickname: this.state.nickname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        // console.log(newUser);

        // this.props.registerUser(newUser);

        axios.post('http://localhost:8020/api/accounts/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({errors: err.response.data }));
    }

    render() {
        const { errors } = this.state;
        // const errors = this.state.errors;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h3 className="display-4 text-center">Регистрация</h3>
                            <p className="text-center">Зарегистрируйте аккаунт на платформе asperanto</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames('form-control form-control-lg', {'is-invalid': errors.firstName})}
                                           placeholder="Имя"
                                           name="firstName"
                                           value={this.state.firstName}
                                           onChange={this.onChange}
                                    />
                                    { errors.firstName &&  (<div className="invalid-feedback">{errors.firstName}</div>) }
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames('form-control form-control-lg', {'is-invalid': errors.lastName})}
                                           placeholder="Фамилия"
                                           name="lastName"
                                           value={this.state.lastName}
                                           onChange={this.onChange}
                                    />
                                    { errors.lastName &&  (<div className="invalid-feedback">{errors.lastName}</div>) }
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames('form-control form-control-lg', {'is-invalid': errors.middleName})}
                                           placeholder="Отчество"
                                           name="middleName"
                                           value={this.state.middleName}
                                           onChange={this.onChange}
                                    />
                                    { errors.middleName &&  (<div className="invalid-feedback">{errors.middleName}</div>) }
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames('form-control form-control-lg', {'is-invalid': errors.nickname})}
                                           placeholder="Никнейм"
                                           name="nickname"
                                           value={this.state.nickname}
                                           onChange={this.onChange}
                                    />
                                    { errors.nickname &&  (<div className="invalid-feedback">{errors.nickname}</div>) }
                                </div>



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
                                <div className="form-group">
                                    <input type="password"
                                           className={classnames('form-control form-control-lg', {'is-invalid': errors.password2})}
                                           placeholder="Подтверждение пароля"
                                           name="password2"
                                           value={this.state.password2}
                                           onChange={this.onChange}
                                    />
                                    { errors.password2 &&  (<div className="invalid-feedback">{errors.password2}</div>) }
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
