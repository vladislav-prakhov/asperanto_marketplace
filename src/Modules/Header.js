import React, { Component } from "react";
import './css/header.css';
import {Link, Route} from 'react-router-dom';
import axios from "axios";
import {Organization} from "../Pages/Organization";
import { browserHistory } from 'react-router';
import queryString from "querystring";

export class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            user: {},
            search_field: '',
        };

        this.searchFieldOnChange = this.searchFieldOnChange.bind(this);
        this.searchFieldOnSubmit = this.searchFieldOnSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.userLogout = this.userLogout.bind(this);
    }

    searchFieldOnChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    searchFieldOnSubmit(e) {
        e.preventDefault();
        const query = this.state.search_field;
        this.props.history.push(`/products?search=${query}`);
        this.props.getSearchFieldToApp(query);
        // window.location.replace("/products?search="+query);
    }

    componentDidMount() {
        if (this.props.location.search) {
            const values = queryString.parse(this.props.location.search.slice(1));
            console.log(values.search);
            const search_field = values.search;
            this.setState( {search_field});
        }

    }

    handleClick() {
        e.preventDefault();
        $('#MobileHeaderModal').modal('hide');
    }

    userLogout(e) {
        e.preventDefault();
        localStorage.removeItem('auth_token');
        $('#MobileHeaderModal').modal('hide');
        window.location.reload();
    }

    render () {
        const currentUser = this.props.user;
        let currentOrgLink = '/organization/';
        let currentOrganization;
        if (this.props.organization && Object.values(this.props.organization).length >= 1) {
            currentOrganization = this.props.organization;
            let orgUrl = currentOrganization.comId.urlName;
            currentOrgLink = '/organization/' + orgUrl;
        }
        return (
            <header>
                <div className="container visible-xs main-header">
                    <div className="navbar-header">
                        <div className="row d-md-none">
                            <div className="col">
                                <div className="mobile-parent d-flex">
                                    <div className="mobile-left">
                                        <a href="#" className="button-navbar"
                                                                    data-toggle="modal"
                                                                    data-target="#MobileHeaderModal">
                                            <i className="fa fa-bars navbar-icon"/>
                                        </a>
                                    </div>
                                    <div className="mobile-center">
                                        <div>
                                            <Link to="/" className="button-navbar">
                                                <h5 className="logo-heading">asperanto</h5>
                                            </Link>
                                        </div>
                                    </div>
                                    {/*<div className="mobile-center">*/}
                                        {/*<div>*/}
                                            {/*<input type="text"*/}
                                                   {/*name="search_field"*/}
                                                   {/*placeholder="поиск..."*/}
                                                   {/*value={this.state.search_field}*/}
                                                   {/*onChange={this.searchFieldOnChange}*/}
                                                   {/*className="search-input"/>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    <div className="mobile-right"><a href="#" className="button-navbar">
                                        <i className="fa fa-search navbar-icon"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-none d-md-block navbar-header-row">
                            <div className="col offset-lg-0 navbar-header-column">
                                <div className="navbar-header-logo">
                                    <Link to="/" className="logo-link-header">
                                        <h5>asperanto</h5>
                                        {/*float: left*/}
                                    </Link>
                                    <a href="#" className="navbar-header-menu-link menu-link-name" data-toggle="modal"
                                       data-target="#MobileHeaderModal">
                                        <div className="menu-link-box">
                                            <i className="fa fa-bars"/>
                                            <p>меню</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="navbar-header-search">
                                    <form onSubmit={this.searchFieldOnSubmit}>
                                        <div className="search-container">
                                                <button className="btn btn-light advanced-search-btn" type="button">
                                                    <i className="fa fa-cogs search-btn-icon"/>
                                                </button>
                                                <input type="text"
                                                       name="search_field"
                                                       placeholder="поиск..."
                                                       value={this.state.search_field}
                                                       onChange={this.searchFieldOnChange}
                                                       className="search-input"/>
                                                <button className="btn btn-light search-btn" type="submit" >
                                                    <i className="fa fa-search search-btn-icon"/>
                                                </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="navbar-header-acc"/>
                            </div>
                        </div>
                    </div>
                    {/*<div className="industry-links">*/}
                        {/*<div className="row d-none d-md-block">*/}
                            {/*<div className="col">*/}
                                {/*<div>*/}
                                    {/*<div className="float-left navbar-links-text">*/}
                                        {/*<a href="#" className="button-navbar navbar-link">Все категории</a>*/}
                                        {/*<a href="#" className="button-navbar navbar-link">Нефтегазовая промышленность</a>*/}
                                        {/*<a href="#" className="button-navbar navbar-link">Горнодобывающая промышленность</a>*/}
                                        {/*<a href="#" className="button-navbar navbar-link">Металлургия</a>*/}
                                        {/*<a href="#" className="button-navbar navbar-link">Химическая промышленность</a>*/}
                                        {/*<a href="#" className="button-navbar navbar-link">Деревообработка</a>*/}
                                        {/*<a href="#" className="button-navbar navbar-link">Высокие технологии</a>*/}
                                        {/*<a href="#" className="button-navbar navbar-link">Оборонно-промышленный комплекс</a>*/}
                                        {/*<a href="#" className="button-navbar navbar-link">Сельское хозяйство</a>*/}
                                        {/*<a href="#" className="button-navbar navbar-link">Пищевая промышленность</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="float-left"/>*/}
                                {/*<div className="float-right"/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
                <div id="MobileHeaderModal" className="modal" role="dialog">
                    <div className="offcanvas-mobile-left-sidebar">
                        { Object.values(currentUser).length >= 1 ? (
                            <div>
                                <div className="offcanvas-mobile-left-sidebar-header">
                                    <a href="#">
                                        <div className="offcanvas-mobile-left-sidebar-header-acc-icon"/>
                                    </a>
                                    <a href="#">
                                        <div className="offcanvas-mobile-left-sidebar-header-acc-name">
                                            <span>{currentUser.firstName + ' ' + currentUser.lastName}</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="offcanvas-mobile-left-sidebar-links-box">
                                    <a onClick={this.userLogout}>
                                        <div className="offcanvas-mobile-left-sidebar-link">
                                            <i className="fa fa-window-close"/><span>  Выйти из аккаунта</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="offcanvas-mobile-left-sidebar-header">
                                    <Link to={'/auth'}>
                                        <div className="offcanvas-mobile-left-sidebar-header-acc-name">
                                            <span>Войти в аккаунт</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}
                        <div className="offcanvas-mobile-left-sidebar-links-box">
                            <Link to="/categories">
                                <div className="offcanvas-mobile-left-sidebar-link">
                                    <i className="fa fa-th"/><span>Категории</span>
                                </div>
                            </Link>
                            {currentOrganization &&
                            <Link to={currentOrgLink}>
                                <div className="offcanvas-mobile-left-sidebar-link">
                                    <i className="fa fa-building"/><span>Организация</span>
                                </div>
                            </Link>
                            }
                            {currentUser._id &&
                                <Link to={'/projects'}>
                                    <div className="offcanvas-mobile-left-sidebar-link">
                                        <i className="fa fa-briefcase"/><span>Проекты</span>
                                    </div>
                                </Link>
                            }
                            {currentUser._id &&
                            <a href="#">
                                <div className="offcanvas-mobile-left-sidebar-link">
                                    <i className="fa fa-user"/><span>Контакты</span>
                                </div>
                            </a>
                            }
                            {currentUser._id &&
                            <a href="#">
                                <div className="offcanvas-mobile-left-sidebar-link">
                                    <i className="fa fa-chart-pie"/><span>Мониторинг</span>
                                </div>
                            </a>
                            }
                            <a href="#">
                                <div className="offcanvas-mobile-left-sidebar-link">
                                    <i className="fa fa-cog"/><span>Настройки</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )}
}