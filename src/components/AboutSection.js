import React from 'react';

export default class AboutSection extends React.Component {
    render() {
        return (
            <section className="section" id="about">
                <div className="container">
                    <div className="section-heading text-center wow fadeInUp">
                        <h2 className="title">About Randiantech</h2>
                        <h5 className="description">Incorporated by recognized IT professionals, Randiantech has become a trusted partner to accomplish mission critical software projects, no matter the scale of your company.</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-4 wow fadeInUp">
                            <div className="info info-horizontal">
                                <div className="icon icon-success">
                                    <i className="icofont-people"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Met the Team </h4>
                                    <p>
                                        Get connected with highly skilled development teams with vast experience in disrupting technologies to amplify your organization's potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp">
                            <div className="info info-horizontal">
                                <div className="icon icon-danger">
                                    <i className="icofont-architecture-alt"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">All Things Web!</h4>
                                    <p>
                                        Randiantech talents have strong experience on Web Technologies, mastering web, data, mobile, testing and infrastructure as a service.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp">
                            <div className="info info-horizontal">
                                <div className="icon icon-info">
                                    <i className="icofont-unique-idea"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Agile Development</h4>
                                    <p>
                                        We provide high quality training and coaching -from startups to corporations- to help you find and adopt agile
                                        methodology to your own needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <img src="img/about-img.png" alt="" className="img-responsive" />
                    </div>
                </div>
            </section>
        )
    }
}
