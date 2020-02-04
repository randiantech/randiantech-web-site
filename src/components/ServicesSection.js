import React from 'react';

export default class ServicesSection extends React.Component {
  render() {
    return (
      <section className="section services bg-gray" id="services">
        <div className="container">
          <div className="section-heading text-center wow fadeInUp">
            <h2 className="title text-center">
              <br />
            </h2>
            <ul className="nav nav-pills nav-pills-primary">
              <li className="active">
                <a href="#web-development" data-toggle="tab">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#microservices" data-toggle="tab">
                  Microservices
                </a>
              </li>
              <li>
                <a href="#qa-automation" data-toggle="tab">
                  QA & TESTING SERVICES
                </a>
              </li>
            </ul>
            <br />
          </div>
          <div>
            <div className="tab-content tab-space">
              <div className="tab-pane active" id="web-development">
                <div className="row">
                  <div className="col-md-5 col-md-offset-1">
                    <div className="img-container">
                      <img
                        src="img/web-dev.png"
                        alt="Feature image"
                        className="feature-img img-responsive"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="fa fa-code"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Quality Engineering</h4>
                        <p>
                          Quality does matter. All our solutions excels as
                          solid, maintainable and future-proof implementations
                          in order to provide predictive and successful results.
                        </p>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="fa fa-gears"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Software that Scales</h4>
                        <p>
                          Get ready-to-scale software. We have extensive
                          experience working with cloud platforms to leverage
                          your product right there in time.
                        </p>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="icofont-tools-alt-2"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Automation at is heart</h4>
                        <p>
                          We provide fully automated solutions for all our
                          client APIs. REST easy, go prod without hassle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="microservices">
                <div className="row">
                  <div className="col-md-5 col-md-offset-1">
                    <div className="img-container">
                      <img
                        src="img/mac-app.png"
                        alt="Feature image"
                        className="feature-img img-responsive"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="fa fa-desktop"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">RESTful & Microservices</h4>
                        <p>
                          Looking for a more flexible, scalable and predictable
                          architecture? Moving away from a monolithic
                          architecture? Met teams that has succesfully modernize
                          platforms, from startups to world-class companies.
                        </p>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="fa fa-heart-o"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Software that Scales</h4>
                        <p>
                          Get ready-to-scale software. We have extensive
                          experience working with cloud platforms to leverage
                          your product right there in time.
                        </p>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="fa fa-code"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Automation at is heart</h4>
                        <p>
                          We provide fully automated solutions for all our
                          client APIs. REST easy, go prod without hassle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="qa-automation">
                <div className="row">
                  <div className="col-md-5 col-md-offset-1">
                    <div className="img-container">
                      <img
                        src="img/web-design.png"
                        alt="Feature image"
                        className="feature-img img-responsive"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="icofont-bug"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Functional Testing</h4>
                        <p>
                          Testers provide a critic eye into requirements, make
                          them testable, iron out ambiguity and request missing
                          information.
                        </p>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="icofont-automation"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Test Automation</h4>
                        <p>
                          As projects go by, it becomes increasingly time
                          consuming to repeatedly run regression tests. With
                          test automation, regression tests are run at no cost,
                          even after every single change. Projects that automate
                          tests rely on them to improve their time to market by
                          adding the tests run into the deployment pipeline.
                        </p>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="icofont-tools"></i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Non Functional Testing</h4>
                        <p>
                          Non-functional testing encompasses test how a system
                          performs its tasks. The most common form of
                          non-functional testing is performance testing: giving
                          information about how many concurrent users can a
                          certain application handle, what are its response
                          times and how much server resources are being consumed
                          at each step.
                        </p>
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
