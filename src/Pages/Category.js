import React, { Component } from "react";
// import { Suggestions } from './Suggestions';
import "./css/categories.css";
import "./css/products-page.css";
import classnames from "classnames";
import {Route, Switch} from "react-router-dom";

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    };
    render() {
        let category_image;
        let category_name;
        let category_links;
        let path = this.props.location.pathname;
        switch(path) {
            case '/categories/oil-gas':
                category_image = 'categories-image-oil-gas';
                category_name = 'Нефтегазовая промышленность';
                category_links = [{name: 'Бурение', link: path+'/drilling'},
                                  {name: 'Геологоразведка', link: path+'/geological-exploration'},
                                  {name: 'Нефтепереработка', link: path+'/oil-processing'},
                                  {name: 'Логистика', link: path+'/logistics'}];
                break;
            case '/categories/metallurgy':
                category_image = 'categories-image-metallurgy';
                category_name = 'Металлургическая промышленность';
                category_links = [{name: 'Черная металлургия', link: path+'/steel-industry'},
                                    {name: 'Цветная металлургия', link: path+'/nonferrous-industry'},
                                    {name: 'Логистика', link: path+'/logistics'}];
                break;
            case '/categories/space-industry':
                category_image = 'categories-image-space-industry';
                category_name = 'Космическая промышленность';
                category_links = [{name: 'Двигатели', link: path+'/engines'},
                                    {name: 'Ракеты-носители', link: path+'/carrier-rockets'},
                                    {name: 'Спутники', link: path+'/nonferrous-industry'},
                                    {name: 'Логистика', link: path+'/logistics'}];
                break;
            case '/categories/aviation':
                category_image = 'categories-image-aviation';
                category_name = 'Авиационная промышленность';
                category_links = [{name: 'Двигатели', link: path+'/engines'},
                                    {name: 'Гражданская авиация', link: path+'/сivil-aviation'},
                                    {name: 'Военная авиация', link: path+'/military-aviation'},
                                    {name: 'Сервис', link: path+'/service'},
                                    {name: 'Логистика', link: path+'/logistics'}];
                break;
            case '/categories/agriculture':
                category_image = 'categories-image-agriculture';
                category_name = 'Сельскохозяйственная промышленность';
                category_links = [{name: 'Растениеводство', link: path+'/crop-husbandry'},
                                    {name: 'Животноводство', link: path+'/animal-husbandry'},
                                    {name: 'Сервис', link: path+'/service'},
                                    {name: 'Логистика', link: path+'/logistics'}];
                break;
            case '/categories/mining':
                category_image = 'categories-image-mining';
                category_name = 'Горнодобывающая промышленность';
                category_links = [{name: 'Добыча', link: path+'/mining-operations'},
                                    {name: 'Геологоразведка', link: path+'/geological-exploration'},
                                    {name: 'Сервис', link: path+'/service'},
                                    {name: 'Логистика', link: path+'/logistics'}];
                break;
        }

        return (
            <div>
                <div className={classnames("categories-heading", category_image )}>
                    <div className="categories-heading-shadowing">
                        <div className="container">
                            <div className="row categories-heading-row">
                                <div className="col categories-heading-col">
                                    <div className="category-heading-box">
                                        <h1 className="category-heading-name">{category_name}</h1>
                                        <div className="category-links">
                                            { category_links && (
                                                category_links.map((link) =>
                                                    <a href={link.link}>
                                                        <h2 className="category-one-link">{link.name}</h2>
                                                    </a>
                                                )
                                            )
                                            }
                                            {/*<a href="#">*/}
                                                {/*<h2 className="category-one-link">Георазведка</h2>*/}
                                            {/*</a>*/}
                                            {/*<a href="#">*/}
                                                {/*<h2 className="category-one-link">Нефтепереработка</h2>*/}
                                            {/*</a>*/}
                                            {/*<a href="#">*/}
                                                {/*<h2 className="category-one-link">Логистика</h2>*/}
                                            {/*</a>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="row account-column-names">
                            <div className="col org-column">
                                <div className="products-box">
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
            </div>
        );
    }
}