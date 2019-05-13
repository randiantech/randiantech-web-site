import React from 'react';
import data from '../data';

export default class Header extends React.Component {
    render() {
        const {header} = data;
        return (
            <div className="" id="headers">
                <div className="header">
                    <nav id="sticky-nav" className="navbar navbar-custom sticky navbar-center">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example">
                                    <span className="sr-only">{header.toggleNavigation}</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="" href="#up">
                                    <img src="img/logo.png" alt="logo" className="img-responsive navbar-brand" />
                                </a>
                            </div>
                            <div className="collapse navbar-collapse" id="navigation-example">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="#about">{header.about}</a>
                                    </li>
                                    <li>
                                        <a href="#services">{header.services}</a>
                                    </li>
                                    <li>
                                        <a href="#team">{header.team}</a>
                                    </li>
                                    <li>
                                        <a href="#clients">{header.clients}</a>
                                    </li>
                                    <li>
                                        <a href="#contact">{header.contact}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div id="home" className="page-hero">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-0 col-sm-8 col-sm-offset-2 home-text">
                                    <h1 className="title">Welcome to
                                <strong>RandianTech</strong>
                                    </h1>
                                    <p className="up-type-title"> {header.weAreExpertsIn}
                                        <span className="animated-text" id="animated-text"></span>
                                    </p>
                                    <p className="p-details">
                                        Get access to a talented, multidisciplinary team of experienced software engineers, specialized in developing New Products,
                                        QA and Staff Augmentation.
                            </p>
                                    <div className="header-app-icons">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/randiantech/" className="btn">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#link" className="btn">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#link" className="btn">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#link" className="btn">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5 text-center">
                                    <img src="img/header-img.png" alt="header image" className="header-img img-responsive" />
                                </div>
                            </div>
                            <div id="particles-js"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};