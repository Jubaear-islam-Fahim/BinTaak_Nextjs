import React from 'react';

const OrderDetails = () => {
    return (
        <>
            <div className="order-details-area">
                <h3>Order Details</h3>
                <hr />
                <div className="content">
                    <div className="row">
                        <div className="col-5">
                            <div className="img">
                                <img src="/assets/img/s1.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-7 ps-0">
                            <h4> Website design and mobile app design</h4>
                            <span className='badge'>Progress</span>
                        </div>
                    </div>

                    <ul className="profile-list">
                        <li>
                            <ul className='d-flex align-items-center justify-content-between'>
                                <li>Ordered by</li>
                                <li><span className='name'>ali_ahmed</span></li>
                            </ul>
                        </li>
                        <li>
                            <ul className='d-flex align-items-center justify-content-between'>
                                <li>Delivery date</li>
                                <li>15/12/22</li>
                            </ul>
                        </li>
                        <li>
                            <ul className='d-flex align-items-center justify-content-between'>
                                <li>Total price</li>
                                <li>$500</li>
                            </ul>
                        </li>
                        <li>
                            <ul className='d-flex align-items-center justify-content-between'>
                                <li>Order number</li>
                                <li>#7895769</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default OrderDetails;