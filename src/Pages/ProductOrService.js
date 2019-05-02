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
        }
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
                                                        <div className="modal-category-box">
                                                            <div className="modal-category-heading"><span>Общее</span>
                                                            </div>
                                                            <div className="modal-subcategory-box">
                                                                <label className="labl">
                                                                    <input type="radio" name="subproject"
                                                                           id="subproject-check-1"/>
                                                                    <div>Разработчики</div>
                                                                </label>
                                                                <label className="labl">
                                                                    <input type="radio" name="subproject"
                                                                           id="subproject-check-2"/>
                                                                    <div>Поставщики продуктов</div>
                                                                </label>
                                                                <label className="labl">
                                                                    <input type="radio" name="subproject"
                                                                           id="subproject-check-3"/>
                                                                    <div>Поставщики сервисных услуг</div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="modal-category-box">
                                                            <div className="modal-category-heading"><span>Закупки для ракеты NK-205</span>
                                                            </div>
                                                            <div className="modal-subcategory-box">
                                                                <label className="labl">
                                                                    <input type="radio" name="subproject"
                                                                           id="subproject-check-4"/>
                                                                    <div>Двигатели</div>
                                                                </label>
                                                                <label className="labl">
                                                                    <input type="radio" name="subproject"
                                                                           id="subproject-check-5"/>
                                                                    <div>Ракетное топливо</div>
                                                                </label>
                                                                <label className="labl">
                                                                    <input type="radio" name="subproject"
                                                                           id="subproject-check-6"/>
                                                                    <div>Сервис</div>
                                                                </label>
                                                            </div>
                                                        </div>
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
                                                            type="button">Отправить заявку
                                                    </button>
                                                </div>
                                            </div>
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