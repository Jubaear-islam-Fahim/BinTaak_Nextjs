import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const OrderAction = () => {
    return (
        <>
            <div className="order-action">
                <h3>Order Details</h3>
                <hr />

                <div className="content">
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> <i className="ri-questionnaire-line"></i> FAQ</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            </Accordion.Body>
                        </Accordion.Item>
                        <hr />
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><i className="ri-questionnaire-line"></i>Resolution Center</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default OrderAction;