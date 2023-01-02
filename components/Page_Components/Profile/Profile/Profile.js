import React from 'react';

const Profile = () => {
    return (
        <>
            <div className="profile-area">
                <span className='badge'>Freelancer</span>
                <div className="profile">
                    <div className="pro-img">
                        <img src="/assets/img/profile.png" alt="profile" />
                    </div>
                    <p>hazrat <i className="ri-checkbox-circle-line"></i></p>
                    <span>Coding is my Heart !</span>
                    <ul className='rate ms-2 d-flex align-items-center'>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li className='ratenumber'>5.0</li>
                        <li className='number'>(418)</li>
                    </ul>
                    <a href="#" className="box-btn">Contact Me</a>

                    <hr />
                </div>

                <ul className="profile-list">
                    <li>
                        <ul className='d-flex align-items-center justify-content-between'>
                            <li><i className="ri-map-pin-line"></i> From</li>
                            <li>United State</li>
                        </ul>
                    </li>
                    <li>
                        <ul className='d-flex align-items-center justify-content-between'>
                            <li><i className="ri-shield-user-line"></i> Member Since</li>
                            <li>2121</li>
                        </ul>
                    </li>
                    <li>
                        <ul className='d-flex align-items-center justify-content-between'>
                            <li><i className="ri-time-line"></i> Avg Response Time</li>
                            <li>1 Hour</li>
                        </ul>
                    </li>
                    <li>
                        <ul className='d-flex align-items-center justify-content-between'>
                            <li><i className="ri-map-pin-time-line"></i>Last Delivery</li>
                            <li>1 Hour</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Profile;