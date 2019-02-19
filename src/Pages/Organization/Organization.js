import React, { Component } from 'react';
import './css/organization.css';
import { Description } from './Description';
import { Suggestions } from '../Suggestions';
import { Contacts } from './Contacts';

export class Organization extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bodyOrg: 'Description',
        };

        this.changeBody = this.changeBody.bind(this);
    }

    changeBody(name) {
        this.setState(
            {
                bodyOrg: name,
            }
        );
    }

    render() {
        let body_component = <Description/>;

        if (this.state.bodyOrg === 'Description')
            body_component = <Description/>;
        else if (this.state.bodyOrg === 'Cards')
            body_component = <Suggestions shrinked={true} typeOfPage={'goods'}/>;
        else if (this.state.bodyOrg === 'Services')
            body_component = <Suggestions shrinked={true} typeOfPage={'services'}/>;
        else if (this.state.bodyOrg === 'Contacts')
            body_component = <Contacts/>;


            return (
            <div className={"main-organization"}>
                <h1 className={"name-organization"}>Asperanto</h1>

                <div className={'nav-organization'} >
                    <a onClick={() => this.changeBody('Description')}>Описание</a>
                    <a onClick={() => this.changeBody('Cards')}>Товары</a>
                    <a onClick={() => this.changeBody('Services')}>Услуги</a>
                    <a onClick={() => this.changeBody('Contacts')}>Контакты</a>
                    <a className={'call-organization'}>Свзяаться с представителем</a>
                </div>

                <div className={"body-organization"}>{body_component}</div>
            </div>
        )
    }
}