/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import data from '../data';

export default class Header extends React.Component {
    render() {
        const { header } = data;
        return (
            <div className="" id="headers">
                <div className="header">
                    <nav id="sticky-nav" className="navbar navbar-custom sticky navbar-center">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example">
                                    <span className="sr-only">{header.msg.toggleNavigation}</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <img src="img/logo.png" alt="logo" className="img-responsive rt-logo" />
                            </div>
                            <div className="collapse navbar-collapse" id="navigation-example">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="#about">{header.msg.about}</a>
                                    </li>
                                    <li>
                                        <a href="#services">{header.msg.services}</a>
                                    </li>
                                    <li>
                                        <a href="#team">{header.msg.team}</a>
                                    </li>
                                    <li>
                                        <a href="#clients">{header.msg.clients}</a>
                                    </li>
                                    <li>
                                        <a href="#contact">{header.msg.contact}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div id="home" className="page-hero">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 col-md-offset-0 col-sm-8 col-sm-offset-2 home-text">
                                    <h1 className="title">{header.msg.welcomeTo}<strong>{header.msg.randiantech}</strong></h1>
                                    <p className="up-type-title"> {header.msg.weAreExpertsIn}
                                        <span className="animated-text" id="animated-text"></span>
                                    </p>
                                    <p className="p-details">
                                        {header.msg.details}
                                    </p>
                                    <div className="header-app-icons">
                                        <ul>
                                            <li>
                                                <a href={header.facebookLink} className="btn">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={header.twitterLink} className="btn">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={header.linkedinLink} className="btn">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={header.instagramLink} className="btn">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5 text-center">
                                    <img src={header.headerImgUrl} alt="header image" className="header-img img-responsive" />
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