import React, { Component } from "react";
import './css/search.css';


export class Search extends Component {
    constructor(props) {
        super(props);

        this.ignoreClick = this.ignoreClick.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    ignoreClick(e) {
        e.stopPropagation();
    }

    isChecked(value) {
        return this.props.searchBox.additionalInfo.typeOfSearch == value;
    }

    render() {
        return (
            <div className={ "searchBox" } onClick={ this.ignoreClick }>
                <section className={ "searchBox-tips" }>
                    Подсказки по поисковому запросу
                </section>

                <section className={"searchBox-filters"}>
                    <h4>Инструменты поиска</h4>
                    <h5>Поиск по:</h5>
                    <form className={ "searchBox-filters-radio" }>
                        <input type={ "radio" } value={ "goods" } name={"typeOfSearch"} onChange={this.props.getAddInfo} checked={this.isChecked('goods')}/><span>Товарам</span>
                        <input type={ "radio" } value={ "counteragents" } name={"typeOfSearch"} onChange={this.props.getAddInfo} checked={this.isChecked('counteragents')}/><span>Контрагентам</span>
                        <input type={ "radio" } value={ "authors" } name={"typeOfSearch"} onChange={this.props.getAddInfo} checked={this.isChecked('authors')}/><span>Производителям</span>
                    </form>
                </section>
            </div>
        )}
}