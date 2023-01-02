import React from 'react';
import Table from 'react-bootstrap/Table';
const Active = () => {
    return (
        <>
            <div className="pending-area active-area">
                <h3>Active Orders</h3>
                <div className="single-order">
                    <div className="top d-flex align-items-center justify-content-between mb-4">
                        <h5><span>By</span> Hazrat Ali</h5>
                        <p>Order id #123445</p>
                    </div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th >Bin</th>
                                <th>Order date</th>
                                <th>Deliver date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='bin'>
                                    <div className="row">
                                        <div className="col-3">
                                            <img className='binImg' src="/assets/img/s1.jpg" alt="" />
                                        </div>
                                        <div className="col-9">
                                            <p className='data'>I will design, redesign or update responsive squarespace websites</p>
                                        </div>
                                    </div>
                                </td>
                                <td>01/12/2022</td>
                                <td>01/12/2022</td>
                                <td>$500</td>
                                <td> <span className='progress'>Unpaid</span></td>
                                <td> <span >  <a className='view' href="#">View</a></span></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className="single-order">
                    <div className="top d-flex align-items-center justify-content-between mb-4">
                        <h5><span>By</span> Hazrat Ali</h5>
                        <p>Order id #123445</p>
                    </div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th >Bin</th>
                                <th>Order date</th>
                                <th>Deliver date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='bin'>
                                    <div className="row">
                                        <div className="col-3">
                                            <img className='binImg' src="/assets/img/s1.jpg" alt="" />
                                        </div>
                                        <div className="col-9">
                                            <p className='data'>I will design, redesign or update responsive squarespace websites</p>
                                        </div>
                                    </div>
                                </td>
                                <td>01/12/2022</td>
                                <td>01/12/2022</td>
                                <td>$500</td>
                                <td> <span className='progress'>Unpaid</span></td>
                                <td> <span > <a   className='view'href="#">View</a></span></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        </>
    );
};

export default Active;