import React from 'react';

export default class ClientsSection extends React.Component {
    render() {
        return (
            <section id="clients" className="section clients">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2 className="title blackBackground">Clients</h2>
                    </div>
                    <div className="clients-logo" id="clients-logo">
                        <div className="slider" id="slider">
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo1.png" alt="" />
                                </a>
                            </div>
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo2.png" alt="" />
                                </a>
                            </div>
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo3.png" alt="" />
                                </a>
                            </div>
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo4.png" alt="" />
                                </a>
                            </div>
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo5.png" alt="" />
                                </a>
                            </div>
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo1.png" alt="" />
                                </a>
                            </div>
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo2.png" alt="" />
                                </a>
                            </div>
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo3.png" alt="" />
                                </a>
                            </div>
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo4.png" alt="" />
                                </a>
                            </div>
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo5.png" alt="" />
                                </a>
                            </div>
                            <div className="clients-content">
                                <a href="#">
                                    <img src="img/support/logo1.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 clients-text">
                            <h2 className="blackBackground">Outstanding minds build great software.</h2>
                            <p className="subTitleClientsStyles">
                                WE HAVE THEM.
                            </p>
                        </div>
                        <div className="col-md-6 col-md-offset-1">
                            <div className="owl-carousel" id="owl-carousel">
                                <div className="single-review text-center">
                                    <img src="img/team/ceo.jpeg" alt="" className="img-circle" />
                                    <div className="review_content">
                                        <blockquote>TBD2</blockquote>
                                        <div className="review-author">TBD1</div>
                                    </div>
                                </div>
                                <div className="single-review text-center">
                                    <img src="img/team/cto.png" alt="" className="img-circle" />
                                    <div className="review_content">
                                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore consequuntur, consequatur
                                        ad nesciunt nulla voluptate voluptates.</blockquote>
                                        <div className="review-author">Lucas Campana, CTO</div>
                                    </div>
                                </div>
                                <div className="single-review text-center">
                                    <img src="img/clients/3.png" alt="" className="img-circle" />
                                    <div className="review_content">
                                        <blockquote>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore odit voluptates vero ea, sint! Eligendi?
                                        </blockquote>
                                        <div className="review-author">Alexa, SEO Expert</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}