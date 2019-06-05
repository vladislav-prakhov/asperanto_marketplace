import React, { Component } from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import axios from 'axios';

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            organizations: [],
            errors: {}
        };
    }

    componentDidMount() {
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        //     .then(res => {
        //         const people = res.data;
        //         this.setState({ people });
        //     });
        //
        // axios.get(`http://api.asperanto.com/api/organizations/all`)
        //     .then(res => {
        //         const organizations = res.data;
        //         this.setState({ organizations });
        //         console.log(res);
        //     });

        const authToken = localStorage.getItem('auth_token');

        // axios.get(`http://localhost:8020/api/accounts/profile`, {headers: { Authorization: authToken}})
        //     .then(res => {
        //         // const profile = res.data;
        //         // this.setState({ profile });
        //         console.log(authToken);
        //     });
    }

    render () {
        return (
            <div className="main-home">
                {/*<Link to={'/categories'}><h1>Категории</h1></Link>*/}
                {/*<Link to={'/organization'}><h1>Организация</h1></Link>*/}
                {/*<Link to={'/auth'}><h1>Аутентификация</h1></Link>*/}
                {/*<Link to={'/register'}><h1>Регистрация</h1></Link>*/}
                <Link to={'/products'}><h1>Товары и продукты</h1></Link>
                <Link to={'/chat'}><h1>Чат</h1></Link>
                {/*<Link to={'/subproject'}><h1>Подпроект</h1></Link>*/}
            </div>
        );
    }
}
