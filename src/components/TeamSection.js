import React from 'react';

export default class TeamSection extends React.Component {
    render() {
        return (
            <section className="section bg-gray" id="team">
                <div className="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center wow fadeInUp">
                                <h2 className="title">Randiantech Team</h2>
                                <h5 className="description">Delivering instantly loved software</h5>
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="#link">
                                            <img className="img" src="img/team/ceo.jpeg" alt="team" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4 className="card-title">Juan Carlos Cancela</h4>
                                        <h6 className="category text-muted">CEO / Co-Founder</h6>
                                        <p className="card-description">
                                            Motivated, action-oriented technology enthusiast with experience on multiple industries providing cutting edge technology
                                            solutions.
                                </p>
                                        <div className="footer">
                                            <a href="https://www.facebook.com/randiantech/" className="btn btn-just-icon btn-facebook btn-round">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a href="#link" className="btn btn-just-icon btn-twitter btn-round">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a href="#link" className="btn btn-just-icon btn-linkedin btn-round">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                            <a href="#link" className="btn btn-just-icon btn-dribbble btn-round">
                                                <i className="fa fa-dribbble"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="#link">
                                            <img className="img" src="img/team/cto.png" alt="team" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4 className="card-title">Lucas Campana</h4>
                                        <h6 className="category text-muted">CTO</h6>
                                        <p className="card-description">
                                            Software Architect with 15+ years of experience, working on critical IT positions on some of the most important companies
                                            in LATAM
                                </p>
                                        <div className="footer">
                                            <a href="https://www.facebook.com/randiantech/" className="btn btn-just-icon btn-facebook btn-round">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a href="#link" className="btn btn-just-icon btn-twitter btn-round">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a href="#link" className="btn btn-just-icon btn-linkedin btn-round">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                            <a href="#link" className="btn btn-just-icon btn-dribbble btn-round">
                                                <i className="fa fa-dribbble"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-profile card-plain">
                                    <div className="card-avatar">
                                        <a href="#link">
                                            <img className="img" src="img/team/3.jpg" alt="team" />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4 className="card-title">Guillermo Mulvihill</h4>
                                        <h6 className="category text-muted">Sales Account Manager</h6>
                                        <p className="card-description">
                                            Experienced sales account manager with vast experience on LATAM and US markets. Worked as Project Manager for top notch technology companies.
                                </p>
                                        <div className="footer">
                                            <a href="https://www.facebook.com/randiantech/" className="btn btn-just-icon btn-facebook btn-round">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a href="#link" className="btn btn-just-icon btn-twitter btn-round">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a href="#link" className="btn btn-just-icon btn-linkedin btn-round">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                            <a href="#link" className="btn btn-just-icon btn-dribbble btn-round">
                                                <i className="fa fa-dribbble"></i>
                                            </a>
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