import React, { Component } from "react";
import "./css/suggestions.css";
import './css/pics.css';

export class Suggestions extends Component {
    constructor(props) {
        super(props);
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
            <div className="main-goods">
                <div className={shrink}>
                    <div className="product-window">
                        <div className="product-pic" id={"oil_gas"}/>

                            <div className="product-meta">
                                <div className="product-name">Буровая установка</div>
                                <div className="product-author">Поставщик: ЯмалБурСервис</div>

                                <div className="product-price">500-650 млн. руб.</div>
                            </div>

                            <div className="product-links">
                                <a className="product-contact">{linkToGur}</a>

                                <a className="product-fav">Добавить в избранное</a>
                            </div>
                    </div>

                    <div className="product-window">
                        <div className="product-pic" id={"oil_gas"}/>

                        <div className="product-meta">
                            <div className="product-name">Буровая установка</div>
                            <div className="product-author">Поставщик: ЯмалБурСервис</div>

                            <div className="product-price">500-650 млн. руб.</div>
                        </div>

                        <div className="product-links">
                            <a className="product-contact">{linkToGur}</a>

                            <a className="product-fav">Добавить в избранное</a>
                        </div>
                    </div>

                    <div className="product-window">
                        <div className="product-pic" id={"oil_gas"}/>

                        <div className="product-meta">
                            <div className="product-name">Буровая установка</div>
                            <div className="product-author">Поставщик: ЯмалБурСервис</div>

                            <div className="product-price">500-650 млн. руб.</div>
                        </div>

                        <div className="product-links">
                            <a className="product-contact">{linkToGur}</a>

                            <a className="product-fav">Добавить в избранное</a>
                        </div>
                    </div>

                    <div className="product-window">
                        <div className="product-pic" id={"oil_gas"}/>

                        <div className="product-meta">
                            <div className="product-name">Буровая установка</div>
                            <div className="product-author">Поставщик: ЯмалБурСервис</div>

                            <div className="product-price">500-650 млн. руб.</div>
                        </div>

                        <div className="product-links">
                            <a className="product-contact">{linkToGur}</a>

                            <a className="product-fav">Добавить в избранное</a>
                        </div>
                    </div>

                    <div className="product-window">
                        <div className="product-pic" id={"oil_gas"}/>

                        <div className="product-meta">
                            <div className="product-name">Буровая установка</div>
                            <div className="product-author">Поставщик: ЯмалБурСервис</div>

                            <div className="product-price">500-650 млн. руб.</div>
                        </div>

                        <div className="product-links">
                            <a className="product-contact">{linkToGur}</a>

                            <a className="product-fav">Добавить в избранное</a>
                        </div>
                    </div>

                    <div className="product-window">
                        <div className="product-pic" id={"oil_gas"}/>

                        <div className="product-meta">
                            <div className="product-name">Буровая установка</div>
                            <div className="product-author">Поставщик: ЯмалБурСервис</div>

                            <div className="product-price">500-650 млн. руб.</div>
                        </div>

                        <div className="product-links">
                            <a className="product-contact">{linkToGur}</a>

                            <a className="product-fav">Добавить в избранное</a>
                        </div>
                    </div>

                    <div className="product-window">
                        <div className="product-pic" id={"oil_gas"}/>

                        <div className="product-meta">
                            <div className="product-name">Буровая установка</div>
                            <div className="product-author">Поставщик: ЯмалБурСервис</div>

                            <div className="product-price">500-650 млн. руб.</div>
                        </div>

                        <div className="product-links">
                            <a className="product-contact">{linkToGur}</a>

                            <a className="product-fav">Добавить в избранное</a>
                        </div>
                    </div>
                </div>

                <div className="product-filters-wrapper">
                    <div className="product-filters">
                        <h3>Фильтры</h3>
                    </div>
                </div>
            </div>
        );}
}