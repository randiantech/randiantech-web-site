import React from 'react';

export default class ContactUsSection extends React.Component {
  render() {
    return (
      <section className="section section-image" id="contact">
        <div className="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="title">Get in Touch</h2>
                <p className="details">
                  Randiantech office are located at the heart of Buenos Aires
                  City.
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
                          Esmeralda 950
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
                        <p>
                          {' '}
                          Randiantech
                          <br /> info@randiantech.com
                          <br /> (+54 9) 11 5606 5555
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
