import React, { Component } from "react";
import "./css/projects.css";
import "./css/general.css";
import axios from "axios";
import {Link} from "react-router-dom";
import {Subproject} from "./Subproject";

export class Projects extends Component {
    constructor (props) {
        super(props);

        this.state = {
            orgName: '',
            orgProjects: [
            //     {
            //     __v: 0,
            //     _id: '5cc09eb14a2d1556234ef776',
            //     name: 'Карабах',
            //     creationDate: '2019-04-27T19:36:59.700Z',
            //     organization: '5cc08a0a98dfdb44b10e00d3',
            //     subprojects: []
            // },{
            //     __v: 0,
            //     _id: '5cc09eb14a2d1556234ef775',
            //     name: 'Барабах',
            //     creationDate: '2019-04-27T18:36:59.700Z',
            //     organization: '5cc08a0a98dfdb44b10e00d3',
            //     subprojects: []
            // }
            ],
            projectNameValue: "",
            subprojectNameValue: "",
            createProjectIndex: 0,
            errors: {}
        };

        this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
        this.handleSubprojectNameChange = this.handleSubprojectNameChange.bind(this);

    }

    CreateProjectOpenModal() {
        $('#CreateProjectModal').modal('show');
        // this.setState({
        //     createProjectIndex: project_index
        // });
    }

    CreateSubprojectOpenModal(project_index) {
        $('#CreateSubprojectModal').modal('show');
        this.setState({
            createProjectIndex: project_index
        });
    }

    CreateProjectCloseModal() {
        $('#CreateProjectModal').modal('hide');
    }

    CreateSubprojectCloseModal() {
        $('#CreateSubprojectModal').modal('hide');
    }

    componentDidMount() {

        //тут очень криво реализовано. Наверное действительно нужен общий storage проекта
        const authToken = localStorage.getItem('auth_token');
        if (authToken) {
            axios.get(`http://api.asperanto.com/api/accounts/profile`, {headers: { Authorization: authToken}})
                .then(res => {
                    const organizationUrlName = res.data.organization.comId.urlName;
                    let query = (`http://api.asperanto.com/api/organizations/` + organizationUrlName + `/private`);
                    axios.get( query, {headers: { Authorization: authToken}})
                        .then(res => {
                            const organization = res.data;
                            this.setState({organization});
                            const orgProjects = organization.projects;
                            this.setState({orgProjects});
                        })

                });
        }

        
    }
    handleProjectNameChange(event) {
        this.setState({projectNameValue: event.target.value});
    }

    handleSubprojectNameChange(event) {
        this.setState({subprojectNameValue: event.target.value});
    }


    addProject(e){
        e.preventDefault(); //prevent default page reloading
        const orgProjects = this.state.orgProjects;
        const value = this.state.projectNameValue;

        let newProject = {
            // __v: 0,
            // _id: '5cc09eb14a2d1556234ef777',
            name: value,
            // creationDate: '2019-04-27T20:36:59.700Z',
            // organization: '5cc08a0a98dfdb44b10e00d3',
            // subprojects: []
        };

        const authToken = localStorage.getItem('auth_token');
        if (authToken) {
            axios.post(`http://api.asperanto.com/api/projects/create`, newProject,
                {headers: { Authorization: authToken}})
                .then(res => {
                    const organizationUrlName = this.state.organization.urlName;
                    let query = (`http://api.asperanto.com/api/organizations/` + organizationUrlName + `/private`);
                    axios.get( query, {headers: { Authorization: authToken}})
                        .then(res => {
                            const organization = res.data;
                            this.setState({organization});
                            const orgProjects = organization.projects;
                            this.setState({orgProjects});
                        })
                });
        }

        console.log(orgProjects);
        // this.setState({
        //     orgProjects: [newProject, ...orgProjects],
        //     projectNameValue: "",
        // });
        console.log(this.state.orgProjects);
    }

    addSubproject(e, project_index){
        e.preventDefault(); //prevent default page reloading
        const orgSubprojects = this.state.orgProjects[project_index].subprojects;
        const value = this.state.subprojectNameValue;
        // this.setState(state => {
        const newSubProject = {
            // __v: 0,
            // _id: '5cc09eea4a2d1556234ef779',
            // organization: '5cc08a0a98dfdb44b10e00d3',
            name: value,
            // tradeRequests: []
            // // executors: 0
        };
        this.state.subprojectNameValue = "";
        const subprojectQuery = 'http://api.asperanto.com/api/projects/' +
            this.state.orgProjects[project_index]._id + '/subprojects/create';
        const authToken = localStorage.getItem('auth_token');
        if (authToken) {
            axios.post(subprojectQuery, newSubProject,
                {headers: { Authorization: authToken}})
                .then(res => {
                    const organizationUrlName = this.state.organization.urlName;
                    let query = (`http://api.asperanto.com/api/organizations/` + organizationUrlName + `/private`);
                    axios.get( query, {headers: { Authorization: authToken}})
                        .then(res => {
                            const organization = res.data;
                            this.setState({organization});
                            const orgProjects = organization.projects;
                            this.setState({orgProjects});
                        })
                });
        }

            // const list2 = state.orgProjects[project_index].subprojects;
            // state.orgProjects[project_index].subprojects = [newSubproject, ...orgSubprojects];

            // return state
        // });
    }

    render () {
        const organization = this.state.organization;
        // if (organization && organization.projects) {
        //     this.state.orgProjects = organization.projects;
        // }
        return (
            <div className="content">
                {organization &&
                <div className="container">
                    <div className="row account-column-names">
                        <div className="col-xl-12 project-header-column">
                            <div className="body-projects-header-block">
                                <div className="body-projects-header-block-name">
                                    <h2>Проекты</h2>
                                </div>
                                <div className="body-projects-under-header-block">
                                    <div className="body-projects-company">
                                        <div className="body-projects-company-logo-container">
                                            <div className="body-projects-company-logo">
                                                <img
                                                    src={organization.avatar}></img>
                                            </div>
                                        </div>
                                        <div className="body-projects-company-info">
                                            <h3>{organization.name}</h3>
                                            <p>{Object.keys(organization.members).length} участников</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="body-projects-add-one-block">
                                    <a onClick={(e) => {
                                        this.CreateProjectOpenModal()
                                    }}>
                                        <div className="body-projects-add-one-button">
                                            <i className="fa fa-plus add-project-button"/>
                                            <span>Добавить проект</span>
                                        </div>
                                    </a>
                                    <div id="CreateProjectModal" className="modal fade" role="dialog">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Создать проект</h4>
                                                    <button type="button" className="close" data-dismiss="modal"
                                                            aria-label="Close"><span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p className="modal-project-enter-hint">Введите название для нового
                                                        проекта </p>
                                                    <input type="text" value={this.state.projectNameValue}
                                                           onChange={this.handleProjectNameChange}/>
                                                </div>
                                                <div className="modal-footer">
                                                    <button className="btn btn-light" type="button"
                                                            data-dismiss="modal">Закрыть
                                                    </button>
                                                    <button className="btn btn-primary"
                                                            onClick={(e) => {
                                                                this.addProject(e);
                                                                this.CreateProjectCloseModal();
                                                            }}
                                                            type="button">Создать
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    { this.state.orgProjects && this.state.orgProjects.map((project, project_index) => (
                        <div className="row account-column-names project-row" key={'project_' + project_index}>
                            <div className="col-xl-12 project-header-column">
                                <div className="body-projects-project-block">
                                    <div className="body-projects-header-block-name">
                                        <h2 className="project-heading">{project.name}</h2>
                                    </div>
                                    <div className="body-projects-add-one-block add-subproject">
                                        <a onClick={(e) => {
                                            this.CreateSubprojectOpenModal(project_index)
                                        }}>
                                            {/*this.addSubproject(e, project_index);*/}
                                            <div className="body-projects-add-one-button">
                                                <i className="fa fa-plus add-project-button"/>
                                                <span>Добавить подпроект</span>
                                            </div>
                                        </a>
                                        <div id="CreateSubprojectModal" className="modal fade" role="dialog">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Создать подпроект</h4>
                                                        <button type="button" className="close" data-dismiss="modal"
                                                                aria-label="Close"><span aria-hidden="true">×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p className="modal-project-name">Проект:
                                                            "{this.state.orgProjects[this.state.createProjectIndex].name}"</p>
                                                        <p className="modal-subproject-enter-hint">Введите название для
                                                            нового подпроекта </p>
                                                        <input type="text" value={this.state.subprojectNameValue}
                                                               onChange={this.handleSubprojectNameChange}/>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button className="btn btn-light" type="button"
                                                                data-dismiss="modal">Закрыть
                                                        </button>
                                                        <button className="btn btn-primary"
                                                                onClick={(e) => {
                                                                    this.addSubproject(e, this.state.createProjectIndex);
                                                                    this.CreateSubprojectCloseModal();
                                                                }}
                                                                type="button">Создать
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body-projects-subprojects-box">
                                        {project.subprojects.map((subproject, subproject_index) => (
                                            <Link to={"/subproject"} key={'subproject_link_'
                                            + project_index + '_sub' + subproject_index}>
                                                <div className="body-projects-one-subproject-box" key={'subproject_'
                                                + project_index + '_sub' + subproject_index}>
                                                    <span className="box-name">{subproject.name}</span>
                                                    {/*Object.values(organization.projects).length*/}
                                                    {Object.keys(subproject.tradeRequests).length=== 0 ? (
                                                        <p className="box-performers no-performers">
                                                            {Object.keys(subproject.tradeRequests).length} потенциальных
                                                            исполнителей</p>
                                                    ) : (
                                                        <p className="box-performers">
                                                            {Object.keys(subproject.tradeRequests).length} потенциальных
                                                            исполнителей</p>
                                                    )}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                }
            </div>
        )}
}