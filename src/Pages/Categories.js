import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./css/categories-page.css";
export class Categories extends Component {

    render() {
        const styles = {
        };

        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="category-header">
                        <h1 className="category-header-text">Категории</h1>
                    </div>
                    <div className='category-col'>
                        <Link to={"categories/oil-gas"}>
                            <div className="category-box category-box-background col1">
                                <div className="category-subbox category-box-shadowing">
                                    <h2>Нефтегазовая промышленность</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to={"categories/metallurgy"}>
                            <div className="category-box category-box-background col2">
                                <div className="category-subbox category-box-shadowing">
                                    <h2>Металлургия</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to={"categories/aviation"}>
                            <div className="category-box category-box-background col3">
                                <div className="category-subbox category-box-shadowing">
                                    <h2>Авиационная промышленность</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to={"categories/agriculture"}>
                            <div className="category-box category-box-background col4">
                                <div className="category-subbox category-box-shadowing">
                                    <h2>Сельскохозяйственная промышленность</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to={"categories/space-industry"}>
                            <div className="category-box category-box-background col5">
                                <div className="category-subbox category-box-shadowing">
                                    <h2>Космическая промышленность</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to={"categories/mining"}>
                            <div className="category-box category-box-background col6">
                                <div className="category-subbox category-box-shadowing">
                                    <h2>Горнодобывающая промышленность</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
