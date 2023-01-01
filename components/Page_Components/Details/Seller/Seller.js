import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
const Seller = () => {
    return (
        <>
            <div className="seller-top">
                <div className="single-seller d-flex align-items-center">
                    <div className="icon me-3">
                        <i className="ri-shield-check-fill"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ac aliquet odio mattis. <a href="#">Learn more</a>
                    </p>
                </div>

                <div className="single-seller-one">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Contact Seller
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Contact Seller</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="main-seller">
                    <h3>About This Seller</h3>
                    <div className="single">
                        <div className="row">
                            <div className="col-lg-2 col-3">
                                <div className="img">
                                <img src="assets/img/user.png" alt="user" />
                                </div>
                            </div>
                            <div className="col-lg-10 col-9 ps-0">
                                <div className="content">
                                    <p>bintaak</p>
                                    <ul className='review d-flex align-items-center'>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li><i className="ri-star-fill"></i></li>
                                        <li className='ms-2'>5</li>
                                        <li className='ms-2'><span>(122)</span></li>
                                    </ul>
                                    <p className='desc'>Coding is my Heart and Working with businesses is my addiction</p>
                                    <span className='map' ><i className="ri-map-pin-line"></i> United State</span>
                                    <button className="border-btn">Contact Me</button>
                                   
                                </div>
                            </div>
                            <hr />
                                    <p>Lorem ipsum dolor sit amet consectetur. Lorem cursus ornare turpis d`ellentesque a quam suspendisse. Lorem ipsum dolor sit amet consectetur. Lorem cursus ornare turpis d`ellentesque a quam suspendisse. Lorem ipsum dolor sit amet consectetur. Lorem cursus ornare turpis d`ellentesque a quam suspendisse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Seller;