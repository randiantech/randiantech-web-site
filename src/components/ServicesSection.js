import React from 'react';

export default class ServicesSection extends React.Component {
    render() {
        return (
            <section className="section services bg-gray" id="services">
                <div className="container">
                    <div className="section-heading text-center wow fadeInUp">
                        <h2 className="title text-center"><br /></h2>
                        <ul className="nav nav-pills nav-pills-primary">
                            <li className="active">
                                <a href="#web-design" data-toggle="tab">Web Design</a>
                            </li>
                            <li>
                                <a href="#web-development" data-toggle="tab">Web Development</a>
                            </li>
                            <li>
                                <a href="#api-development" data-toggle="tab">API Development</a>
                            </li>
                        </ul>
                        <br />
                    </div>
                    <div>
                        <div className="tab-content tab-space">
                            <div className="tab-pane active" id="web-design">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="img-container">
                                            <img src="img/web-design.png" alt="Feature image" className="feature-img img-responsive" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-desktop"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Responsive Design</h4>
                                                <p>We craft solutions to seamlessly adopt and work as expected on as many devices as needed</p>
                                            </div>
                                        </div>
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-diamond"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Multi-purpose</h4>
                                                <p>We have succesfully delivered responsive designs for E-commerce platforms, Admin Dashboards, Analytics Consoles, Institutional Sites and more </p>
                                            </div>
                                        </div>
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-trophy"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">High Quality</h4>
                                                <p>Pixel perfect, detail obsessive approach to get the best possible user experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="web-development">
                                <div className="row">
                                    <div className="col-md-5 col-md-offset-1">
                                        <div className="img-container">
                                            <img src="img/web-dev.png" alt="Feature image" className="feature-img img-responsive" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-code"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Quality Engineering</h4>
                                                <p>Quality does matter. All our solutions excels as solid, maintainable and future-proof implementations in order to provide predictive and successful results.</p>
                                            </div>
                                        </div>
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-gears"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Software that Scales</h4>
                                                <p>Get ready to scale software. We have extensive experience working with cloud platforms to leverage your product right there in time.</p>
                                            </div>
                                        </div>
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-laptop"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Modern Stack</h4>
                                                <p>React, React Native, VueJS, Angular 5, Less, SaSS, Webpack, NodeJS. The right technologies to get a modern, adaptable and maintanable web.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="api-development">
                                <div className="row">
                                    <div className="col-md-5 col-md-offset-1">
                                        <div className="img-container">
                                            <img src="img/mac-app.png" alt="Feature image" className="feature-img img-responsive" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-desktop"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">RESTful & Microservices</h4>
                                                <p>Looking for a more flexible, scalable and predictable architecture? Moving away from a monolithic architecture? Met the team that has succesfully modernize platforms from startups to world-class companies.</p>
                                            </div>
                                        </div>
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-heart-o"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Software that Scales</h4>
                                                <p>Get ready-to-scale software. We have extensive experience working with cloud platforms to leverage your product right there in time.</p>
                                            </div>
                                        </div>
                                        <div className="info info-horizontal">
                                            <div className="icon icon-primary">
                                                <i className="fa fa-code"></i>
                                            </div>
                                            <div className="description">
                                                <h4 className="info-title">Automation at is heart</h4>
                                                <p>We provide fully automated solutions for all our client APIs. REST easy, go prod without hassle.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}