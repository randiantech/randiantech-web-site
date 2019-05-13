import React from 'react';

export default class ContactUsSection extends React.Component {
    render() {
        return (
            <section className="section section-image" id="contact">
                <div className="contact-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h2 className="title">Get in Touch</h2>
                                <p className="details">
                                    Randiantech office are located at the heart of Buenos Aires City.
                        </p>
                                <div className="row">
                                    <div className="col col-sm-6 col-sm-offset-0 col-xs-11 col-xs-offset-1 col-md-12">
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Find our office</h4>
                                                <p>
                                                    Carlos Pellegrini 465
                                            <br /> CABA
                                            <br /> Argentina
                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-sm-6 col-sm-offset-0 col-xs-11 col-xs-offset-1 col-md-12">
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Contact us</h4>
                                                <p> Randiantech
                                            <br /> info@randiantech.com
                                            <br /> 15 5555 5555
                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-md-offset-2">
                                <div className="card card-contact">
                                    <form id="contactForm" method="post" novalidate>
                                        <div className="header header-raised header-primary text-center">
                                            <h4 className="card-title">Contact Us</h4>
                                        </div>
                                        <div className="card-layer"></div>
                                        <div className="content">
                                            <div id="success"></div>
                                            <div className="form-group label-floating">
                                                <label className="control-label">First name
                                            <i className="help-block text-danger"></i>
                                                </label>
                                                <input type="text" name="name" id="name" className="form-control" required data-validation-required-message="Please enter your name." />
                                            </div>
                                            <div className="form-group label-floating">
                                                <label className="control-label">Email address
                                            <i className="help-block text-danger"></i>
                                                </label>
                                                <input type="email" name="email" id="email" className="form-control" required data-validation-required-message="Please enter your email address."
                                                />
                                            </div>
                                            <div className="form-group label-floating">
                                                <label className="control-label">Your message
                                            <i className="help-block text-danger"></i>
                                                </label>
                                                <textarea name="message" className="form-control" rows="6" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" name="optionsCheckboxes" /> I'm not a robot
                                                </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="submit" className="btn btn-primary pull-right">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}