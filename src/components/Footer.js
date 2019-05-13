import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer section">
                <div className="container footer-widget">
                    <div className="row">
                        <div className="col col-sm-3">
                            <a href="#">
                                <img src="img/logo.png" alt="Company logo" className="footer-logo img-responsive" />
                            </a>
                            <div className="social">
                                <a href="https://www.facebook.com/randiantech/">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#social">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#social">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                                <a href="#social">
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                                <a href="#social">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </div>
                            <hr className="up-hr" />
                            <a className="btn btn-primary light btn-sm" href="#link">Company Brochure</a>
                        </div>
                        <div className="col col-sm-3">
                            <h6 className="typo-light hd">Product</h6>
                            <ul className="list-1">
                                <li>
                                    <a href="#link">Services</a>
                                </li>
                                <li>
                                    <a href="#link">Support</a>
                                </li>
                                <li>
                                    <a href="#link">Help</a>
                                </li>
                                <li>
                                    <a href="#link">Plan and Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col col-sm-3">
                            <h6 className="typo-light hd">Company</h6>
                            <ul className="list-1">
                                <li>
                                    <a href="#link">About us</a>
                                </li>
                                <li>
                                    <a href="#link">Privacy</a>
                                </li>
                                <li>
                                    <a href="#link">Terms and Condition</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col col-sm-3">
                            <div className="newsletter">
                                <h6 className="typo-light">Newsletter</h6>
                                <p>Sign up for the latest news &amp; offers.</p>
                                <div id="subscribe-success"></div>
                                <form className="form-widget subscribe-form" id="subscribe-form">
                                    <div className="field-group">
                                        <input type="email" className="form-control" placeholder="Enter Your Email" />
                                        <button type="submit" id="submit" className="btn footer-btn btn-primary">
                                            <i className="fa fa-envelope-o"></i>
                                        </button>
                                    </div>
                                    <div className="msg-wrp"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}