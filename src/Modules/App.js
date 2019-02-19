import React, { Component} from "react";
import { Navbar } from './Navbar.js';
import { Footer } from './Footer.js';
import { Main } from './Main.js';
import { Sidebar } from './Sidebar';


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            sidebar: false,
            searchBox: {
                activated: false,
                value: '',
                additionalInfo: {
                    typeOfSearch: 'goods',
                },
            },
        };

        this.sidebarChangeState = this.sidebarChangeState.bind(this);
        this.searchBoxPopUp = this.searchBoxPopUp.bind(this);
        this.closeModalWindows = this.closeModalWindows.bind(this);
        this.getSearchBoxAdditionalInfo = this.getSearchBoxAdditionalInfo.bind(this);
        this.getSearchBoxQuery = this.getSearchBoxQuery.bind(this);
    }

    sidebarChangeState() {
        this.setState(
            {sidebar: !this.state.sidebar},
        );
    }

    searchBoxPopUp(e) {
        if (!this.state.searchBox.activated)
            this.setState(
                {
                    searchBox: {
                        activated: !this.state.searchBox.activated,
                        value: this.state.searchBox.value,
                        additionalInfo: this.state.searchBox.additionalInfo,
                    }},
            );

        e.stopPropagation();
    }

    closeModalWindows() {
        if (this.state.searchBox.activated)
            this.setState(
                {
                    searchBox: {
                        activated: !this.state.searchBox.activated,
                        value: this.state.searchBox.value,
                        additionalInfo: this.state.searchBox.additionalInfo,
                    }},
            );

        if (this.state.sidebar)
            this.setState(
                {
                    sidebar: !this.state.sidebar,
                }
            )
    }

    getSearchBoxAdditionalInfo(e) {
        this.setState(
            {
                searchBox: {
                    activated: this.state.searchBox.activated,
                    value: this.state.searchBox.value,
                    additionalInfo: {
                        typeOfSearch: e.target.value,
                    },
                }},
        );

        e.stopPropagation();
    }

    getSearchBoxQuery(e) {
        this.setState(
            {
                searchBox: {
                    activated: this.state.searchBox.activated,
                    value: e.target.value,
                    additionalInfo: this.state.searchBox.additionalInfo,
                }
            }
        );
    }

    render(){
        let sidebar;

        if (this.state.sidebar)
            sidebar = <Sidebar sidebarUntoggle={this.sidebarChangeState}/>;
        else
            sidebar = null;

        return (
            <div className={"wrapper"}>
                {sidebar}

                <div className="wrapper-page" onClick={ this.closeModalWindows }>
                    <Navbar sidebarToggle={ this.sidebarChangeState } searchBoxToggle={ this.searchBoxPopUp } searchBoxQuery={ this.getSearchBoxQuery }/>

                    <Main state={ this.state } getAddInfo={this.getSearchBoxAdditionalInfo}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

if(typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef
}

export default App;