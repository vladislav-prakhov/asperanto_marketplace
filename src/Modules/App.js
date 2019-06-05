import React, { Component} from "react";
import { withRouter } from "react-router";
import { Footer } from './Footer.js';
import { Main } from './Main.js';
import { Header } from "./Header";
import queryString from "querystring";
import axios from "axios";


class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            organization: {},
            search_field_value: '',
        };

        this.getSearchFieldToApp = this.getSearchFieldToApp.bind(this);
    };


    getSearchFieldToApp(fieldValue) {
        this.setState({search_field_value: fieldValue});
    };



    componentDidMount() {
        const authToken = localStorage.getItem('auth_token');

        if (authToken) {
            axios.get(`http://api.asperanto.com/api/accounts/profile`, {headers: { Authorization: authToken}})
                .then(res => {
                    const user = res.data.user;
                    this.setState({ user });
                    console.log(user);
                    const organization = res.data.organization;
                    this.setState({organization});
                });
        }


    }


    render(){
        const HeaderWithRouter = withRouter(Header);
        $('#MobileHeaderModal').modal('hide');
        return (
            <div className="full-page">
                <HeaderWithRouter user={this.state.user} organization={this.state.organization}
                                  getSearchFieldToApp={this.getSearchFieldToApp}/>
                {/*<Main state={ this.state } getAddInfo={this.getSearchBoxAdditionalInfo}/>*/}
                <Main user={this.state.user} organization={this.state.organization} searchFieldValue={this.state.search_field_value}/>
                <Footer/>
            </div>
        );
    }
}

export default App;