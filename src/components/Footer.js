import React from 'react';
import data from '../data';

export default class Footer extends React.Component {
  render() {
    const {footer} = data;
    return (
      <footer className="footer section">
        <div className="container footer-widget">
          <div className="row">
            <div className="col col-sm-3">
              <a href="#">
                <img
                  src="img/logo.png"
                  alt="Company logo"
                  className="footer-logo img-responsive"
                />
              </a>
              <div className="social">
                <a href={footer.facebookLink}>
                  <i className="fa fa-facebook"></i>
                </a>
                <a href={footer.twitterLink}>
                  <i className="fa fa-twitter"></i>
                </a>
                <a href={footer.youtubeLink}>
                  <i className="fa fa-youtube-play"></i>
                </a>
                <a href={footer.instagramLink}>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <hr className="up-hr" />
            </div>
            <div className="col col-sm-3">
              <h6 className="typo-light hd">{footer.msg.product}</h6>
              <ul className="list-1">
                <li>
                  <a href="#services">{footer.msg.services}</a>
                </li>
                <li>
                  <a href="#services">{footer.msg.support}</a>
                </li>
                <li>
                  <a href="#services">{footer.msg.help}</a>
                </li>
              </ul>
            </div>
            <div className="col col-sm-3">
              <h6 className="typo-light hd">{footer.msg.company}</h6>
              <ul className="list-1">
                <li>
                  <a href="#about">{footer.msg.aboutUs}</a>
                </li>
              </ul>
            </div>
            <div className="col col-sm-3">
              <a className="btn btn-primary light btn-sm" href="#link">
                {footer.msg.companyBrochure}
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
