import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Basic from './Basic';
import Premium from './Premium';
import Standerd from './Standerd';
const Plan = () => {

    const [key, setKey] = useState('basic');
    // const [plan, setPlan] = useState(data.plan);


    return (
        <>
            <div className="plan-area">

                <h3 className='title'>Choose plan</h3>

                <Tab.Container id="left-tabs-example" defaultActiveKey="basic">

                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="basic"> <i className="ri-checkbox-blank-circle-line"></i> Basic</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="standard"> <i className="ri-checkbox-blank-circle-line"></i> Standard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="premium"> <i className="ri-checkbox-blank-circle-line"></i>Premium</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="basic">
                            <Basic />
                        </Tab.Pane>
                        <Tab.Pane eventKey="standard">
                            <Standerd/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="premium">
                          <Premium/>
                        </Tab.Pane>
                    </Tab.Content>

                </Tab.Container>
            </div>
        </>
    );
};

export default Plan;