import React from 'react';

export default class Subscribe extends React.Component {
    render() {
        return null;
        return (
            <div className="subscribe bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="title">Subscribe to our news letter</h3>
                        </div>
                        <div className="col-md-6 text-right">
                            <form method="post" id="subscribe">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                            <div className="form-group is-empty">
                                                <input type="email" value="" placeholder="Your Email..." className="form-control" />
                                                <span className="material-input"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <button type="button" className="btn btn-info">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
