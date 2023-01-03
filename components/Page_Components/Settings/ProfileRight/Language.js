import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
const Language = () => {
    return (
        <>
            <div className="field-area">
                <h3 className="title">Languages</h3>

                <div className="language">
                    <div className="col-lg-12">
                        <div className="form-group desc mb-3">
                            <input type="text" name="lang" id="lang" className="form-control" required="" placeholder="Add Language" />
                        </div>
                        <div className="from-group">
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown-basic" className='w-100 d-block'>
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <hr />
                        <button className='box-btn'>Update</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Language;