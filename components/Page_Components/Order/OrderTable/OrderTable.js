import React from 'react';
import Order from './Order';


const OrderTable = () => {
    return (
        <>
            <div className="order-table-area">
                <div className="title-area">
                    <div className="row">
                        <div className="col-lg-9">
                            <ul className="top d-flex align-items-center">
                                <li className="item">Buyer: <span> ali_ahmed</span></li>
                                <li className="item">Website Development</li>
                            </ul>

                            <h3>I will do website design and mobile app design</h3>

                        </div>
                        <div className="col-lg-3">
                            <span className='order-id'>Order number#BO77</span>
                        </div>
                    </div>
                </div>
                <hr />

                <Order/>
            </div>
        </>
    );
};

export default OrderTable;