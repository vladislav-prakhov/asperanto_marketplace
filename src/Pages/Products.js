import React, { Component } from "react";
import "./css/products-page.css";
import './css/general.css';
import axios from "axios";
import {Link} from "react-router-dom";
import queryString from "querystring";

export class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.location.search) {
            const values = queryString.parse(this.props.location.search.slice(1));
            const query = {
                text: values.search,
            };
            axios.post(`http://api.asperanto.com/api/products/search`, query)
                .then(res => {
                    const products = res.data;
                    this.setState({ products });
                    console.log(products);
                })
        } else {
            axios.get(`http://api.asperanto.com/api/products`)
                .then(res => {
                    const products = res.data;
                    this.setState({products});
                    console.log(products);
                })
        }
    }



    render() {
        let shrink = 'products';

        if (this.props.shrinked)
            shrink = 'products-when-page-margined';
        else
            shrink = 'products';

        let linkToGur = 'Просмотреть товар';

        if (this.props.typeOfPage === 'goods')
            linkToGur = 'Просмотреть товар';
        if (this.props.typeOfPage === 'services')
            linkToGur = 'Узнать подробнее';

        return (
            <div className="content">
                <div className="container">
                    <div className="row account-column-names">
                        <div className="col org-column">
                            <div className="products-box">
                                { this.state.products && this.state.products.products!=='Ничего не найдено' &&
                                 this.state.products.map((product, index) =>
                                        <Link to={'/products/' + product._id}>
                                            <div className="product-item-example" key={'product_' + index}>
                                                <div className="product-item-pic">
                                                    <div className="rating-block-product">
                                                        <div className="stars-rating-product">
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                        </div>
                                                    </div>
                                                    <img src={product.image}/>
                                                </div>
                                                <div className="product-item-info">
                                                    <h4>{product.name}</h4>
                                                    {/*<Link to={`/organizations/${product.organization._id}`}>*/}
                                                        {/*<p>Поставщик: {product.organization.name}</p>*/}
                                                    {/*</Link>*/}
                                                    <p>Цена: {product.price} руб.</p>
                                                </div>
                                            </div>
                                        </Link>
                                )}
                                <a href="#">
                                    <div className="product-item-example">
                                        <div className="product-item-pic">
                                            <div className="rating-block-product">
                                                <div className="stars-rating-product">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <img src="https://i.ibb.co/K7Dw3HS/rocket.jpg"/>
                                        </div>
                                        <div className="product-item-info">
                                            <h4>Ракета-носитель СК-413 (2004 г.)</h4>
                                            <p>Цена: 300 000 000 руб.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="product-item-example">
                                        <div className="product-item-pic">
                                            <div className="rating-block-product">
                                                <div className="stars-rating-product">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <img src="https://i.ibb.co/s9ZyJ4t/montage.jpg"/>
                                        </div>
                                        <div className="product-item-info">
                                            <h4>Ракета-носитель РК-504</h4>
                                            <p>Цена: 300 000 000 руб.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="product-item-example">
                                        <div className="product-item-pic">
                                            <div className="rating-block-product">
                                                <div className="stars-rating-product">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <img src="https://i.ibb.co/GsV7Wb1/space-2.jpg"/>
                                        </div>
                                        <div className="product-item-info">
                                            <h4>Ракета-носитель СК-413 (2004 г.)</h4>
                                            <p>Цена: 300 000 000 руб.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="product-item-example">
                                        <div className="product-item-pic">
                                            <div className="rating-block-product">
                                                <div className="stars-rating-product">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <img src="https://i.ibb.co/4m0z9GZ/smth.jpg"/>
                                        </div>
                                        <div className="product-item-info">
                                            <h4>Ракета-носитель СК-413 (2004 г.)</h4>
                                            <p>Цена: 300 000 000 руб.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="product-item-example">
                                        <div className="product-item-pic">
                                            <div className="rating-block-product">
                                                <div className="stars-rating-product">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <img src="https://i.ibb.co/kyYpjZq/rocket-logistics.jpg"/>
                                        </div>
                                        <div className="product-item-info">
                                            <h4>Ракета-носитель СК-413 (2004 г.)</h4>
                                            <p>Цена: 300 000 000 руб.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="product-item-example">
                                        <div className="product-item-pic">
                                            <div className="rating-block-product">
                                                <div className="stars-rating-product">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <img src="https://i.ibb.co/K7Dw3HS/rocket.jpg"/>
                                        </div>
                                        <div className="product-item-info">
                                            <h4>Ракета-носитель СК-413 (2004 г.)</h4>
                                            <p>Цена: 300 000 000 руб.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="product-item-example">
                                        <div className="product-item-pic">
                                            <div className="rating-block-product">
                                                <div className="stars-rating-product">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <img src="https://i.ibb.co/4m0z9GZ/smth.jpg"/>
                                        </div>
                                        <div className="product-item-info">
                                            <h4>Ракета-носитель СК-413 (2004 г.)</h4>
                                            <p>Цена: 300 000 000 руб.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="product-item-example">
                                        <div className="product-item-pic">
                                            <div className="rating-block-product">
                                                <div className="stars-rating-product">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <img src="https://i.ibb.co/GsV7Wb1/space-2.jpg"/>
                                        </div>
                                        <div className="product-item-info">
                                            <h4>Ракета-носитель СК-413 (2004 г.)</h4>
                                            <p>Цена: 300 000 000 руб.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="product-item-example">
                                        <div className="product-item-pic">
                                            <div className="rating-block-product">
                                                <div className="stars-rating-product">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <img src="https://i.ibb.co/K7Dw3HS/rocket.jpg"/>
                                        </div>
                                        <div className="product-item-info">
                                            <h4>Ракета-носитель СК-413 (2004 г.)</h4>
                                            <p>Цена: 300 000 000 руб.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 column-right-sidebar">
                            <div className="product-right-sidebar">
                                <div className="product-right-sidebar-heading">
                                    <h3>Фильтры</h3>
                                </div>
                                <div className="product-right-sidebar-pricebox">
                                    <div className="pricebox-heading">
                                        <span>Цена</span>
                                    </div>
                                    <div className="product-right-sidebar-pricebox-from">
                                        <div className="pricebox-float-left">
                                            <span>от:&nbsp;</span>
                                        </div>
                                        <div className="pricebox-float-right">
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="product-right-sidebar-pricebox-to">
                                        <div className="pricebox-float-left">
                                            <span>до:&nbsp;</span>
                                        </div>
                                        <div className="pricebox-float-right">
                                            <input type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );}
}