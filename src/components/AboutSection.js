import React from 'react';

export default class AboutSection extends React.Component {
    render() {
        return (
            <section className="section" id="about">
                <div className="container">
                    <div className="section-heading text-center wow fadeInUp">
                        <h2 className="title">About Randiantech</h2>
                        <h5 className="description">Incorporated by recognized IT professionals, Randiantech has rapidly become a well-known partner to accomplish world-class and startups
                    mission critical projects.</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-4 wow fadeInUp">
                            <div className="info info-horizontal">
                                <div className="icon icon-success">
                                    <i className="fa fa-cubes"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Met the Team </h4>
                                    <p>
                                        Get connected with highly skilled, experienced developers that leverages the newest in technology to amplify your organization's
                                        potential.
                            </p>
                                    <a href="#up">More...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp">
                            <div className="info info-horizontal">
                                <div className="icon icon-danger">
                                    <i className="fa fa-heartbeat"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">All Things Web!</h4>
                                    <p>
                                        With Javascript as our strongest, essential area of expertise, we have extensive experience on web, storage, mobile, testing
                                        and infrastructure.
                            </p>
                                    <a href="#up">More...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 wow fadeInUp">
                            <div className="info info-horizontal">
                                <div className="icon icon-info">
                                    <i className="fa fa-columns"></i>
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Agile Development</h4>
                                    <p>
                                        We provide high quality training and coaching to companies -from startups to corporations- to help them find and adopt agile
                                        methodology to their own company needs.
                            </p>
                                    <a href="#up">More...</a>
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
