import React, { Component } from "react";
import "./css/product.css";
import "./css/general.css";
// import "./css/styles.css";
import axios from "axios";
import {Link} from "react-router-dom";

export class ProductOrService extends Component {
    constructor (props) {
        super(props);

        this.state = {
            product: {
            },
            selectedSubproject: ''
        };
        this.handleRadio = this.handleRadio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleRadio(id) {
        this.setState({ selectedSubproject: id});
        console.log(id);
    }

    componentDidMount() {
        let path = this.props.match.path;
        if (path === '/products/:productId') {
            const productId = this.props.match.params.productId;
            console.log(productId);
            let query = `http://api.asperanto.com/api/products/` + productId;
            axios.get(query)
                .then(res => {
                    const product = res.data;
                    // alert(res.data);
                    // if (product) {
                    this.setState({product});
                    // } else {
                    //     const status = {status: 404};
                    //     this.setState({status})
                    // }
                })
                .catch(err => this.setState({errors: err.response.data }));
        } else if (path === '/services/:serviceId'){
            const serviceId = this.props.match.params.serviceId;
            console.log(serviceId);
            let query = `http://api.asperanto.com/api/services/` + serviceId;
            axios.get(query)
                .then(res => {
                    const product = res.data;
                    this.setState({product});
                })
                .catch(err => this.setState({errors: err.response.data }));


        }

        //тут очень криво реализовано. Наверное действительно нужен общий storage проекта
        const authToken = localStorage.getItem('auth_token');
        if (authToken) {
            axios.get(`http://api.asperanto.com/api/accounts/profile`, {headers: { Authorization: authToken}})
                .then(res => {
                    const organizationUrlName = res.data.organization.comId.urlName;
                    let query = (`http://api.asperanto.com/api/organizations/` + organizationUrlName + `/private`);
                    axios.get( query, {headers: { Authorization: authToken}})
                        .then(res => {
                            const organization = res.data;
                            this.setState({organization});
                            const orgProjects = organization.projects;
                            this.setState({orgProjects});
                            console.log(this.state.orgProjects);
                        })

                });
        }


    }

    onSubmit(e) {
        e.preventDefault();

        let path = this.props.match.path;
        let query_type;
        if (path === '/products/:productId') {
            query_type = 'products';
        } else if (path === '/services/:serviceId') {
            query_type = 'services';
        }
        const query = 'http://api.asperanto.com/api/' + query_type + '/' + this.state.product._id +'/create_request';
        console.log("Типо подали заявку  " + this.state.selectedSubproject);

        const newRequest = {
            // organization: this.state.organization,
            unitCount: '0',
            subprojectId: this.state.selectedSubproject,
        };

        const authToken = localStorage.getItem('auth_token');
        if (authToken) {
            axios.post(query , newRequest,
                {headers: { Authorization: authToken}})
                .then(res => {
                    console.log(res.data);
                    console.log(newRequest);
                    $('#CreateProductRequest').modal('hide');
                })
                .catch(err => {
                    this.setState({request_errors: err.response.data });
                });
        }

    }

    render () {
        let path = this.props.match.path;
        const product = this.state.product;
        const errors = this.state.errors;

        const productTags = this.state.product.tags;
        let tags;
        if (productTags) {
            tags = productTags.map((tag) =>
                <a href="#">#{tag}</a>
            )
        }

        if (errors && ((errors.product==="Product not found") || (errors.service==="Service not found"))) {
            return (
                <div className="content">
                    <div className="container">
                        <div className="row account-column-names">
                            <div className="col-xl-12 header-column">
                                <div className="body-header-block">
                                    <div className="body-header-block-name">
                                        <h2>404</h2>
                                        { (path === '/products/:productId') &&
                                        <p className="body-under-header-name-text">Кажется, такого продукта не существует.
                                            Перейдите по <Link to={'/'}>ссылке</Link> на главную страницу</p>
                                        }
                                        { (path === '/services/:serviceId') &&
                                        <p className="body-under-header-name-text">Кажется, такой услуги не существует.
                                            Перейдите по <Link to={'/'}>ссылке</Link> на главную страницу</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="content">
                    <div className="container">
                        <div className="row account-column-names">
                            <div className="col org-column">
                                {product.organization &&
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
                                    <div className="product-main-info">
                                        <div className="product-pic-group">
                                            <div className="product-page-mainpic">
                                                <img src={product.image}/>
                                            </div>
                                        </div>
                                        <div className="product-information">
                                            <div className="product-header-name">
                                                <h2 className="product-header-name">{product.name}</h2>
                                            </div>
                                            <Link to={'/organization/' + product.organization.urlName}>
                                                <h3 className="product-company-name">
                                                    <strong>{product.organization.name}</strong></h3>
                                            </Link>
                                            <div className="org-industry-links">
                                                {tags}
                                            </div>
                                            <p className="product-price">Цена: {product.price} руб.</p>
                                            <p className="product-description"
                                               align="justify">{product.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contragent-contact-btn-div">
                                        <button className="btn btn-primary contragent-contact-btn" type="button"
                                                data-toggle="modal" data-target="#CreateProductRequest">Связаться с
                                            контрагентом по данному продукту
                                        </button>
                                    </div>
                                    <div id="CreateProductRequest" className="modal fade" role="dialog">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <form onSubmit={this.onSubmit}>
                                                <div className="modal-content modal-content-product">
                                                    <div className="modal-content-heading">
                                                        <span>{product.name}</span>
                                                        <span className="modal-company-name">
                                                                <strong>{product.organization.name}</strong>
                                                                <br/>
                                                            </span>
                                                    </div>
                                                    <div className="modal-content-message">
                                                        <div className="modal-general-category-heading">
                                                            <span>Выберете проект и подпроект:</span>
                                                        </div>
                                                        <div className="modal-categories-box">
                                                            { this.state.orgProjects &&
                                                                this.state.orgProjects.map(
                                                                    (project, project_index) => (
                                                                        ( Object.keys(project.subprojects).length > 0) &&
                                                            <div className="modal-category-box" key={project_index}>
                                                                <div className="modal-category-heading">
                                                                    <span>{project.name}</span>
                                                                </div>
                                                                <div className="modal-subcategory-box">
                                                                    {project.subprojects.map((subproject, subproject_index) => (
                                                                    <label className="labl">
                                                                        <input type="radio" name="subproject"
                                                                               id={subproject_index}
                                                                               key={subproject._id}
                                                                                onChange={e => this.handleRadio(subproject._id)}/>
                                                                        <div>{subproject.name}</div>
                                                                    </label>))}
                                                                </div>
                                                            </div>))}
                                                        </div>
                                                    </div>
                                                    <div className="modal-content-message">
                                                        <span>Написать сообщение:</span>
                                                        <textarea/>
                                                    </div>
                                                    <div className="modal-content-footer">
                                                        <button className="btn btn-primary" type="button"
                                                                data-dismiss="modal">Закрыть окно
                                                        </button>
                                                        <button className="btn btn-primary btn-success create-request"
                                                                type="submit">Отправить заявку
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                            <div className="col-xl-3 column-right-sidebar">
                                <div className="product-right-sidebar">
                                    <h3>ТУЛЗЫ</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}