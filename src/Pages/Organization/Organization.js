import React, { Component } from 'react';
import '../css/organization.css';
import { Description } from './Description';
import { Goods } from '../Goods';
import { Contacts } from './Contacts';
import { Services } from '../Services';

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
        else if (this.state.bodyOrg === 'Goods')
            body_component = <Goods/>;
        else if (this.state.bodyOrg === 'Services')
            body_component = <Services/>;
        else if (this.state.bodyOrg === 'Contacts')
            body_component = <Contacts/>;


            return (
            <div className={"main-organization"}>
                <div className={"name-organization"}>Asperanto</div>

                <div className={'nav-organization'} onClick={console.log(this.state.bodyOrg)}>
                    <a onClick={() => this.changeBody('Description')}>Описание</a>
                    <a onClick={() => this.changeBody('Goods')}>Товары</a>
                    <a onClick={() => this.changeBody('Services')}>Услуги</a>
                    <a onClick={() => this.changeBody('Contacts')}>Контакты</a>
                </div>

                <div className={"body-organization"}>{body_component}</div>
            </div>
        )
    }
}