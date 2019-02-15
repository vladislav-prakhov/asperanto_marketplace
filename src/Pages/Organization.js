import React, { Component } from 'react';
import './css/organization.css';
import { Description } from './body_components/Description';
import { Goods } from './Goods';
import { Contacts } from './Contacts';

export class Organization extends Component {
    render() {
        let body_component = <Description/>;

        if (this.props.body_org == 'desc')
            body_component = <Description/>
        else if (this.props.body_org == 'goods')
            body_component = <Goods/>
        else if (this.props.body_org == 'contacts')
            body_component = <Contacts/>

        return (
            <div className={"main-organization"}>
                <div className={"name-organization"}>Asperanto</div>

                <div className={'nav-organization'}>
                    <a>Описание</a>
                    <a>Товары и услуги</a>
                    <a>Контакты</a>
                </div>

                <div className={"body-organization"}>{body_component}</div>
            </div>
        )
    }
}