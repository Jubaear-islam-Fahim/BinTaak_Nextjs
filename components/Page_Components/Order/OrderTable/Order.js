import React from 'react';
import Table from 'react-bootstrap/Table';

const Order = () => {
    return (
        <>
            <div className="order">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Duration</th>
                            <th>Price</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr className='data'>
                            <td>
                                <h3>Website design and mobile app design</h3>
                                <ul>
                                    <li> <i className="ri-check-line"></i> Website design</li>
                                    <li> <i className="ri-check-line"></i> Website design</li>
                                    <li> <i className="ri-check-line"></i> Website design</li>
                                </ul>
                            </td>
                            <td className='w-200'>1</td>
                            <td>10 days</td>
                            <td>$500</td>
                        </tr>
                        <tr className='total'>
                            <td>Total</td>
                            <td colSpan={2}></td>
                            <td>$500</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Order;