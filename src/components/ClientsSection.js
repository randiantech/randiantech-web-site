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
                                    <div className="review_content">
                                        <blockquote>We have no hesitancy whatsoever in recommending Randiantech as a mission critical partner.</blockquote>
                                        <div className="review-author">Global Meaning</div>
                                    </div>
                                </div>
                                <div className="single-review text-center">
                                    <div className="review_content">
                                        <blockquote>Randiantech quickly became one of our most valued partners. Randiantech team dedication and willingness to work towards a first class deliverable is beyond our -high- initial expectations.</blockquote>
                                        <div className="review-author">Level 3 Communications</div>
                                    </div>
                                </div>
                                <div className="single-review text-center">
                                    <div className="review_content">
                                        <blockquote>
                                          I want to thank Randiantech team for the timely delivery of the product and for the outstanding engineering solutions provided.
                                        </blockquote>
                                        <div className="review-author">Evertok CEO</div>
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