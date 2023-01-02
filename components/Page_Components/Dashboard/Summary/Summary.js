import React from 'react';

const Summary = () => {
    return (
        <>
            <div className="summary-area">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-summary active">
                            <div className="icon">
                                <i className="ri-article-line"></i>
                            </div>
                            <div className="content">
                                <h3>Total Orders</h3>
                                <h5>$125</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-summary">
                            <div className="icon">
                            <i className="ri-money-dollar-circle-line"></i>
                            </div>
                            <div className="content">
                                <h3>Total Earn</h3>
                                <h5>$1250</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-summary">
                            <div className="icon">
                            <i className="ri-money-pound-circle-line"></i>
                            </div>
                            <div className="content">
                                <h3>Total Spent</h3>
                                <h5>$125</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Summary;