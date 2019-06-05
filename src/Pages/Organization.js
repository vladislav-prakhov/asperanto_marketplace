import React, { Component } from "react";
import "./css/organisation.css";
import "./css/general.css";
// import "./css/styles.css";
import axios from "axios";
import {Link, Route, Switch} from "react-router-dom";

export class Organization extends Component {
    constructor (props) {
        super(props);

        this.state = {
            organization: {
            },
        }
    }

    componentDidMount() {
        const orgUrlName = this.props.match.params.orgUrlName;
        console.log(orgUrlName);
        let query = `http://api.asperanto.com/api/organizations/` + orgUrlName;
        console.log(query);
        axios.get(query)
            .then(res => {
                const organization = res.data;
                this.setState({organization});
                console.log(organization);
                console.log(productsList)
            })
            .catch(err => this.setState({errors: err.response.data }));





        // const authToken = localStorage.getItem('auth_token');
        //
        // axios.get(`http://api.asperanto.com/api/organizations/khrunichevspace`, {headers: { Authorization: authToken}})
        //     .then(res => {
        //         const organization = res.data;
        //         this.setState({organization});
        //         console.log(organization);
        //         console.log(productsList)
        //     })
    }


    render () {
        const org = this.state.organization;
        const errors = this.state.errors;
        console.log(this.state.productsList);
        let product;
        let service;

        const orgTags = org.tags;
        let tags;
        if (orgTags) {
            tags = orgTags.map((tag) =>
                <a href="#">#{tag}</a>
            )
        }



        if (org.productsList) {
            // alert(this.state.productsList[0].name);
            {
                product =
                    org.productsList.map((product, index) =>
                        <Link to={'/products/' + product._id}>
                            <div className="org-item-example">
                                <div className="org-item-pic">
                                    <img src={product.image}/>
                                </div>
                                <div className="org-item-info">
                                    <h4>{product.name}</h4>
                                    <p>{product.price} руб.</p>
                                </div>
                            </div>
                        </Link>)
            }
        }
        if (org.servicesList) {
            // alert(this.state.productsList[0].name);
            {
                service =
                    org.servicesList.map((service, index) =>
                        <Link to={'/services/' + service._id}>
                            <div className="org-item-example">
                                <div className="org-item-pic">
                                    <img src={service.image}/>
                                </div>
                                <div className="org-item-info">
                                    <h4>{service.name}</h4>
                                    <p>{service.price} руб.</p>
                                </div>
                            </div>
                        </Link>)
            }
        }
        /*{ org.productsList.map((product, index) =>*/
        // )}

        if (errors && (errors.organization === "Organization not found")) {
            return (
                <div className="content">
                    <div className="container">
                        <div className="row account-column-names">
                            <div className="col-xl-12 header-column">
                                <div className="body-header-block">
                                    <div className="body-header-block-name">
                                        <h2>404</h2>
                                        <p className="body-under-header-name-text">Кажется, такой организации не существует.
                                            Перейдите по <Link to={'/'}>ссылке</Link> на главную страницу</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="content">
                    <div className="container">
                        <div className="row account-column-names">
                            <div className="col org-column">
                                {org.name &&
                                <div className="block-info block-box block-margin">
                                    <div className="org-rating-header">
                                        <div className="rating-block">
                                            <div className="stars-rating">
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-main-info">
                                        <div className="org-logo">
                                            <img src={org.avatar}/>
                                        </div>
                                        <div className="org-information">
                                            <div className="org-information-name">
                                                <h2 className="org-name-heading">{org.businessType} {org.name}</h2>
                                                <div className="org-industry-links">{tags}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }
                                {org.productsList && (Object.keys(org.productsList).length > 0) &&
                                <div className="org-products block-box block-margin">
                                    <div className="org-products-header">
                                        <h3>Продукты</h3>
                                    </div>
                                    <div className="org-items">
                                        {product}
                                    </div>
                                </div>
                                }
                                {org.servicesList && (Object.keys(org.servicesList).length > 0) &&
                                <div className="org-services block-box block-margin">
                                    <div className="org-services-header">
                                        <h3>Услуги</h3>
                                    </div>
                                    <div className="org-items">
                                        {service}
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
               }
        }
}